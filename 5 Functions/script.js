'use strict';

const bookings = [];
const creatBooking = function (flightNum, numPessangers = 1, price = 1) {
  //   numPessangers = numPessangers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPessangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatBooking('Lhr123');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upper = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(str);
  console.log(`String ${fn(str)}`);
  console.log(str);
};

transformer('JavaScript is the best!', upper);
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const hy = greet('Hey');
hy('Talha');

const PIA = {
  airline: 'PIA',
  code: '523',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}`);
  },
};

PIA.book(219, 'Talha');
