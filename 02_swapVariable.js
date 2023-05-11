


var arg1="Sweety";
var arg2="Cutie";
function showArg(value1,value2){
    console.log("before swapping !!!!",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swapping!!!! ",value1,value2);
}
showArg(arg1,arg2);

console.log("----------------------------");
console.log("---------------*-------------");


var num1=100;
var num2=200;
var num3=300;

function threeVariable(value1,value2,value3){
    console.log("----------Before swapping value::------------");
    console.log("value1:",value1,"value2:",value2,"value3:",value3);
    var temp=value1;
    value1=value2;
    value2=value3;
    value3=temp;
    console.log("-----------After swapping value::------------");
    console.log("value1:",value1,"value2:",value2,"value3:",value3);

}
threeVariable(num1,num2,num3);


