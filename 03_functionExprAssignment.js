

console.log(" ----Q1.write a function expression to gea square of the number 5,6,25,100-----");
var square = function(num){
   var result=num*num;
   console.log("Square of 5 is:",result);
}
square(5);


var square=function(num){
    var result=num*num;
   console.log("Square of 6 is:",result);
}
square(6);

var square=function(num){
    var result=num*num;
   console.log("Square of 25 is:",result);
}
square(25);

var square=function(num){
    var result=num*num;
   console.log("Square of 100 is:",result);
}
square(100);

console.log("-------Q2.check and log type of function---------");

console.log("type of square variable  is:", typeof square);

console.log("-----Q3.area of reactangle plot------")
var areaOfPlot=function(lenght,width){
  var area=lenght*width;
  console.log("area of rectangle is:",area);
}
areaOfPlot(499,917);

console.log("------Q4 value of swapping----------");
var swapValues=function(num1,num2){
    console.log("value before swap:",num1,num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log("value after swapping is:",num1,num2);
}
swapValues('virat','Anushka');



var swapValues=function(num1,num2){
    console.log("value before swap:",num1,num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log("value after swapping is:",num1,num2);
}
swapValues('1000','2000');

console.log("-------Q5.function expression which can perform below task:-------")
var stringHandOn=function(){
 var string="js is the most popular languahe of internet";
 var myStringLength=string.length;
 console.log("A.length of the string:",myStringLength);

 console.log("B.charcter at index 6:",string.charAt(6));
 console.log("C.character at index 11 is:",string.charAt(11));
 console.log("D.last charcter of given strings:",myStringLength-1);
 console.log("E. First character in given string:",string.charAt(0));

 var resultSplit = string.split(" ");
 console.log("Total number of words: ",resultSplit.length);
 var square=function(num){
    var result=num*num;
   console.log("Square of 8 is:",result);
}
square(8);
}
stringHandOn();


