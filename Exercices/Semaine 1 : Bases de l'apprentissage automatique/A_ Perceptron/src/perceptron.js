// Formules de base

/*
 * Formule pour l'activation d'un neurone
 */
let activation = sum(w[i] * x[i]) + bias


/*
 * Descente de gradient (stochastique)
 * A chaque itération on réajuste la valeur du “poids”
 */
let w;
w += learning_rate * (expected - predicted) * x
