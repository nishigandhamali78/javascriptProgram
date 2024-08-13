console.log("===========total element or lenght log on console==========");
const array=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array);
const val1=array.length;
console.log(val1);
console.log("");

console.log("===log first and last element on console========");
const array1=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array1);
const val2=array1[0];
console.log("First element:",val2);
const val3=array1[array1.length-1];
console.log("Last element:",val3);
console.log("");

console.log("=======Log 3rd last element using lenght=========");
const array2=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array2);
const val4=array2[array2.length-3];
console.log(val4);
console.log("");

console.log("==========find all even number using for of loop====");
let array3=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array3);
for (let index of array3) {
    if(index%2==0){
        console.log("Even number is:",index);
        index++;
    } 
}
console.log("");

console.log("==========find all even number using for of loop====");
let array4=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array4);
for (let index of array4) {
    if(index%2==1){
        console.log("Odd number is:",index);
        index++;
    } 
}
console.log("");

console.log("=====Find number which are multiple of 5=======");
let array5=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array5);
for (let index of array5) {
    if(index%5==0){
        console.log("multiple of 5:",index);
        index++;
    } 
}
console.log("");
console.log("====is number 155 available in array====");
let array6=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array6);
let val5=array6.includes(155);
console.log(val5);

console.log("");
console.log("====is number 23 available in array====");
let array7=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array7);
let val6=array6.includes(23);
console.log(val6);

console.log("");
console.log("====insert number55,66 at index 3 in array====");
let array8=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array8);
let val7=array8.splice(3,0,55,66);
console.log(val7);
console.log(array8);

console.log("");
console.log("====delete 3 element starting from index 4====");
let array9=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array9);
let val8=array9.splice(4,3);
console.log(val8);
console.log(array9);























