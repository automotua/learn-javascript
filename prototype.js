// [[PROTOTYPE]] --> relationship
// prototype --> property
// __proto__ --> property
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // animal is the [[PROTOTYPE]] of rabbit. rabbit inherits from animal
console.log(rabbit.eats);  // true, from animal.

let animal = {
  eats: true,
  walk() {
    console.log("I walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

rabbit.walk()  // I walk

let r = {a: "ee"};

let animal = {
  eats: true,
  walk() {
    console.log("I walk");
  },
  __proto__: r
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

r.__proto__ = animal;


r.walk()  // error, due to circular [[PROTOTYPE]]


let animal = {
  eats: true,
  walk() {
    console.log("I walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
  walk() {
    console.log("rabbit walks");
  }
};

rabbit.walk(); // rabbit walks => use rabbit's behavior, not prototype's


let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName);  // John Smith, getter is triggered
admin.fullName = "Adam Li";  // setter is triggered! not setting fullName to string!!!
console.log(admin.fullName);  // Adam Li
console.log(user.fullName);  // getter called. still "John Smith" --> this is the obj before dot
