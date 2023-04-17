const csvAllTextile = 
  `Year,Generaton
  1960,17.60
  1970,20.40
  1980,25.30
  1990,58.10
  2000,94.80
  2005,115.10
  2010,132.20
  2015,160.60
  2017,168.90
  2018,170.30`;

const csvRecycled = 
  `Year,Generaton
  1960,0.50
  1970,0.60
  1980,1.60
  1990,6.60
  2000,13.20
  2005,18.30
  2010,20.50
  2015,24.60
  2017,25.70
  2018,15.10`;

const csvCombustion = 
`Year,Generaton
1960,0
1970,0,10
1980,0.50
1990,8.80
2000,18.80
2005,21.10
2010,22.70
2015,30.60
2017,31.70
2018,32.20`;

const csvLandfilled = 
  `Year,Generaton
  1960,17.10
  1970,19.70
  1980,23.20
  1990,42.70
  2000,62.80
  2005,75.70
  2010,89.00
  2015,105.40
  2017,111.50
  2018,113.00`;

// const csvWest = 
//   `Year,Population
//   1920,9.213920
//   1930,12.323836
//   1940,14.379119
//   1950,20.189962
//   1960,28.053104
//   1970,34.804193
//   1980,43.172490
//   1990,52.786082
//   2000,63.197932
//   2010,71.945553
//   2020,78.588572`;

function csvConvert(csv) {
  return csv.split('\n').slice(1).map(str => {
    const [date, generation] = str.split(',')
    .map((el) => (el > 1950 ? new Date(el, 0) : parseFloat(el)));
    return { date, generation };
  });
}
const recycled = csvConvert(csvRecycled);
const combustion = csvConvert(csvCombustion);
const landfilled = csvConvert(csvLandfilled);
const all_textile = csvConvert(csvAllTextile);

// const west = csvConvert(csvWest);

export default [
  {
    id: 'All_textile',
    data: all_textile
  },
  {
    id: 'Recycled',
    data: recycled
  },
  {
    id: 'Combustion',
    data: combustion
  },
  {
    id: 'Landfilled',
    data: landfilled
  }
]