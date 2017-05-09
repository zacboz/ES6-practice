
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

//13. Destructuring
