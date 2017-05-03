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
