
//7. const and let - WHY tell us intent
//const is used declare variables that expect value to never change ... will through error if try to change
//let expect value to change over time

//8. template strings or template literals
// whenever using strings with multiple varibles use template strings
example:
function getMessage() {
  const year = new Date().getFullYear();
  return `the year is ${year}`; //you could put any valid javascript expression inside brackets
}
// Refactor the function to use template strings
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

//9. fat arrow function
// alternative syntax:
const add = (a, b) => a + b; // don't need return key word because curly braces not used for single javascript expressions
// or
const add = (a, b) => {
  return a + b;
}

//also because single argument drop parenthesis around argument
const double = number1 => number * 2;

const numbers = [1,2,3];
numbers.map(number => 2 * number); //refactor for fat arrow function

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`; //this is lost
    });
  }
}; //returns error
// solutions: .bind(this) - es5
// var self = this;

// es6 solution - fat arrow uses lexical(placement on this term is how its interpreted) this,
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`; //this is lost
    });
  }
};

// Arrow Functions Aren't Always a Solution
const profile = {
    name: 'Alex',
    getName: function() {
       return this.name;
    }
};

//10. Enhanced Oject Literals

//es5
function createBookShop(inventory){
  return {
    inventory: inventory,//exact same name
    inventoryValue: function() { //remove keyword function and colon
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title){
      return this.inventory.find(book => book.title === title).price
    }
  };
}
//es6
function createBookShop(inventory){
  return {
    inventory,//exact same name condense to one name
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

function saveFile() {
  $.ajax({ method: 'POST', url: url, data: data });
}
//condensed
function saveFile() {
  $.ajax({ method: 'POST', url, data });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

//11. Default Function Arguements - more syntax sugar
function makeAjaxRequest(url, method = 'GET') { //automatically assign method to get
  return method;
  //logic
}

makeAjaxRequest('google.com', null); //null is used as developer to say I want no value on purpose
makeAjaxRequest('google.com', 'GET');

function User() {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId()));
//es6:
function createAdminUser(user = new User(generateId()) {
  user.admin = true;
  return user;
}

const user = new User(generateId());

createAdminUser(user);

//12. Rest and Spread operator - purpose to write less condensed

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
//rest operator ...numbers (some number of arguments and puts them into array)
// - use
addNumbers(1,2,3,4,5);

//spread operate = used to flaten or spread variables used to add in another array or list
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
defaultColors.concat(userFavoriteColors);
[ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];
//example of both
function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0){
    return [ 'milk', ...items ];
  }
  return items;
}

validateShoppingList('oranges', 'bread');

const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  }
  multiply(a, b) {
    return a * b;
  }
};

// Many, Many Arguments
// Refactor the following function to use the rest operator.
// Remember, an argument using the rest operator does *not* need to be called 'rest'.
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}

// Spreadin' Arrays
// Refactor the following to use the spread operator.
function join(array1, array2) {
  return [...array1, ...array2];
}

// Mixing Rest and Spread
// Refactor the following to use the only the rest operator
//with rest and spred
function unshift(array, ...letters) {
  return [ ...letters, ...array];
}
//with rest only
function unshift(array, ...numbers) {
  return numbers.concat(array)
}

//13. Destructuring - decrease amount of code to write
var expense {
  type: 'Business',
  amount: '$45 USD'
}
var type = expense.type;
var amount = expense.amount;
//es6
const { type, amount } = expense;//needs to match

//destructuring agrument objects
var savedFiled = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(file) {
  return `the file${file.name}.${file.extension} is of size ${file.size}`;
}
//destructure
function fileSummary({name, extension, size}) {
  return `the file ${name}.${extension} is of size ${size}`;
}

//destructuring Arrays
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name ] = companies; //es6
cosnt firstCompany = companies[0]; //es5
//element use square brackets
//for properites use curly brackets, ie length

//mixing array and objects for destructuring
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];
const [{ location }] = companies;//using both {} and [] to destructure

const Google = {
  location: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google; //or locations.location
//when destructure properties order doesn't matter

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];
//want to intrepret like below
[
  { x: 4, y: 5},
  { x: 10, y: 1},
  { x: 0, y: 40}
]
points.map(([x, y]) => {
  return { x, y };
});

// Array Destructuring in Practice
// The 'classes' variable holds an array of arrays, where each array represents a
// single class that a student is enrolled in.  Convert this array of arrays into an
// array of objects, where each object has the keys 'subject', 'time', and 'teacher'
// and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
// An array for a class has the form [subject, time, teacher]
// The resulting data structure should look something like the following:
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
   return { subject, time, teacher };
});

// Recursion with Destructuring
// This one is probably the hardest exercise in the entire course!
// Use array destructuring, recursion, and the rest/spread operators to create a
// function 'double' that will return a new array with all values inside of it multiplied by two.
// Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make
//  this extremely easy but give it a shot the hard way anyways :)
//
// Input: double([1,2,3])
// Output:[2,4,6]
//
// Hint: Don't forget that with recursion you must add a base case so you don't get
// an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and
//  number is undefined do you need to keep walking through the array?
const numbers = [1,2,3];

function double([num, ...rest]) {
    if (!num) { return []; }
    return [num * 2, ...double(rest) ];
}

//14. Introducing Classes - inheritance

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}
//refactor in es6 Classes
class Car {
  constructor(title){
    this.title = title
  }//no comma needed
  drive() {
    return 'vroom';
  }
}
const car = new Car({ title: 'Toyota' });
car.drive(); //returns vroom

//es5
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}
//refactor to es6
class Toyota extends Car{ //connect Car with Toyota
  constructor(options) {
    super(options); //super keyword Car.constructor()
    this.color = options.color;
  }
  honk(){
    return 'beep';
  }
}
const toyota = new Toyota({ color: 'red', title: 'daily driver' });

// Game Classes
// You are a game developer tasked with setting up some basic classes for a new game
// you are working on.  Create a class called 'Monster'.  In the constructor,
// you'll need to do some basic setup for Monster whenever they are created.
// Initialize the Monster's health to 100. - initialize means it needs to be in constructor
// The constructor will be called with an 'options' object that has a 'name' property.
// Assign the 'name' to the Monster
class Monster {
  constructor(options) {
      this.health = 100;
      this.name = options.name;
  }
}

const monster = new Monster({ name: 'Big Foot' });

//native implementation of Promises
promise = new Promise((resolve, reject) => {//this arguement are automatically apart of this function
  resolve();
});
promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('i was also ran!!'))
  .catch(() => console.log('uh oh!!'));
// .then only called if resolve
// .catch only called if rejected

//how are they used to produce asychronus code:

//Fetch handler - function apart of the browser
fetch(url)
  .then(response = response.json()) //pulls readable json data
  .then(data => console.log(data));

//prefers axios, jquery etc over fetch
//be cautious with fetch doesn't enter catch case above error code 300, only hits catch if network request fails
