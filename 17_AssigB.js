

class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
    this.empId=empId;
    this.empName=empName;
    this.empDept=empDept;
    this.empSalary=empSalary;
    this.empCompany=empCompany;
}
}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new Employee(55,"Rishi","finance",47000,"TCS");
const empSonali=new Employee(66,"Sonali","IT",45000,"Infy");
const empMonika=new Employee(77,"Monika","IT",40000,"Wipro");
const empViny=new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new Employee(99,"Mahesh","IT",85000,"Infy");
array_employess=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];


console.log(`Q1.Find the all the employee is working in tcs and log on emp name and company name`);
for(const Employee of array_employess){
    if(Employee.empCompany=="TCS"){
      
        console.log(Employee.empName,Employee.empCompany);
        
    }
      }
      console.log(`===============================================================================`);

      console.log(`Q2 find the Efinance department employee log only department and employee name on console`);
      for(const Employee of array_employess){
            if(Employee.empDept=="finance"){
              console.log(`Employee Name-->`,Employee.empName,`Employee Company-->`,Employee.empCompany,`Employee Salary-->`,Employee.empSalary,`Employeee id-->`,Employee.empId,`Employee dept-->`,Employee.empDept);
            }
      }
      console.log(`===============================================================================`);

 

console.log(`Q3 find the employee names starts with r`);
for(const Employee of array_employess){
      if(Employee.empName.startsWith("R")){
        console.log(`Employee Name-->`,Employee.empName,`Employee Company-->`,Employee.empCompany,`Employee Salary-->`,Employee.empSalary,`Employeee id-->`,Employee.empId,`Employee dept-->`,Employee.empDept);
      }
 }
 console.log(`===============================================================================`);

 console.log(`Q4.find the employee whoes salary is greater than 7500 and log on console emp name,comapny and salary`);
 for(const Employee of array_employess){
 if (Employee.empSalary>75000){
   console.log(`Employee salary is greater than 75000 is==`,`Employee Name-->`,Employee.empName,`Employee Company-->`,Employee.empCompany,`Employee Salary-->`,Employee.empSalary);
  console.log(`============================================================================`);
 }

}

 console.log(`Q5 find the Employee whoes salary is greater than or equal 5000 and form IT department log to complete emp details on console.`);
for(const Employee of array_employess){
      if(Employee.empSalary>=50000 && Employee.empDept=="IT"){
        console.log(`Employee Name-->`,Employee.empName,`Employee Company-->`,Employee.empCompany,`Employee Salary-->`,Employee.empSalary,`Employeee id-->`,Employee.empId,`Employee dept-->`,Employee.empDept);
      }
 }

 console.log(`===============================================================================`);
 console.log(`Q6.Find out all the employee from comapny infy and log on complete details on console`);
 for(const Employee of array_employess){
  if(Employee.empCompany=="Infy"){
    console.log(`Employee Name-->`,Employee.empName,`Employee Company-->`,Employee.empCompany,`Employee Salary-->`,Employee.empSalary,`Employeee id-->`,Employee.empId,`Employee dept-->`,Employee.empDept);
      
  }
    }















  

