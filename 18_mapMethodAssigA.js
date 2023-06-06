


const array = [20, 11, 40, 25,11,9,31,60,2,19 ];
console.log(`Given array is-->`,array);

console.log("======== Q1.Add 10 into each element and log new result ========");
const arrayTrans = array.map( (element) => {
    return element+10;
} );
console.log(arrayTrans);

console.log(`==================Q2.Square the each array elemnet=====================`)
const arraySquare=[];
array.forEach((elemnet)=>{
    arraySquare.push(elemnet*elemnet);
});
console.log(arraySquare);

console.log(`==========Q3.Corresponding each array element and log on console=======`)
const arrayIndex=array.map((element,index)=>{
    return element+index;
})
console.log(arrayIndex);


