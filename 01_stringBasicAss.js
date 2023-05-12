


function stringBasic(){
   
    console.log("My Dream Company is Amdocs");
}
stringBasic();

var myHobbies1="Coding";
var myHobbies2="Reading";
var myHobbies3="Listening";

console.log("My Hobbies are:",myHobbies1,myHobbies2,myHobbies3);
var myHobbies1="Coding";
var hobbiesLength= myHobbies1.length;
console.log("Total Number of Character in hobby1 are: ", hobbiesLength);

var myHobbies2="Reading";
var hobby2= myHobbies2.length;
console.log("Total Number of character in hobby2 are:",hobby2);


var myhobbies3="Listening";
var hobby3=myhobbies3.length;
console.log("Total Number of character in hobby3 are:",hobby3);

function myVariables(hobbiesLength,hobby2,hobby3){
  var c=hobbiesLength+hobby2+hobby3;
  console.log("total no of character in hobby1,hobby2,hobby3 are:",c);
}
myVariables(6,7,9);