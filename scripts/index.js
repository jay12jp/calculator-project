//Creating global variables
let num1 = '';
let num2 = '';
let operator = '';
let total = '';

$(document).ready(function(){
//Code goes in here
//
// //Text default to 0
// $('.text')
// //Display things pressed on a text box for numbers
// $('.btn').click(function(event){
//   event.preventDefault();
//   var $button = $(this).text();//current element's text
//   $('.text').val($button);
// });
// //Operator functions
// int[plus,minus,multiply,divide] = {+,-,*,/};
// float dot = .;
// $('.operator-divide') = divide;
// $('.operator-multiply') = multiply;
// $('.operator-plus') = plus;
// $('.operator-minus') = minus;
// $('.operator-dot') = dot;
//
//
//   function calculator(){
//     var operator-mul
//     var num1,num2;
//     var add = num1 + num2;
//     var sub = num1 - num2;
//     var mul = num1 * num2;
//     var div = num1 / num2;
//   };
//
//   calculator();



//Getting the key the user pressed
$('.btn,.btn-op,.btn-result').click(function(e){
  let btn = e.target.innerHTML;
  if (btn>='0' && btn<='9'){
    handleNumber(btn);
  } else {
    handleOperator(btn);
  }
});

// Handling button when clicked
// When a user clicks a button,
// they will be clicking on a number or an operator.
// For that reason I am going to create two functions:
function handleNumber(num){
  if (num1 ==='') {
    num1 = num;
  } else {
    num2 = num;
  }
  displayButton(num);
}
function handleOperator(oper){
  if (operator ==='') {
    operator = oper;
  } else {
    handleTotal();
    operator = oper;
  }
}
// Displaying Buttons
function displayButton(btn) {
    $('.calc-result-input').text(btn);
}
//Handling totals
function handleTotal() {
  switch(operator) {
    case '+':
    total = +num1 + +num2;
    displayButton(total);
    break;
  }
}




});
