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

/*
 * Entrâinement du réseau
 */
[weights, bias] = train(Data.dataset, Data.classes, 0.1, 5);

console.log(`Poids : ${weights}`);
console.log(`Biais : ${bias}`);
