/*
 * Récupération des étiquettes
 */

/*------------------------*
 * Données initiales
 +------------------------*/

/*
 * Source des étiquettes
 * Données binaires --> Non exploitables directement
 */
 const MNIST_LABELS_PATH = 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';

/*
 * Tableau d'entiers représentant les étiquettes
 * Chauqe étiquette est sous la forme d'un tbleau 'one-hot' :
 * [0, 0, 0, 1, 0, 0, 0, 0, 0, 0] <==> 4
 */
const labelsArray;


 /*------------------------*
  * Exécution
  +------------------------*/

labelsArray =
  // requête asynchrone pour récupérer les données --> Création d'un stream
  fetch(MNIST_LABELS_PATH)
  // récupération du flux de données dans un buffer
    .then(function (response){
      return response.arrayBuffer();
    })
  // création d'un tableau d'entiers associé au buffer (qui ne peut être manipulé directement)
    .then(function (buffer) {
     return new Uint8Array(buffer);
    })

console.log(labelsArray)
