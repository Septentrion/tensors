//
// UI
//

/*-------------------*
 * Initialisation
 *-------------------*/


/*
 * Un widget pour télécharger une image
 */
export const filesElement = document.getElementById('files');

/*
 * Un élément pour afficher les messages d'état du programme
 */
const demoStatusElement = document.getElementById('status');

/*
 * Un élément pour afficher les  prédictions
 */
const predictionsElement = document.getElementById('predictions');

/*
 * Attribut 'id' pour l'élément afficahnt les résultats
 */
const CONTAINER_ID = "pred-container";

/*-------------------*
 * Fonctions
 *-------------------*/

/**
 * Affichage d'un message d'état
 *
 * @param  {String} msg Un message
 * @return {void}
 */
export const status = msg => demoStatusElement.innerText = msg;

/**
 * Affichage des résultats de la prédiction
 *
 * @param  {HTMLElement} imgElement L'élément de la page où afficher l'image à tester
 * @param  {Array} classes    La liste des classes d'images
 * @return {void}
 */
export function showResults(imgElement, classes) {
  predictionsElement.insertBefore(
      displayPredictions(classes, displayImage(imgElement)), predictionsElement.firstChild);
}

/**
 * Affiche l'image sélectionnée dans la page
 *
 * @param  {HTMLElement} imgElement l'imageà afficher
 * @return {HTMLElement}
 */
export function displayImage(imgElement)
{
  const predictionContainer = document.createElement('div');
  predictionContainer.className = CONTAINER_ID;

  const imgContainer = document.createElement('div');
  imgContainer.appendChild(imgElement);
  predictionContainer.appendChild(imgContainer);

  return predictionContainer;
}

/**
 * Affiche les meilleures prédictions (i.e. classes) trouvées par le réseau
 *
 * @param  {Array} classes   Les résultat de la prédiction
 * @param  {HTMLElement} container Un conteneur pour afficher les prédictions]
 * @return {HTMLElement}
 */
function displayPredictions(classes, container)
{
  const probsContainer = document.createElement('div');
  for (let i = 0; i < classes.length; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    const classElement = document.createElement('div');
    classElement.className = 'cell';
    classElement.innerText = classes[i].className;
    row.appendChild(classElement);

    const probsElement = document.createElement('div');
    probsElement.className = 'cell';
    probsElement.innerText = classes[i].probability.toFixed(3);
    row.appendChild(probsElement);

    probsContainer.appendChild(row);
  }
  container.appendChild(probsContainer);

  return container;
}
