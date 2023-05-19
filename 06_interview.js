
console.log(`----------Tcs Interview Eligibilty-------------------`);
console.log(`-----------------------------------------------`);

function args(gradeScore,hscScore,sscScore,candidateName){
    if (gradeScore>=70 || hscScore>=80 ||sscScore>=900) {
        
       console.log(`Congrates ${candidateName} you are Eligible for interview`); 
       console.log(`***********************************************`);

    } else {
       console.log(`Unfortunately you are not Eligible for Interview`); 
       console.log(`**************************************************`);

    }

}
args(80,86,90,"Sumeet");
args(70,65,55,"Gita");
args(60,79,88,"seema");