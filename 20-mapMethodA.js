
console.log("====cube the each array element====");

const arrayNumber=[20,11,40,25,23,11,9,31,60,2,];
const newArray=arrayNumber.map((element)=>{
return  element*element*element;

})
console.log(`cube of element is ${newArray}`);

console.log("==add index value into its corresponding each array element====");

//const arrayNumber1=[20,11,40,25,23,11,9,31,60,2,];
const newArray1=arrayNumber.map((element,index)=>{
return  element+index;

})
console.log(newArray1);

console.log("====Add 10 into each element====");


const newArray2=arrayNumber.map((element)=>{
    return  element+10;
    
    })
    console.log(newArray2);

