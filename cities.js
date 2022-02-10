const cities = [
  { name: 'Hilo', population: 44100 },
  { name: 'Honolulu', population: 350000 },
  { name: 'Kailua', population: 40500 },
  { name: 'Kaneohe', population: 37400 },
  { name: 'Pearl City', population: 46000 },
  { name: 'Waipahu', population: 43500 },
];

function averagePopulation(data) {
  const pop = _.pluck(data, 'population');
  return (_.reduce(pop, (memo, num) => memo + num) / pop.length);
}

function biggestAndSmallest(data) {
  const biggest = (_.max(data, function (city) { return city.population; })).name;
  const smallest = (_.min(data, function (city) { return city.population; })).name;
  return `Biggest: ${biggest}; Smallest: ${smallest}`;
}

console.log(averagePopulation(cities)); // prints: 93583.33333333333
console.log(biggestAndSmallest(cities)); // prints: Biggest: Honolulu; Smallest: Kaneohe
