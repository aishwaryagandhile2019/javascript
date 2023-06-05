
console.log(`Q1.With no args and no retuen value log meassage on console inside arrow fuction`);

let display = ()=> {
    console.log("Good Morninng,Today is Monday");
}
display();
console.log("=============================================================");

console.log(`Q2.a.with 3args and no return value for recieved 3 parameters perform the multiplication`);
let multiplication = (num1, num2,num3) => {
    let result = num1 * num2*num3;
    return result;
}
let result = multiplication(5,5,2);
console.log(`Result is ${result}`);

console.log(`Q2.b.with 3args and no return value for recieved 3 parameters perform the multiplication`);
let mul = (num1, num2,num3=1) => {
    let result = num1 * num2*num3;
    return result;
}
let ans = multiplication(10,4,1);
console.log(`Result is ${ans}`);

console.log(`====================================================================`);
console.log(`Q3.a.with 5 args and return value such as for recieved params it shold do the addition`)
let add=(arg1,arg2,arg3,arg4,arg5)=>{
    let addtion=arg1+arg2+arg3+arg4+arg5;
    return addtion;
}
let value=add(100,100,200,349,756);
console.log(`Addition  is ${value}`);

console.log(`b.log the result on console with meaningful message for both step`);


let arrow = ()=> {
    console.log("I am",`learning`,`ES6`,`features`,'in depth');
   
}
arrow();






