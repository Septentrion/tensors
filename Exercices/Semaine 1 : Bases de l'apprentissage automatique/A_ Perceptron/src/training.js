/*
 * Dépendances
 */

import {predict} from './prediction.js';
import * as Data from './data.js';

/**
 * Entraînement du réseau de neurones
 *
 * @param  {[type]} train  [description]
 * @param  {[type]} rate   [description]
 * @param  {[type]} epochs [description]
 * @return {[type]}        [description]
 */
export function train(dataset, classes, rate, epochs)
{
	let features_nb = dataset[0].length;
	console.log(`Nombre de caractéristiques : ${features_nb}`);
  let weights = Array(features_nb).fill(0);
	console.log(`Poids : ${weights}`);
	let bias = 0.0;
  for (let epoch of [...Array(epochs).keys()]) {
    let sum_error =  0.0;
    for (let sample of dataset.keys()) {
      let prediction = predict(dataset[sample], weights, bias);
			console.log(`Prédiction : ${prediction}`);
      let error = classes[sample] - prediction;
			console.log(`Erreur : ${error}`);
      sum_error += Math.pow(error, 2);
			console.log(`Erreur quadratique : ${sum_error}`);
      bias += rate * error;
			console.log(`Biais : ${bias}`);
      for (let data of [...Array(features_nb).keys()]) {
        weights[data] += rate * error * dataset[sample][data];
        console.log(`Epoque : ${epoch} – Rate : ${rate} – Erreur : ${sum_error}`);
      }
    }
  }
  return [weights, bias];
}
