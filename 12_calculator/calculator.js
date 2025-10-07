const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((numsSum, num) => numsSum + num, 0);
};

const multiply = function(arr) {
	return arr.reduce((numsSum, num) => numsSum * num, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
	let factoral = 1;
  for (let i = 1; i <= num; i++) {
    factoral *= i;
  }

  return factoral;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
