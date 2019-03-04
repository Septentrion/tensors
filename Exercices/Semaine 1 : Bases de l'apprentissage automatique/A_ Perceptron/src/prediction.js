/*
 * Dépendances
 */

import {train} from './training.js';

/**
 * [fire description]
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
 * [predict description]
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
