# Utilisation  de Tensorflow.js


## L'objet Tensor
Les tenseurs sont les structures de données de base pour Tensorflow (et les autres outils d'apprentissage automatique). C'est une abstraction pour les vecteurs et plus généralement les matrices de dimensions arbitraires.

Dans Tensorflow, on définit un tenseur de la manière suivante :
```javascript
/*
 * values -> les valeurs contenues dans le tenseur
 * shape -> la forme du tenseur, qui permet (éventuellement) de découper `values` pour constituer une matrice d'un format défini
 * type -> le type (éventuellement) des données de `values`
 *
 * @example tf.tensor([1,2,3,4], [2,2], 'float32')
 */

var t = tf.tensor(values, shape, type);
```

Tensorflow admet des constructeurs pour des tenseurs de petites dimensions.

## L'objet Model
Les modèles sont dans Tensorflow la base de l'architecture des réseuax de neurones. Ils sont constitués de couches (Layer). Un grande partie du travail en apprentissage automatique consiste à définir l'architecture des modèles.

Ils sont utlisés pour entraîner le réseau, pour l'utiliser ensuite à des fins de prédiction ou de classification. On peut l'évaluer. Et bien sûr, un modèle entraîné peut être sauvegardé pour être réutilisé plus tard.

Il existe detypes de modèles dans Tensorflow :
```javascript
/*
 * Sequential -> architecture simple qui sonsiste en un empilement de couches successives
 *  Model -> architecture qui offre beaucoup plus de souplesse, permettant d'organiser le réseau de neurones comme un graphe.
 */
var t2 = tf.sequential();
var t1 = tf.model();
```

## L'objet Layer

## Apprentissage

## Prédiction
