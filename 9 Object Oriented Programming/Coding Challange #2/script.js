'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const kia = new Car('Kiea', 200);
const elantra = new Car('Elantra', 160);

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelrate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };
}

const cor = new CarCl('Cor', 120);
