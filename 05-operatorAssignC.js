
function eligibility(grandScore,hscScore,sscScore,candidateName){
    var result= grandScore>=70||hscScore>=80||sscScore>=90?" You are Eligible for TCS interview":" You are Not Eligible for TCS interview";
    console.log(`Hello! ${candidateName},${result}`);;
    
}
eligibility(80,86,90,"Nisha");
eligibility(70,65,55,"Disha");
eligibility(60,79,88,"Pooja");