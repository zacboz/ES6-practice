//forEach helper method

var colors = [ 'red', 'blue', 'green' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

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
sum;


//map helper method
var numbers = [1, 2, 3];
var doubledNum = [];

for (var i = 0; i < numbers.length; i++){
  doubledNum.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number){
	return number * 2;
})

doubled;
doubledNum;

var cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camaro', price: 'expensive' },
];

var prices = cars.map(function(car) {
	return car.price;
});

prices;

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

speeds;

// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an array and a string
// representing a property name and return an  array containing that property from each object.

function pluck(array, property) {
    return array.map(function(obj){
        return obj[property];
    });
}

// filter helper method

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++){
	if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter(function(product){
	return product.type === 'vegetable';
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
