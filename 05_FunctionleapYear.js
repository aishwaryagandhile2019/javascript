
console.log(`**************************************************`);
var year;
function checkLeapYear(year){
  if(year%400==0){
    console.log(`${year}:year is leap year `);
  }
        else{
            if(year%100==0){
               console.log(`${year}:year is not leap year `);
            }
            else{
                if(year%4==0){
                    console.log(`${year}:leap year`);
                }
                else{
                    console.log(`${year}:not a leap year`);
                }
            }
        }
    }
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear("undefined");
checkLeapYear("Nan");
checkLeapYear(1750);
console.log(`**************************************************`);




