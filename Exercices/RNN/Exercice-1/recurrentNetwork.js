const model = tf.model();
// Alternative plus spécifique
// sequential indique que la sortie d'une couche est l'entrée de la couche suivante
//const model = tf.sequential();

// Création d'un tenseur en deux dimensions :

const xs = tf.tensor2d(inputs, [inputs.length, inputs[0].length]).div(tf.scalar(10));

const ys = tf.tensor2d(outputs, [outputs.length, 1]).reshape([outputs.length, 1]).div(tf.scalar(10));

const input_layer_shape  = window_size;

const input_layer_neurons = 100;

model.add(tf.layers.dense({units: input_layer_neurons, inputShape: [input_layer_shape]}));

const rnn_input_layer_features = 10;

const rnn_input_layer_timesteps = input_layer_neurons / rnn_input_layer_features;

const rnn_input_shape  = [rnn_input_layer_timesteps,  rnn_input_layer_features];

model.add(tf.layers.reshape({targetShape: rnn_input_shape}));
