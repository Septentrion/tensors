/*-------------------*
 * Dépendances
 *-------------------*/

/*
* Import de la bibliothèque Tensorflow
*/
import * as tf from '@tensorflow/tfjs';

/*
 * Import des différentes classes (étiquettes) du modèle pré-entraîné
 */
import {IMAGENET_CLASSES} from './imagenet_classes';

/*
 * Import des fonctions pour l'affichage
 */
import * as ui from './ui.js';

/*-------------------*
 * Initialisation
 *-------------------*/

 /**
  * Source du modèle pré-entraîné
  * @type {String}
  */
 const MOBILENET_MODEL_PATH =
     // tslint:disable-next-line:max-line-length
     'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

 /**
  * Nombre de classes à afficher après la prédiction
  * @type {Number}
  */
 const TOPK_PREDICTIONS = 10;

 /**
  * Dimension du côté de l'image (les images sont carrées)
  * @type {Number}
  */
 export const IMAGE_SIZE = 224;

 /**
  * Le modèle Tensorflow
  * @type {Model}
  */
 let mobilenet;

/*------------------*
 * Fonctions
 *------------------*/

 /**
  * [mobilenetDemo description]
  * @return {Promise} [description]
  */
 export const imageClassify = async () => {
   ui.status('Import du modèle...');

   mobilenet = await tf.loadLayersModel(MOBILENET_MODEL_PATH);

   // Warmup the model. This isn't necessary, but makes the first prediction
   // faster. Call `dispose` to release the WebGL memory allocated for the return
   // value of `predict`.
   mobilenet.predict(tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3])).dispose();

   ui.status('En attente...');

   document.getElementById('file-container').style.display = '';
 };


/**
 * Reconnaissance du sujet contenu dans l'image
 *
 * @param  {[type]} imgElement [description]
 * @return {[type]}            [description]
 */
export async function classify(imgElement) {
  ui.status('Reconnaissance en cours...');

  const startTime = performance.now();
  const logits = tf.tidy(() => {
    // tf.browser.fromPixels() returns a Tensor from an image element.
    const img = tf.browser.fromPixels(imgElement).toFloat();

    const offset = tf.scalar(127.5);
    // Normalize the image from [0, 255] to [-1, 1].
    const normalized = img.sub(offset).div(offset);

    // Reshape to a single-element batch so we can pass it to predict.
    const batched = normalized.reshape([1, IMAGE_SIZE, IMAGE_SIZE, 3]);

    // Make a prediction through mobilenet.
    return mobilenet.predict(batched);
  });

  // Convert logits to probabilities and class names.
  const classes = await getTopKClasses(logits, TOPK_PREDICTIONS);
  const totalTime = performance.now() - startTime;

  ui.status(`Temps de calcul :  ${Math.floor(totalTime)}ms`);

  // Show the classes in the DOM.
  ui.showResults(imgElement, classes);
}

/**
 * Computes the probabilities of the topK classes given logits by computing
 * softmax to get probabilities and then sorting the probabilities.
 * @param logits Tensor representing the logits from MobileNet.
 * @param topK The number of top predictions to show.
 */
export async function getTopKClasses(logits, topK) {
  const values = await logits.data();

  const valuesAndIndices = [];
  for (let i = 0; i < values.length; i++) {
    valuesAndIndices.push({value: values[i], index: i});
  }
  valuesAndIndices.sort((a, b) => {
    return b.value - a.value;
  });
  const topkValues = new Float32Array(topK);
  const topkIndices = new Int32Array(topK);
  for (let i = 0; i < topK; i++) {
    topkValues[i] = valuesAndIndices[i].value;
    topkIndices[i] = valuesAndIndices[i].index;
  }

  const topClassesAndProbs = [];
  for (let i = 0; i < topkIndices.length; i++) {
    topClassesAndProbs.push({
      className: IMAGENET_CLASSES[topkIndices[i]],
      probability: topkValues[i]
    })
  }
  return topClassesAndProbs;
}
