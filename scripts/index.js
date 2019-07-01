$(document).ready(function(){
//Code goes in here

//Text default to 0
$('.text')
//Display things pressed on a text box for numbers
$('.btn').click(function(event){
  event.preventDefault();
  var $button = $(this).text();//current element's text
  $('.text').val($button);
});
//Operator functions
int[plus,minus,multiply,divide] = {+,-,*,/};
float dot = .;
$('.operator-divide') = divide;
$('.operator-multiply') = multiply;
$('.operator-plus') = plus;
$('.operator-minus') = minus;
$('.operator-dot') = dot;


  function calculator(){
    var operator-mul
    var num1,num2;
    var add = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
  };

  calculator();









});
