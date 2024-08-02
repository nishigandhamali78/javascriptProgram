console.log("========Function with no argument no return type=======");
function fun1(){
    console.log("This is my first Function");
}
fun1();

function fun2(){
    console.log("This is my second Function");
}
fun2();
console.log("======function with argument no return type=========");
function personaldetails(firstName,lastname,collegeName){
    console.log("My First Name is:", firstName);
    console.log("My Last Name is:", lastname);
    console.log("My College Name is:", collegeName);

}personaldetails("Nishigandha","Mali","SVERI College");

console.log("======function with argument no return type 2=========");
function addThreeValues(firstVal,secondVal,thirdVal){
    console.log("Given Parameter:",firstVal,secondVal,thirdVal);
    var result=firstVal+secondVal+thirdVal;
    console.log("Addition is:", result);

}
addThreeValues(10.23,600,40);
addThreeValues("Hellow", " Good", " Morning");

