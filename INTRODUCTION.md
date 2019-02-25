# Introduction à la problématique de l'apprentissage automatique

## Les types de problèmes en informatique

### Complexité
 La **complexité** d'un algorithme est définie par le nombre d'instructions élémentaires qu'il faudra pour qu'un programme calcule le résultat d'un probème. La question réelle est de savoir comment évole la complexité en fonction de la taille du problème (du nombre de données d'entrée par exemple). La complexité est symbolisée par la lettre **O()**.

#### Exemples

Si l'on veut faire la somme de tous les nombres d'un tableau (disons des _n_ premiers nombres entiers), on voit bien que l'on ajoute une opération à chaque nouveau nombre.
```javascript
  for (x of [1,2,3,4,5,6,7,8,9]) {
    sum += x;
  }
```
 La complexité est ici linéaire en fonction de la taille du tableau : **O(n)**.

 Certains algorithmes ont de meilleures complexités que d'autres, un cas très étudié est celui des algorithmes de tri.

 * Tri à bulles : **O(n<sup>2</sup>)**
 * Tri rapide (_Quicksort_) **O(n log(n))**

### Classes de problèmes

* **P** : La classe P est celle des problèmes qui peuvent résolus dans un temps polynômial par une machine de Turing (autrment dit, l'algorithme a une complexité polynômiale)
* **NP** : La classe NP est celle des problèmes qui peuvent être résolus dans un temps polynômial **par une machine de Turing non-déterministe**. Une machine de Turing non-déterministe est un ordinateur qui pourrait s'abstraire de la séquentialité des instructions. Elle peut donc avoir plusieurs transitions activables. Cela correspond généralement à des complexités exponentielles **O(2<sup>n</sup>)**.

C'est un des problèmes fondamentaux de l'informatique que de déterminer si ces deux classes se recouvrent ou si elles sont inconciliables.

Les problèmes de la classes NP sont, en général, ceux qui correpondent au champ de l'intelligence artificielle.

Typiquement, un programme de jeux d'échecs devra **explorer** toutes les solutions possibles pour déterminer quel coup il doit jouer. Pour cela, on introduit deux élément cruciaux :
* des **heuristiques**, qui sont de fonctions qui permettent à la machine de calculer ce que signifie “meilleur coup” dans une situation donnée ;
* des **fonctions de coût**, qui permettent au programme de “savoir” qu'il n'a rin à gagner à explorer telle hypothése (et donc d'accélérer le calcul)

## Intellignece artificielle

Deux domaines :

1) IA symbolique : ensemble des techniques basées sur la logique, la déduction, les grammaires formelles, etc.
2) IA connexionniste : ensemble des techniques basées sur la résolution d'équations mathématiques (régression, etc.)
