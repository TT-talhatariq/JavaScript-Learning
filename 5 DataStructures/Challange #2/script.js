// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//Data
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    console.log(`Score: ${arr.length}`);
  },
};

//Task 1
for (const goal of game.scored.entries())
  console.log(`Goal ${goal[0] + 1}: ${goal[1]}`);

//Task 2
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
console.log(`Average: ${sum / Object.values(game.odds).length}`);

//Task 3
console.log(
  `Odds of victory ${Object.values(game)[0]}:  ${Object.values(game.odds)[0]}`
);

console.log(`Odds of draw:  ${Object.values(game.odds)[1]}`);
console.log(
  `Odds of victory ${Object.values(game)[1]}:  ${Object.values(game.odds)[2]}`
);

//Bonus
const scorers = {};
for (const player of Object.values(game.scored)) {
  if (scorers[player]) scorers[player] += 1;
  else scorers[player] = 1;
}
console.log(scorers);
