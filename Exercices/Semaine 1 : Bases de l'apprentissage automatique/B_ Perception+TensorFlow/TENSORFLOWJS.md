# Configuration de Tensorflow.js

Documentation complète : [Tensorflow.js](https://js.tensorflow.org/api/0.13.3/)

## La couche

Les couches du réseau sont des objets descendant de l'objet `layers`.
Il existe de nombreux types de couches dans Tensorflow, la variante de base étant :

```javascript
let layer = tf.layers.dense();

```

Les paramètres des objets `layers` :
* **units** (number) : la taille de l’espace de sortie
* **inputShape** (Array) : la dimension de l’espace d’entrée
* **kernelInitializer** (string) : initialisation des poids
* **useBias** (boolean) : utiliser un biais
* **biasInitializer** : initialiser les valeur des biais

## Le modèle

Pour faire au plus simple, nous allons choisir un modèle séquentiel.
Cela n'a pas d'importance puisqu'il n'y a qu'une seule couche.

```javascript
let model = tf.sequential();
```

Il est possible de paramétrer ce modèle avec :
* **layers** (Array) : Un tableau définissant les couches (successives) du modèle ()
* **name** (string) : un nom

Ajouter une couche au modèle :
```javascript
model.add(layer);
```

Le modèle doit être compilé avant d’être utilisé.
Pour cela on doit lui fournir :
* **optimizer** (Optimizer) : fonction d’optimisation
* **loss** (string) : une fonction de coût

Une fois le modèle complètement défini, on peut l'entraîner .
```javascript
model.fit();
```
On doit au moins fournir :
* un tenseur d'entrée (les caractéristiques)
* un tenseur de sortie (les étiquettes)

D'aures otions peuvent être fournies :
* **epochs** (number) : le nombre d'itérations

## Le tenseur

Nous avons au départ de tableaux de valeurs, structurés d'une sertaine manière. Il faut les transformer en tenseurs pour que les réseaux puissent les utiliser.
```javascript
const t = tf.tensor()
```

Un tenseur peut être défini avec 3 paramètres :
* un tableau de valeurs
* une description de la forme du tensuer désiré (optionnel)
* le type de données passées (optionnel)
