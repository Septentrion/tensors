# Glossaire de l'apprentissage automatique

## Etiquette
> Une étiquette est le résultat de la prédiction ; la variable y dans une régression linéaire simple. Il peut s'agir du cours à venir du blé, de l'espèce animale représentée sur une photo, de la signification d'un extrait audio ou de toute autre chose

Dans l'apprentissage supervisé, "réponse" ou "résultat" d'un exemple. Chaque exemple d'un ensemble de données étiqueté se compose d'au moins une caractéristique et d'une étiquette. Par exemple, les caractéristiques d'un ensemble de données sur des logements pourraient inclure le nombre de chambres, le nombre de salles de bain et l'âge du logement, et l'étiquette pourrait être le prix du logement. Dans un ensemble de données de détection de spam, les caractéristiques pourraient être l'objet, l'expéditeur et le message lui-même, et l'étiquette serait probablement "spam" ou "non spam."

## Caractéristique
> Une caractéristique est une variable d'entrée ; la variable x dans une régression linéaire simple. Un projet de Machine Learning simple peut utiliser une seule caractéristique, tandis qu'un projet plus sophistiqué en utilisera plusieurs millions,

## Modèle
> Un modèle définit la relation entre les caractéristiques et l'étiquette. Par exemple, un modèle de détection de spam peut associer étroitement certaines caractéristiques à du "spam". Penchons-nous à présent sur deux phases de la durée de vie d'un modèle :

* L'**apprentissage** consiste à créer ou à entraîner le modèle. En d'autres termes, vous présentez au modèle des exemples étiquetés, et vous lui permettez d'apprendre progressivement les relations entre les caractéristiques et l'étiquette.
* L'**inférence** consiste à appliquer le modèle entraîné à des exemples sans étiquette. En d'autres termes, vous utilisez le modèle entraîné pour faire des prédictions efficaces (y'). Par exemple, pendant l'inférence, vous pouvez prédire medianHouseValue pour les nouveaux exemples sans étiquette.

## Exemple
> Un exemple est une instance de donnée particulière, x. (x est mis en gras pour indiquer qu'il s'agit d'un vecteur.) Les exemples se répartissent dans deux catégories :

* Exemples étiquetés
* Exemples sans étiquette

## Non-linéarité

> Dans le perceptron classique, on cherche d'abord à classifier les exemples. Chaque neurone est donc associé à une fonction d'activation qui détermine la réponse du neurone. Cette fonction peut prendre un certain nombre formes différentes et l'on montre que le choix de la fonction n'a pas d'effet très important ur la qulité des réponses.

* fonction palier
* Fonction sigmoïde
* ReLU (Fonction la plus utilisée actuellement)
