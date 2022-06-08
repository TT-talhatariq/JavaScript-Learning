'use strict';

const Car = function (ma, speed) {
  this.make = ma;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log('In Car A');
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log('In Car B');
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chareTo = function (ch) {
  this.charge = ch;
};

EV.prototype.accelerate = function (ch) {
  this.charge -= 1;
  this.speed += 20;
};
const tesla = new EV('Tesla', 120, 23);
