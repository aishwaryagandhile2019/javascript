



class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`===================Q1.get the list of employee name and log on console===================`);
const arrayList=array.map( (employee) => {
    if (employee.emp_name) {
      return employee.emp_name;
    }
  });
  console.log(arrayList);


//   console.log("======== using map()  ========");
// const arrayTrans = array.map( (element) => {
//     return element*element;
// } );
// console.log(arrayTrans);

  console.log(`===================Q2.get the list of department and log on console.===================`);
  const arrayDept=array.map( (employee)=>{
    if(employee.emp_dept);
    return employee.emp_dept;
});
console.log(arrayDept);

  console.log(`===================Q3.get the list of employee id and log on console===================`);
  const arrayID=array.map( (employee)=>{
    if(employee.emp_id){
        return employee.emp_id;
    }
  });
  console.log(arrayID);