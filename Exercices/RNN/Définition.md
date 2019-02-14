# Réseaux de neurones récurrents

“Un réseau de neurones récurrents est un réseau de neurones artificiels présentant des connexions récurrentes. Un réseau de neurones récurrents est constitué d'unités (neurones) interconnectés interagissant non-linéairement et pour lequel il existe au moins un cycle dans la structure. Les unités sont reliées par des arcs (synapses) qui possèdent un poids. La sortie d'un neurone est une combinaison non linéaire de ses entrées.”
[Wikipedia](https://www.wikiwand.com/fr/R%C3%A9seau_de_neurones_r%C3%A9currents)

## Réseaux simples

![RNN](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Elman_srnn.png/440px-Elman_srnn.png)

L'architecture la plus simple d'un réseau de neurones récurrent est constituée de trois couches, dont chaque neurone de la couche centrale (“couche cachée”) est connecté à lui-même, en plus de fournir un input pour la couche de sortie.

## Améliorations

> Les réseaux de neurones récurrents simples sont connus pour présenter un problème d'évanouissement du gradient qui limite leurs applications.

### Long Short-TermMemory (LSTM)

L'architecture LSTM a été conçue pour pallier les limitations des RNN standards. Chaque neurone est associé à un état interne (une “mémoire”) qui lui permet de propager les erreurs sur les étapes précécdentes du calcul.

### Gated Recurrent Unit (GRU)

Variante des réseaux LSTM ne nécessitant pas d'état interne.

### Autres ?
