/**
 * Calcule le Simple Moving Average
 * Moyenne des valeurs à l'intérieur d'une fenêtre glissante sur l'ensemble des points
 *
 * @param  {Array} series       L'ensemble d'échantillons
 * @param  {Number} windowSize  La taille de la fenêtre glissante
 * @return {Array}              La liste es moyennes
 */
function computeSMA(series, windowSize)
{
  let r_avgs = [];
  let prev_avg = 0;

  for (let i = 0; i <= (series.length - windowSize); i++) {
    let curr_avg = 0;
    let set = series.slice(i, i + windowSize);
    let t = i + windowSize;

    for (let k = i; k < t && k < series.length; k ++) {
      curr_avg += series[k];
    }
    r_avgs.push(
      {
        set: series.slice(i, i + windowSize),
        avg: curr_avg / windowSize
      });
    prev_avg = curr_avg;
  }
  return r_avgs;
}

/**
 * Générateur de seriées de données aléatoires
 *
 * @param  {Number} size La taille de léchantillon
 * @return {Array}       L'ensemble des valeurs
 */
function generateDataSet(size)
{
  let dataSet = [];
  let date1 = new Date(), dt2 = new Date();

  dt1.setDate(dt1.getDate() - 1);
  dt2.setDate(dt2.getDate() - size);

  let startTime = dt2.getTime();
  let timeDiff = (new Date()).getTime() - dt1.getTime();

  let currentTime = startTime;
  for (let i = 0; i < size; i++, currentTime += timeDiff) {
    let currentDate = new Date(currentTime);
    let hours = (Math.floor(Math.random() * 100 % 24)).toString().padStart(2, '0');
    let minutes = (Math.floor(Math.random() * 100 % 60)).toString().padStart(2, '0');;
    let seconds = (Math.floor(Math.random() * 100 % 60)).toString().padStart(2, '0');;
    let currentMonth = currentDate.getMonth().toString().padStart(2, '0');
    let currentDay = currentDate.getDate().toString().padStart(2, '0');
    dataSet.push({
      id: i+1,
      price: (Math.floor(Math.random() * 10) + 5) + Math.random(),
      timestamp: `${currentDate.getFullYear()}-${currentMonth}-${currentDay} ${hours}:${minutes}:${seconds}`;
    })
  }
  retrun dataSet;
}
