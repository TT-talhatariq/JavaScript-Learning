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

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//Task 1
const events = new Set(gameEvents.values());
console.log(events);
console.log(gameEvents);

gameEvents.delete(64);
console.log(gameEvents);
for (const event of gameEvents.entries()) {
  if (event[0] > 45) {
    console.log(`[Second Half] ${event[0]}: ${event[1]}`);
  } else {
    console.log(`[First Half] ${event[0]}: ${event[1]}`);
  }
}
