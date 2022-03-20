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
    team2: 1.5,
  },
  printGoals: function (...arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    console.log(`Score: ${arr.length}`);
  },
};

//Task 1
const [players1, players2] = game.players;
// console.log(players1, players2);

//Task 2
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

//Task 3
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

//Task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
//console.log(players1Final);

//Task 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//Task 6
console.log(game.printGoals(["Davies", "Muller", "Lewandowski", "Kimmich"]));
console.log(game.printGoals(...game.scored));

// Task 7
team1 < team2 && console.log("Team One will Win");
