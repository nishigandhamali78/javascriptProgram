console.log(`=========  inbuilt callback function ===============`);

// In built callback function
//1 sec = 1000 Mill sec
let greet = function(){
    console.log(`Hello - Good Morning`); 
}

setTimeout(greet, 8000);

// setTimeout(function(){
//     console.log(`Hello - Good Morning`); 
// }, 8000);