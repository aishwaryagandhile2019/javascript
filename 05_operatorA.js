



function squareOfWordLength(str) {
    console.log("--------------------------------");
    var len = str.length;
    console.log(` length of the string is -->${len}`);
    var square=len*len;
    console.log(` square of the string is-->${square}`);

 }
 squareOfWordLength("JavaScript");
 squareOfWordLength("Google chrome");
 squareOfWordLength("Developer Smart");

console.log("---------------------------------------------");

function myString() {
    var greet = "I am Angular Developer";
    console.log(`2.Given string -->${greet}`);
    var lengthString = greet.length;
    console.log(` 1.My string  length is--> ${lengthString}`);
    var resultSplit = greet.split(" ");
    var num1 = 22;
    var num2 = 4;
    var result = num1 / num2;
   console.log(`2.1) Division of length is -->total charcter/total word = ${result}`);
    var num1=22;
    var num2=4;
    var result=num1*num2;
    console.log(`2.2) multiplication of length is --> total character*total word = ${result}`);
}
myString()
