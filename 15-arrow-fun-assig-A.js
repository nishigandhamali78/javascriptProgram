console.log("====Arrow fuction with no return value and no argument");

let func=()=>{
    console.log("Good Morning, Today is Monday");
}
func();

console.log("=====Arrow fuction with argument and no return value=====");
let mult=(n1,n2,n3=1)=>{
    let result=n1*n2*n3;
    console.log(`given numbers are ${n1},${n2},${n3} multiplication of numbers is ${result}`);
    
}
mult(5,5,2);
mult(10,4);//3arg not present so take defoult value like n3=1

onsole.log("=====Arrow fuction with argument and  return value=====");