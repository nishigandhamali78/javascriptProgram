console.log("===log the arrow element with it's index using foreach() with arrow function===");
const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601];{
arrayNumber.forEach((element ,index)=>{
    console.log(`Array element is ${element} and indix is${index}`);

})
}

 console.log("===find positive numbers====");
  arrayNumber.forEach((element)=>{
        if(element>=0){
            console.log(element);
            
        }
     });
     console.log("===find negative numbers====");
     const newArray=[];
     arrayNumber.forEach((element)=>{
        if(element<=0){
            newArray.push(element);          
        }
     })
        console.log(newArray);
    
        console.log("===find even  numbers====");
     arrayNumber.forEach((element)=>{
        if(element%2==0){
            console.log(element);
            
        }
     })
     console.log("===find even index  numbers====");
     arrayNumber.forEach((element,index)=>{
        if(index%2==0){
            console.log(index);
            
        }
     })
     const sum=0;
     const newArray3=arrayNumber.forEach((element)=>{
        return element+sum;

     })
    console.log(newArray3);
    

        
        
     