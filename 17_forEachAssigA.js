

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];


console.log(`==================Q1.log the array element its index using for each() arrow function`);
arrayNumbers.forEach ( (element, index) => {
    console.log(`index :[${index}] = ${element}`);
  });


  console.log(`================Q2.Find the positive no.======================`);
const arryPositiveNums=[];
arrayNumbers.forEach( (element) => {
    if(element>0){
        arryPositiveNums.push(element);
    }
});
arryPositiveNums.forEach(elemnet => console.log(elemnet));

console.log(`==================Q3.find the negative numbers.================`);
const arrayNegativeNums=[];
arrayNumbers.forEach( (element,index) => {
    if(element<0) {
    arrayNegativeNums.push(element);
}
} );

arrayNegativeNums.forEach(elemnet => console.log(elemnet));

console.log(`======================Q4.find the even numbers and log on console using foreach()`);
arrayNumbers.forEach((element)=>{
    if(element%2==0){
        console.log(element);
    }
});

console.log(`===============Q5.Find the sum of all elemnet from arrayNumbers and log on console =======================`);
let sum=0;
arrayNumbers.forEach((element)=>{
    sum=sum+element;
});
console.log(`sum of all element is-->`,sum);

console.log(`============================Q6.Find even indexed array value and using foreach()`);
arrayNumbers.forEach( (element,index)=> {
    if(index%2==0){
        console.log(`[${index}]= ${element}`);
    }
});











