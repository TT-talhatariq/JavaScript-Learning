// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const restaurant = {
  name: "TT Spicelo",
  location: "Ali Town, Lahore",
  categories: ["Zinger", "Italian", "Chinies", "Organic"],
  startMenu: ["Garlic", "Bread", "Caprese Salad", "Focaccia"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starter, main) {
    return [this.startMenu[starter], this.mainMenu[main]];
  },
  delivery: function (obj) {
    console.log(obj);
  },

  orderPizza: function (in1, in2, in3) {
    console.log(`Pizza ${in1}, ${in2}, ${in3}`);
  },
};

restaurant.delivery({
  time: "2:20",
  adress: "Lahore",
  s: 2,
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [f, s] = restaurant.categories;
// console.log(f, s);

// [s, f] = [f, s];
// console.log(f, s);
// console.log(restaurant.order(2, 0));

// Data needed for first part of the section
const { name, openingHours, categories } = restaurant;

const { name: resName, openingHours: hrs } = restaurant;
console.log(name, openingHours, categories);
console.log(resName, hrs);
// Mutating variables

const {
  fri: { open, close },
} = openingHours;

//Spread Operato

const arr = [7, 8, 9];
const badNewArr = [1, 2, ...arr];

//COpy Array
const mainMenuC = [...restaurant.mainMenu];
//Join
const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

// const intgre = [prompt("In 1"), prompt("In 2"), prompt("In 3")];

// console.log(intgre);

// console.log(restaurant.orderPizza(...intgre));
const [d, e, ...ot] = badNewArr;
console.log(d, e, ot);

const add = function (...rest) {};
add(2, 3);
add(5, 4, 7, 2);
add(5, 4, 7, 2, 4, 2);
add(...badNewArr);

// Short-Circuiting

const check = 0 ?? 10;

console.log(check);

// for (const item of restaurant.categories) console.log(item);

// //Optional Chaining
// console.log(restaurant.openingHours.mon?.open);

// //Exp
// const days = ["mon", "tue", "sat", "fri"];
// for (const day of days) {
//   console.log(day);
//   const opn = restaurant.openingHours[day]?.open;
//   console.log(opn);
// }

//Lopping over object
// for (const day of Object.values(openingHours)) console.log(day);

//Sets
const goal = new Set([1, 2, 4, 5, 2, 1, 2, 1]);
console.log(goal);
//.has
//.add, .delete

//Maps, Key value Pairs
const map = new Map();
map.set("1", "Talha");
//console.log(map);

//Strings
let a = "ok";
a.replaceAll("o", "y");
console.log(a);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
