# Caractéristiques

Une des premières difficultés des programmes d'apprentissage automatique consiste à avoir un **bon ensemble de caractéristiques**.

Souvent, on a à notre disposition un ensemble de données brutes qu'il faudra « nettoyer » avant de pouvoir s'en servir. Ceci afin d'obtenir un **vecteur de caractéristiques** qui servira de données d'entré pour le processus d'apprentissage.

On retrouve souvent toutes ces technique ssous le nom d'« embedding ».

## Les données numériques

Les entiers et les nombres à virgule flottante n'ont pas besoin d'encodage spécifique, car ils peuvent être multipliés par une pondération numérique. On se ramène toujours à des nombres réels (virgule flottante) et la pondération permet de ramener les nombres dans un intervalle plus commode à manipuler.

## Les données non numériques

Le cas des données non numériques est un peu plus compliqué puisqu'il faut **toujours** se ramener à des nombres, seules données à pouvoir être manipumées par le réseau.

### Les valeurs booléennes
Les valeurs booléennes ne posent pas de problème particulier car elles peuvent être traduites par les valeurs réelles 0.0 et 1.0.

### Les valeurs finies
Dans la plupart des autres cas, on a ce que l'on appelle un « domaine fini ». Un domaine fini est un ensemble de valeurs que l'on peut dénombrer. Par exemple, la liste des villes de France est un domaine fini.

Le travail préparatoire peut alors être plus complexe. Il est destiné à extraire de l'ensemble des données brutes un **vocabulaire** qui contiendra l'information pertinente. Cela implique qu'un certain nombre d'informations se retrouvereont **hors vocabulaire** et seront recensées à part.

Une fois le vocabulaire déterminé, la seconde phase consiste à projeter ce vocabulaire dans un espace numérique.

Mais attribuer un nombre arbitraire à chaque valeur du vocabulaire créérait des biais d'interprétation importants. Pour éliminer ce risque, on représente chque valeur sous forme d'un vecteur où toutes les valeurs sont nulles sauf une égale à 1.0. On les appelle des **vecteurs one hot**.


### Le texte brut
La préparation de données textuelles passe aussi par cette procédure de « mise en forme » et il existe des outils spécialisés pour cela comme Word2Vec, par exemple.

### De bonnes caractéristiques

De bonnes caractéristiques doivent :
* apparaître « relativement » souvent dans le corpus de données, de manière à ce que l'apprentissage puisse faire des associations statistiquement valides. Si une caractéristique n'apparaît qu'une seule fois, il sera difficile d'en tirer quelque chose de pertinent.
* avoir une signification claire, par exemple des âges exprimés en années, etc.
* éviter les valeurs « magiques », qui ne sont là que pour exprimer des valeurs manquantes, par exemple. Dans ce cas, on aura tendance à ajouter de l'information en créant une nouvelle caractéristique
* être stable au cours du temps.

### Nettoyer les données

#### Mettre à l'échelle
Pour que le réseau fonctionne efficacement, il vaut mieux que les caractéristiques aient toutes des amplitudes comparables.

### Les données « abérrantes »
Dans le cas où la distribution des valeurs est trop inégale, on peut alors appliquer des méthodes plus sophistiquées pour les re-normaliser.
* appliquer une échelle logarithmique
* éliminer les valeurs extrêmes en les regroupant sous une seule valeur min/max
* etc.

### Binning
La technique du **binning** consiste à segemnter des valeurs continues. On crée des intervalles qui permettront de créer des clusters de données de amnière à en simplfier le traitement et l'interprétation.

L'ensemble des intervalles compose donc un vecteur de 0.0 et de 1.0 qui approximera les valeurs continues.

### Les erreurs
Très souvent, les données brutes contiennent des erreurs :
* Données manquantes
* Exemples en double
* Etiquettes erronées
* Valeurs de caractéristiques erronées
* etc.
Il est essentiel de bien préparer les données, sinon les résultats ne seront vraisemblablement pas pertinents.
