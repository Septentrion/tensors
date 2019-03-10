/*
 * Dépendances
 */
// import * as tf from '@tensorflow/tfjs';
import * as Data from './data.js';

/*
 * Construction du modèle
 */

/*
 * Initialisation d'un modèle générique
 */
const model = tf.sequential();
// console.log (model);
/*
 * la première couche du réseau
 *
 * dense : complètement connectée
 * units : dimension de l'espace de sortie
 * inputShape : format des données d'entrée (ici un vecteur de la taille de la fenêtre)
 */
model.add(tf.layers.dense(
  {
    units: 1,
    inputShape: [2],
    useBias: true,
    kernelInitializer: 'zeros',
    biasInitializer: 'zeros'
  }
));

/*
 * Compilation du moèle pour la préparation à l'entraînement
 *
 * On fournit au compilateur :
 * - un algorithme d'apprentissage (ici l'algorithme d'Adam)
 * - la valeur de la perte qui doit être minimisée (i ic les moindres carrés)
 */
const learning_rate = 0.1;
const opt_adam = tf.train.adam(learning_rate);

model.compile(
  {
    optimizer: opt_adam,
    loss: 'meanSquaredError'
  }
);

/*
 * Création d'un tenseur pour représenter les exemples données au perceptron
 */
let examples = tf.tensor(Data.dataset);

/*
 * Création d'un tenseur contenant les étiquettes à apprendre
 */
let labels = tf.tensor(Data.classes);

/*
* Entraînement du modèle :
* Tensorflow fournit la méthde “fit”
* - xs : le jeu de données sur lesquelles on veut entraîner le modèle
* - ys : les étiquettes (valeurs attendues pour la prédiction)
* - batchSize : le nombre d'échantillons utilisés à chaque pas de l'évolution du gradient
* - epochs : le nombre d'itérations sur lesquelles entraîner le modèle
* - callbacks : un eensmeble de focntions à exécuter à des moments-clefs de l'apprentissage
* (ici à la fin de chaque époque)
*/

const history = async () => await model.fit(
  examples,
  labels,
  {
    // batchSize: rnn_batch_size,
    epochs: 10,
    callbacks: {
      onEpochEnd: async (epoch, log) => { console.log(epoch); }
    }
  }
);

history();

/**
 * Run inference on manually-input Iris flower data.
 *
 * @param model The instance of `tf.Model` to run the inference with.
 */
async function classify(model, sample) {
  if (model == null) {
    console.log('ERROR: Please load or train model first.');
    return;
  }

  // Use a `tf.tidy` scope to make sure that WebGL memory allocated for the
  // `predict` call is released at the end.
  tf.tidy(() => {
    // Prepare input data as a 2D `tf.Tensor`.
    // const inputData = ui.getManualInputData();
    const input = tf.tensor(sample);

    // Call `model.predict` to get the prediction output as probabilities for
    // the Iris flower categories.

    const predictOut = model.predict(input);
    const logits = Array.from(predictOut.dataSync());
    console.log(logits);
  });
}

document
  .querySelector('#validator')
  .addEventListener('click', function () {
    classify(model, Data.dataset);
  });
