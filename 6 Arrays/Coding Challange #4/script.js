const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(dog => (dog.foodPortion = dog.weight * 0.75 * 28));
console.log(dogs);

const saraDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(saraDog.curFood > saraDog.foodPortion);

const ownerEatToo = dogs.filter(dog => dog.curFood > dog.foodPortion);
const ownerEatless = dogs.filter(dog => dog.curFood < dog.foodPortion);

console.log(dogs.some(dog => dog.curFood === dog.foodPortion));
