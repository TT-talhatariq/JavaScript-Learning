'use strict';

const user = function (name, year) {
  this.First = name;
  this.birth = year;
};

const talha = new user('Talha', 2022);
//Prototypes

user.prototype.calcAge = function () {
  console.log(2037 - this.birth);
};

talha.__proto__ === user.prototype;

//expression
class PersonCl {
  constructor(name) {
    this.name = name;
    console.log(name);
  }
  calcName() {
    console.log('Talha ' + this.name);
  }
}

const Talha = new PersonCl('TT');
//declaration

console.log(Talha);

// Properties
// Not hoisted
// Citizens
// Executed in strict Mood

//Accessors

const account = {
  owner: 'Talha',
  get latest() {
    return this.owner;
  },
  set latest(name) {
    this.owner = name;
  },
};
account.show = function () {
  console.log('Static');
};

account.latest = 'Ali';
