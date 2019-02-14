# Les RNN et TensorflowJS

Dans Tensorflow, les RNN font partie des objets “layers” et supportent à la fois les LSTM et les GRU.

## SimpleRNN

```javascript
const rnn = tf.layers.SimpleRNN(config)
```

Crée une couche de réseau récurrente complètement connecté, dont la sortie est réinjectée dans l'entrée.

Cette couche consiste en un `SimpleRNNCell`, à la différence près que, contrairment à cette dernière, la méthode `apply` opère sur une _séquence d'entrées_. La “forme” (`shape`) de l'entrée (indépendamment de la première dimension – batch  ?? –) doit être au moins en 2D, la première dimension étant l'échelle de temps (time steps ?).


## SimpleRNNCell

`SimpleRNNCell` se distingue de `SimpleRNN` en ce que la méthode `apply` prend les données d'entrées sur une seule itération et retourne le résultat de cette seule itération. 
