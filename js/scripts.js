var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number to add:"));
var result = add(number1, number2);
alert(add(number1, number2));


var subtract = function(number1, number2){
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number to subtract:"));
var result = subtract(number1, number2);
alert(subtract(number1, number2));


var multiply = function(number1, number2){
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number to multiply:"));
var result = multiply(number1, number2);
alert(multiply(number1, number2));


var divide = function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number to divide:"));
var result = divide(number1, number2);
alert (divide(number1, number2));
