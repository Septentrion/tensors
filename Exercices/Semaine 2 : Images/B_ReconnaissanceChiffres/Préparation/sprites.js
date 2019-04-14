/*
 * Récupération des images
 *
 * L'image PNG source n'est pas explitable directement. On peut le voir immédiatement
 * en l'affichant dans le navigateur.
 * L'objectif est de reconstituer les images des chiffres à partir des données contenues
 * dans la source.
 */

 /*------------------------*
  * Données initiales
  +------------------------*/

 /*
  * Source des des images des chiffres
  * Données binaires --> Non exploitables directement
  */
  const MNIST_IMAGES_SPRITE_PATH = 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';

  const NUM_DATASET_ELEMENTS = 65000;

  const IMAGE_SIZE = 28 * 28;

  // Constante pour stocker le contenu du fichier soursource PNG.
  const source = new Image();
  source.crossOrigin = '';
  source.onload = imageBuilder;

  /*
   * ArrayBuffer : Structure de données permettant de stocker des données binaires
   * de taille fixe.
   * On multiuplue par 4 puisque chaque pixel du 'canvas' est en RGBA
   */
  const datasetBytesBuffer = new ArrayBuffer(NUM_DATASET_ELEMENTS * IMAGE_SIZE * 4);

  /*
   * Tableau de réels (Float32Array) pour travailler sur datasetBytesBuffer
   */
  let datasetImages;

  /*
   * Taille du lot
   */
  const chunkSize = 500;

  /*
   * Elément 'canvas' virtuel pour stocker provisaoirement l'image source avant de la découper
   */
  const bufferCanvas = document.createElement('canvas');
  const ctx = bufferCanvas.getContext('2d');

  /*------------------------*
   * Fonctions
   +------------------------*/

   function transcode(i, chunkSize)
   {
     /*
      * Le tableau 'datasetBytesView' permet de manipuler les données du buffer 'datasetBytesBuffer'
      */
     const datasetBytesView = new Float32Array(
         datasetBytesBuffer, // le buffer
         i * IMAGE_SIZE * chunkSize * 4, // la position initiale dans le buffer
         IMAGE_SIZE * chunkSize // la taille de la fenêtre
       );

      /*
       * Ecriture dans la canvas pour produire l'image réelle
       */
     ctx.drawImage(
         source, // l'image à afficher dans le canvas
         0, // Décalage à gauche dans l'image source
         i * chunkSize, // Décalage en haut  dans l'image source
         source.width, // largeur de l'image à afficher
         chunkSize, // hauteur de l'image à afficher
         0, // position de l'image dans le canvas
         0,
         source.width,
         chunkSize);

     /*
      * Tableau pour récupérer les données de l'image réelle
      */
     const imageData = ctx.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);

     /*
      * Production des données d'entrée du processus d'apprentissage
      */
     for (let j = 0; j < imageData.data.length / 4; j++) {
       // Les images étant en niveaux de gris, on a juste besoin de lire la valeur de rouge,
       // les autres sont identiques
       datasetBytesView[j] = imageData.data[j * 4] / 255;
     }
   }

   function imageBuilder()
   {
     source.width = source.naturalWidth;
     source.height = source.naturalHeight;

     bufferCanvas.width = source.width;
     bufferCanvas.height = chunkSize;

     for (let i = 0; i < NUM_DATASET_ELEMENTS / chunkSize; i++) {
       transcode(i, chunkSize)
     }

     /*
      * Tableau de réels pour manipuler de buffer
      * maintenant rempli avec les données de l'image source
      */
     datasetImages = new Float32Array(datasetBytesBuffer);

     console.log('La première image :');
     console.log(datasetImages.slice(0, 28 * 28 * 3));
     // console.log(datasetImages);

     console.log("Display");
     const ctest = document.createElement('canvas');
     ctest.className = 'prediction-canvas';
     document.getElementById('imageset').appendChild(ctest);

     const [width, height] = [28, 28];
     ctest.width = width;
     ctest.height = height;
     const ctx = ctest.getContext('2d');
     const imageData = new ImageData(width, height);
     // const data = image.dataSync();
     for (let i = 0; i < 28 * 28 * 3; ++i) {
       const j = i * 4;
       const k = 784 + i;
       imageData.data[j + 0] = datasetImages[k] * 255;
       imageData.data[j + 1] = datasetImages[k] * 255;
       imageData.data[j + 2] = datasetImages[k] * 255;
       imageData.data[j + 3] = 255;
     }
     ctx.putImageData(imageData, 0, 0);

   }

  /*------------------------*
   * Exécution
   +------------------------*/

   source.src = MNIST_IMAGES_SPRITE_PATH;
