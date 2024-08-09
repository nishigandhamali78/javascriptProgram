var interviewEligible=function interview(gradScore,hscScore,sscScore,cadidateName){
    if(gradScore>=70||hscScore>=80||sscScore>90){
        console.log("Congrate", cadidateName ,"you are eligible for TCS interview");
    }else{
        console.log("unfortunatly", cadidateName,"adidateName you are eligible for TCS interview");
        
    }
}
interviewEligible(80,86,90,"Nisha");
interviewEligible(70,65,55,"Disha");
interviewEligible(60,79,88,"Pooja");