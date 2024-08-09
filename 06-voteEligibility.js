var voteEligible= function vote(age) {
    if(age<=0||age<0||age>130||age<18){
        console.log('invalid data:', age);
    }else{
        if(age>=18){
            console.log("Congrass! you are eligible for vote");
        }else{
            console.log("you are not eligible for vote");
        }
     }

}
voteEligible(0);
voteEligible(45);
voteEligible("null");
voteEligible(200);
voteEligible(20);
voteEligible(8);
voteEligible(17);
