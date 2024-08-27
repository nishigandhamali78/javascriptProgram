console.log("======find greatest number amoung two number====");
function greaternum(num1,num2) {
console.log(`Given number is ${num1} and ${num2}`);
let result=num1>=num2?num1:num2;
console.log(`Greatest number is :${result}`);

}
greaternum(10,-10);
greaternum(800,899);

console.log("");
console.log("====even and odd number using ternary operator===");
function isEvenOrOddNum(num){
 console.log(`Given number is:${num}`);
 let result1=num%2==0?true:false;
 return result1;
 
}
let result2= isEvenOrOddNum(29);
console.log(`Given number is  Even or Not:${result2}`);
let result3= isEvenOrOddNum(44);
console.log(`Given number is  Even or Not:${result3}`);
let result4= isEvenOrOddNum(0);
console.log(`Given number is  Even or Not:${result4}`);
let result5= isEvenOrOddNum(101);
console.log(`Given number is Even or Not:${result5}`);

console.log(" ");
console.log("======which word has even or odd length=====");
function wordlength(word){
 console.log(`Given Word is:${word}`);
 let len=word.length;
 let evenLen=len%2==0?true:false;
 return evenLen;
 
}
let result6=wordlength("javascript");
console.log(`Given word is Even Legth:${result6}`);





