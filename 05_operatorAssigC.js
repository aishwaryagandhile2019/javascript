 
var show=function(gradScore,hscScore,sscScore,candidateName){
    var find = gradScore>=70 || hscScore>80 || sscScore>=90 ? `congrates ${candidateName} You are Eligible for Tcs Interview`: `${candidateName} Unfortunately You are not Eligible for Tcs Interview`;
    console.log(find);
    console.log("********************************************************");
}
show(80,80,90,"Aishwarya");
show(70,65,55,"Priti");
show(60,79,88,"Vaishnavi");