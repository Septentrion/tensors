/*
 * Dépendances
 */

import {train} from './training.js';

/**
 * Fonction d'activation
 * Non-linéarité introduite dans le calcul, destinée à forcer une valeur
 * Le neurone est 'actif' ou 'inacti'
 *
 * @param  {float} output [description]
 *
 * @return {float}        [description]
 */
function fire(output)
{
  return (output >= 0.0) ? 1.0 : 0.0
}

/**
 * Fonction de prédiction
 * Calcule l'étiquette associée à un exemple à un stade donné de l'apprentissage
 *
 * @param  {Array} sample  L'exemple à classer
 * @param  {Array} weights [description]
 *
 * @return {float}         [description]
 */
export function predict(sample, weights, bias)
{
  console.log(sample);
  console.log(weights);
  let activation = bias;
  for (let i of sample.keys()) {
    activation += weights[i] * sample[i]
  }
  console.log(`Activation : ${activation}`);
  return fire(activation)
}
