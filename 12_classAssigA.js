


console.log(`-------------------Q1.------------------------------`)
class Vehicle {
    constructor(name, prize, color,FuelType){
        this.name = name;
        this.prize = prize;
        this.color = color;
        this.FuelType = FuelType;
    }
    showDetails(){
        console.log(`Details of the Vehicle is: ${this.name}, ${this.prize}, ${this.color}, ${this.FuelType} `);

    }
}
const  BMW = new Vehicle("Name-->BMW", "prize-->21.10L", "color-->White", "FuelType-->Petrol");
const rangeRover = new Vehicle("Name-->rangeRover","prize-->10.10", "color-->", "FuelType-Disel" );
const Shift = new Vehicle("Name-->Shift", "prize-->9.0", "color-->Green", "FuelType-CNG");
const TataSafari = new Vehicle("Name-->mercediz", "prize-->25.90L", "color-->Yellow", "FuelType-disel");
const arrayOfVehicles=[BMW,rangeRover,Shift,TataSafari];



BMW.showDetails(); 
rangeRover.showDetails();
Shift.showDetails();
TataSafari.showDetails();
console.log(`-------------------------------------------`);

console.log(`******************************Q2.*************************************`);
class College{
    constructor(name,City,department,Collegecode){
    this.name=name,
    this.City=City,
    this.department=department,
    this.Collegecode=Collegecode
}
    showDetails(){
        console.log(`Name :${this.name}`);
        console.log(`City:${this.City}`);
        console.log(`depatment:${this.department}`);
        console.log(`CollegeCode:${this.Collegecode}`);
    }
}
const MIT=new College("MIT ACSC College","Alandi","BCS","2345");
const Hut=new College("Hutatma rajguru Mahavidyalay","pune","BCom",1234);

const Sinhagad=new College("Sinhagad College","Chakan","BE",8902);

const Savitri=new College("Jai Hind College","Pune","BA",1289);


MIT.showDetails();
console.log(`-------------------------------------------`);
Hut.showDetails();
console.log(`-------------------------------------------`);
Sinhagad.showDetails();
console.log(`-------------------------------------------`);
Savitri.showDetails();
