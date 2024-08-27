let professor={
    firstName:"Nisha",
    lastname:"Mali",
    city:"Thane",
    age:26,
    college:"SVERI",
    certificates:["Hacker Rank Participation","certification in IFE course","certification in advance programing"],
    degrees:{//nested object
        engineering:"CSC",
        PHD:"ADV Computing"
    }
}
console.log("===========Add new property or key====");

professor.totalExperience="14 years";
console.log(professor.totalExperience);
console.log(professor);


console.log("===Modifying existing property=====");

professor.age=30;
console.log(professor);
console.log("======Add new certificate at 2nd index of array======");
professor.certificates.splice(2,0,"Oracel certificate")
console.log(professor);




