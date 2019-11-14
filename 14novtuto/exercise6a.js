function squareNumber(num){
  var squaredNumber= num*num;
  console.log('The result of squaring the number '+ num + ' is '
  + squaredNumber);
  return squaredNumber;
}
var squareButton= document.getElementById("square-button");
squareButton.addEventListener("click", function(){
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});
function halfOf(number){
  var halfnumber= number/2;
  console.log('The half of the number '+ number + ' is '
  + halfnumber);
  return halfnumber;
}
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function(){
  var number = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(number);
});

function percentOf(num1,num2){
  var percentNum = num1/num2 * 100;
  console.log('The percent of the number '+ num1 +' over '+ num2
  + ' is '+ percentNum);
  return percentNum;
}
var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function(){
  var num1 = document.getElementById("percent1-input").value;
  var num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1,num2);
});
function areaOfCircle(radius){
  var areaCircle= 2 * 3.14 * radius;
  console.log('The area of the circle is '+ areaCircle);
  return areaCircle;
}
var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function(){
  var radius = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(radius);
});
