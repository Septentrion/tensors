/*
 * Dépendances
 */

import {predict} from './prediction.js';
import {train} from './training.js';
import * as Data from './data.js';

/*
 * Initialisation
 */
let prediction = 0.0;
let container = document.querySelector("#results tbody");
let row;
let correct;
let predicted;
let weights, bias;

/*
 * Programme principal
 */

[weights, bias] = train(Data.dataset, Data.classes, 0.1, 5);

console.log(`Poids : ${weights}`);
console.log(`Biais : ${bias}`);



for (let i of Data.dataset.keys()) {
  /*
  prediction = predict(Data.dataset[i], Data.weights, Data.bias);
  console.log(`Attendu : ${Data.classes[i]} – Prédit : ${prediction}`);
// console.log(Data.classes[i]);
  row = document.createElement('tr');
  correct = document.createElement('td');
  correct.innerHTML = Data.classes[i];
  predicted = document.createElement('td');
  predicted.innerHTML = prediction;
  row.appendChild(correct);
  row.appendChild(predicted);
  container.appendChild(row);
  */
}
