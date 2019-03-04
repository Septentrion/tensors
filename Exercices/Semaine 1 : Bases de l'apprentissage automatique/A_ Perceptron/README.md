# Codage d'un perceptron

## Objectif

Construire l'algorithme du perceptron à partir de zéro en JavaScript

## Problème

On cherche à apprendre au programme à discerner le rouge des autres couleurs.

Pour cela, nous allons lui fournir un certain nombre d'exemples, en lui donnant la bonne réponse.

Etapes de la résolution du problème :

1. Trouver une expression numérique pour rouge
2. Définir un jeu d'échantillons
3. Associer à chaque échantillon une classe (représentée par un nombre)
4. Apprendre au perceptron à différencier les Exemples
5. Essayer avec une couleur absente des exemples

## Algorithmes

Il y a deux algorithmes à implémenter.

### Prédiction
Une fois que le perceptron est entraîné, déterminer la réponse pour tout exemple nouveau est très simple, il s'agit d'écrire une fonction qui exécute un **produit scalaire** entre les données d'entrée et les poids du perceptron.

A ce prduit scalaire, on ajoute une fonction d'activation, selon la loi de Hebb.

## Apprentissage
L'apprentissage se fait selon une méthode itérative : la **descente de gradient**.

## Sources

[tutoriel en Python](https://machinelearningmastery.com/implement-perceptron-algorithm-scratch-python/)
