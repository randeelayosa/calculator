var add = function(number1, number2){
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};


var bmi = function(weight, height){
  return weight / (height * height) * parseInt("703");
};

// var weight = parseInt(prompt("Enter your weight in pounds:"));
// var height = parseInt(prompt("Enter your height in inches:"));
// alert(bmi(weight,height));
//


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

});
