/*
 * Formules mathématiques pour le perceptron
 */

/**
 * Calcule le produit scalaire de deux vecteurs
 *
 * @param  {Array} vector_1 [description]
 * @param  {Array} vector_2 [description]
 * @return {Number}          [description]
 */
function scalarProduct(vector_1, vector_2) {
  let sum = 0.0;
  for (i of vector_1.keys()) {
    sum += vector_1[i] * vector_2[i];
  }

  return sum;
}

/*
 * Formule pour l'activation d'un neurone
 *
 */
let activation = scalarProduct(weights, example) + bias


/*
 * Réaustement de la valeur du poids de connexion
 */
let weights;
weights[i] += learning_rate * (expected - predicted) * example[i]
