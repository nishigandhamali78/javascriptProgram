function jennyHomeWork(callback){
    console.log(`==== Jenny Started Homework=====`);
    console.log(`She is completing her homework`);
    console.log(`She have completed her homework step by step`);
    callback();  
}

let elonCopyHomeWork = function(){
    console.log(`====== Elon came back ======= `);
    console.log(`Started copying homework`);
    console.log(`Finally he also completed his assignment`);   
}
jennyHomeWork(elonCopyHomeWork);