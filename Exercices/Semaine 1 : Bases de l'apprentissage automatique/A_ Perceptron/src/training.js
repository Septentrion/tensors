/*
 * Dépendances
 */

import {predict} from './prediction.js';
import * as Data from './data.js';

/**
 * Entraînement du réseau de neurones
 *
 * @param  {Array} train  [description]
 * @param  {Array} classes  [description]
 * @param  {Float} rate   [description]
 * @param  {Number} epochs [description]
 *
 * @return {Array}        [description]
 */
export function train(dataset, classes, rate, epochs)
{
	/*
	 * initialisqtion :
	 * - calcul du nombre de caractéristiques par exemple
	 * - Mise de tous les poids à 0
	 * * Mise du biais à 0
	 */
	let features_nb = dataset[0].length;
	console.log(`Nombre de caractéristiques : ${features_nb}`);
  let weights = Array(features_nb).fill(0);
	let bias = 0.0;
	/*
	 * On itère 'epochs' fois pour affiner le modèle
	 */
  for (let epoch of [...Array(epochs).keys()]) {
		/*
		 * La somme du carré des erreurs sur les aractéristiques d'un exemple
		 */
    let sum_error =  0.0;
		/*
		 * Tentative de prédiction sur tous les exemples
		 */
    for (let sample of dataset.keys()) {
			/*
			 * Prédiction en fonction de la valeur des poids à un moment t
			 */
      let prediction = predict(dataset[sample], weights, bias);
			console.log(`Prédiction : ${prediction}`);
			/*
			 * Calcule de l'erreur dur la prédiction
			 */
      let error = classes[sample] - prediction;
			console.log(`Erreur : ${error}`);
			/*
			 * L'erreur sur l'ensemblede l'exemple
			 */
      sum_error += Math.pow(error, 2);
			console.log(`Erreur quadratique : ${sum_error}`);
			/*
			 * Réajustement de la valeur du biais
			 */
      bias += rate * error;
			console.log(`Biais : ${bias}`);
			/*
			 * Réajustement de la valeur de tous les poids
			 */
      for (let data of [...Array(features_nb).keys()]) {
        weights[data] += rate * error * dataset[sample][data];
        console.log(`Epoque : ${epoch} – Rate : ${rate} – Erreur : ${sum_error}`);
      }
    }
  }
  return [weights, bias];
}
