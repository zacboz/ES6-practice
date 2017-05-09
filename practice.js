//1. forEach helper method - this function runs one time for every element in array

var colors = [ 'red', 'blue', 'green' ];

//for loop example
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//now implementing forEach
colors.forEach(function(color) {
	console.log(color);
});

//create an array of numbers, create var to hold sum, loop over array incrementing sum var, print sum
var numbers = [1,2,3,4,5];
var sum = 0;

function adder(number) {
	sum += number;
}

numbers.forEach(adder);

//2. map helper method - returns a result array, needs return keyword
//modify records of list of data

var numbers = [1, 2, 3];

//for loop example
var doubledNum = [];
for (var i = 0; i < numbers.length; i++){
  doubledNum.push(numbers[i] * 2);
}
//implementing map
var doubled = numbers.map(function(number){
	return number * 2;
})

//pluck
var cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camaro', price: 'expensive' },
];

var prices = cars.map(function(car) {
	return car.price;
});

// Using map, create a new array that contains the distance / time value from each trip.
// In other words, the new array should contain the (distance / time) value.
// Assign the result to the variable 'speeds'.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});

// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an array and a string
// representing a property name and return an  array containing that property from each object.

function pluck(array, property) {
    return array.map(function(obj){
        return obj[property];
    });
}

//3. filter helper method - filter out or sort products, by pushing the value we want to a new array

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

//for loop example
var filteredProducts = [];

for (var i = 0; i < products.length; i++){
	if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

//filter implementation
products.filter(function(product){
	return product.type === 'vegetable';//boolean statement
});

var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

//type is vegetable, quantity is greater than 0, price is less than 10
products.filter(function(product) {
	return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});

var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments){
	return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

// Filter the array of numbers using the filter helper, creating a new array that
// only contains numbers greater than 50.  Assign this new array to a variable
// called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

// Filter the array of users, only returning users who have admin level access.
// Assign the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});

// This is a hard one!  Create a function called 'reject'.
// Reject should work in the opposite way of 'filter' - if a function returns 'true',
// the item should *not* be included in the new array.  Hint: you can reuse filter.
//
// For example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});
lessThanFifteen // [ 10 ];

function reject(array, iteratorFunction) {
  return array.filter(function(item){
      return !iteratorFunction(item);
  });
}

//4. find helper method

// traditional for loop method:
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

for (var i = 0; i < users.length; i++){
	if (users[i].name === 'Alex'){
    user = users[i];
    break;
  }
 }

// find implementation:
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

users.find(function(user){
	return user.name === 'Alex';
});
//only returns the first one, not the second Alex (best for ids)

var posts = [
  { id: 1, title: 'new post' },
  { id: 2, title: 'old post' }
];

var comment = { postId: 1, content: 'great post' };

function postForComment(posts, comment){
	return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// Really Challenging: Custom findWhere Helper

// This is a tough one!  The most common find operation is to an object that has a given property.
// Rather than writing out a full function every time, it would be great if we has a shorthand
// syntax to find an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' } should be used as the search criteria -
// we would want to find a ladder whose 'height' property was '20 feet';

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    var key = Object.keys(criteria);
    return array.find(function(item){
        return item[key] === criteria[key];
  });
}

findWhere(ladders, { height: 25 });// result: { id:3, height: 25 }


//5.every and some helper method (validation)
//every will see if everything meets criteria or not, maybe only some of them meet criteria

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];


computers.every(function(computer){
	return computer.ram > 16;
});
//returns false

//some will return true if some meet criteria
computers.some(function(computer){
	return computer.ram > 16;
});
//returns true

var names = [
	"Dave",
  "Zachary",
  "Sam"
];

names.every(function(name){
	return name.length > 4;
});
//returns false

names.some(function(name){
	return name.length > 4;
});
//returns true

//real example login validation
function Field(value) {
	this.value = value;
}

var username = new Field("2cool");
var password = new Field("my_password");

Field.prototype.validate = function(){
	return this.value.length > 0;
}

//every example
var fields = [username, password];

var formIsValid = fields.every(function(field){
	return field.validate();
});

if (formIsValid){
  alert("Submit!");
} else {
	alert("Error");
}

// Given an array of users, return 'true' if every user has submitted a request form.
// Assign the result to the variable 'hasSumbmitted'.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted === true;
});//return false

// Given an array of network objects representing network requests, assign the boolean
// 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending';
});//returns true

//6. reduce helper method - initial value is first agrument

var numbers = [ 10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++){
	sum += numbers[i];
}

numbers.reduce(function(sum, number){
	return sum + number;
}, 0);
//0 is the first argument and intial value.

var primaryColors = [
  { color: 'red'},
  { color: 'yellow'},
  { color: 'blue'}
];
//condense list, collect values into array
primaryColors.reduce(function(previous, primaryColor){
	previous.push(primaryColor.color);
  return previous;
}, []);

//popular white board problem
function balancedParens(str) {
	return !str.split("").reduce(function(previous, char){
    if (previous < 0) { return previous; }
  	if (char === "(") { return ++previous; }
    if (char === ")") { return --previous; }
    return previous;
  }, 0);
}

balancedParens(")(");//return false, first condition
('(())')//counter 0, return true
('())')//counter -1, return false

// Use the 'reduce' helper to find the sum of all the distances traveled.
// Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;
}, 0);

// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
// The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if (desk.type === 'sitting') { acc.sitting++; }
    if (desk.type === 'standing') { acc.standing++; }
		return acc;
}, { sitting: 0, standing: 0 });

// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(previous, item){
      if(!previous.find(function(previous){ //if found = false, to continue on
      	return previous === item;
      })) {
        previous.push(item);
      }
      return previous;
  }, []);
}

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


const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);
