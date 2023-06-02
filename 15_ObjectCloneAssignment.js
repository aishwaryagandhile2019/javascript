


const arrayNums=[20,3,4,56,90,400,49];
console.log(`---------original array----------`)
// const cloneArray= Array; 
const shallowClone=arrayNums;
console.log(shallowClone);


console.log(`-------------clone array---------`);
shallowClone.push(55,66);
console.log(shallowClone);


console.log(`******************************************`);

console.log(`---------original array----------`)
console.log(arrayNums);


console.log(`---------------original arraywith  update value 10 and 25-----------------------`);
arrayNums.push(10,25);
console.log(arrayNums);

console.log(`-------------clone array-------------`);
const clonedObject={...arrayNums};
console.log(clonedObject);
console.log(`*******************************************************`);

const arrayEven=[2,30,14,8];

console.log(`-------------------Q3. merge and concat array--------------`);
const array3=[...arrayNums,...arrayEven];
console.log(array3);
console.log(`********************************************************`);


console.log(`-------------Q4.create the employee info object-------------------`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"kanch Pokali,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 356","1800-4567 32","+91-9096 5678 77"]
}
console.log(`---------------Q5.log the employee details--------------------`);
console.log(`Employee locality is-->`,employee_info.address.locality);
console.log(`Employee country is-->`,employee_info.address.country);
console.log(`Employee state is-->`,employee_info.address.state);
console.log(`Employee mobile no is-->`,employee_info.mobiles);
console.log(`********************************************************`);


const deepClonedPerson = JSON.parse(JSON.stringify(employee_info));
console.log(`original salary is-->`,deepClonedPerson.salary.july_month );
console.log(`updated salary is-->`);
employee_info.salary.july_month = "80,0000INR";
console.log(employee_info.salary.july_month );



console.log(`original country is-->`,deepClonedPerson.address.country);
console.log("updated Country is-->");
employee_info.country = "United Kingdom";
console.log(employee_info.country);
// console.log("Cloned Object ");






