

function voteEligibility(age){
    if(age==null){
        console.log(`Invalid Input: Age:${age}`);
    }
    else{
    if (age>120 || age<=0 ){
         console.log(`This is Invalid Data: ${age} `); 
         
    }
    else{
      if(age<18){
        console.log(`Age ${age} : you are not Eligible for Voting `);
        console.log("---------------------------------");
    }
    else{
        if(age>18){
            console.log(`Age ${age}:you are Eligible for Voting`);
            console.log("---------------------------------");
            
        }
        else{
            if(age==undefined){
               console.log(`invalid input: Age :${age}`);
            }
            
        }
    }
      }
    }
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);

