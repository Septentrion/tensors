let dataset = [
  [2.7810836, 2.550537003],
	[1.465489372, 2.362125076],
	[3.396561688, 4.400293529],
	[1.38807019, 1.850220317],
	[3.06407232, 3.005305973],
	[7.627531214, 2.759262235],
	[5.332441248, 2.088626775],
	[6.922596716, 1.77106367],
	[8.675418651, -0.242068655],
	[7.673756466, 3.508563011]
];

let classes = [
  0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1
];

let weights = [-0.1, 0.20653640140000007, -0.23418117710000003];

/**
 * [fire description]
 *
 * @param  {float} output [description]
 *
 * @return {float}        [description]
 */
function fire(output)
{
  return (activation >= 0.0) ? 1.0 : 0.0
}

/**
 * [predict description]
 *
 * @param  {Array} rows    [description]
 * @param  {Array} weights [description]
 *
 * @return {float}         [description]
 */
function predict(rows, weights)
{
  let activation = weights[0];
  for (r of rows) {
    let i = rows.indexOf(r)
    activation += weights[i+1] * r
  }
  return fire(activation)
}

/*
 * Programme principal
 */
for (data of dataset) {
  prediction = predict(data, weights);
  let i = dataset.indexOf(data);
  console.log(`Attendu : ${classes[i]} – Prédit : ${prediction}`);
}
