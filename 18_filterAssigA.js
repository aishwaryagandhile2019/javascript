

const arrayNumbres=[20,11,40,25,37,49,9,90,60,2,19];



console.log(`================Q1.find out all no which are greater than 50==============================`);
const numbers=arrayNumbres.filter( (elemnet)=>{
    return elemnet>50;
});
console.log(numbers);

console.log("=========== WAP to get the even numbers using filter() ==================");
const EvenNo = arrayNumbres.filter( (element) => {
    return element%2==0;
} );
console.log(EvenNo);

console.log(`===================Q3.find out all odd no.===============================`);
const oddNo=arrayNumbres.filter((element)=>{
    return element%2!=0;
});
console.log(oddNo);

console.log(`=======================Q4.find out the no which are mutiple of 5=========================`);
const arrayNum =arrayNumbres.filter( (element) => {
    return element%5==0;
    });
    console.log(arrayNum);

console.log(`==========================Q5.find out all no bteween 20 to 50=======================`);
const middleNo=arrayNumbres.filter((element)=>{
      return element>=20 && element<50;
});
console.log(middleNo);
