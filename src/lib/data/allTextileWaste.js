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

function csvConvert(csv) {
  return csv.split('\n').slice(1).map(str => {
    const [date, generation] = str.split(',')
    .map((el) => (el > 1950 ? new Date(el, 0) : parseFloat(el)));
    return { date, generation };
  });
}
const all_textile = csvConvert(csvAllTextile);

export default [
  {
    id: 'All_textile',
    data: all_textile
  }
]