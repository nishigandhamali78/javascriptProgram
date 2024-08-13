console.log("=====Log the First and Last element on console=====");
const fruits1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits1);
const element1=fruits1[0];
console.log("first Element:",element1);
const element2=fruits1[fruits1.length-1];
console.log("Last Element:",element2);
console.log("");


console.log("========Add element Papaya before banana======");
 const fruits2=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits2);
 const element3=fruits2.unshift("Papaya");
 console.log(element3);
 console.log(fruits2);
 console.log("");

 
 console.log("====Remove mango from array====");
 const fruits3=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits3);
 const element4= fruits3.splice(3,1);
 console.log(element4);
 console.log(fruits3);
 console.log("");


 console.log("====add element pineapple at last position====");
 const fruits4=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits4);
 const element5=fruits4.push("pineapple");
 console.log(element5);
 console.log(fruits4);
 console.log("");


 console.log("====add element pineapple at last position====");
 const fruits5=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits5);
 const element6=fruits5.splice(4,0,"Dragon Fruits");
 console.log(element6);
 console.log(fruits5);
 console.log("");


 console.log("====insert an element dragon fruitss before water melon====");
 const fruits6=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits6);
 const element7=fruits6.splice(4,0,"Dragon Fruits");
 console.log(element7);
 console.log(fruits6);
 console.log("");


 console.log("====replace an element orangewith kiwi====");
 const fruits7=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits7);
 const element8=fruits7.splice(1,1,"Kiwi");
 console.log(element8);
 console.log(fruits7);
 console.log("");

 
 console.log("====Log element starting from index 1 to 4");
 const fruits8=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits8);
 const element9=fruits8.slice(1,4);
 console.log(element9);
 console.log("");

 console.log("====Log last 3 element using lenght=====");
 let fruits9=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(fruits9);
 for (let index=fruits9.length-3; index<fruits9.length;index++) {
    const element = fruits9[index];
    console.log(element);
     
 }

 
 

 

 
 


 
 
 
 


 
 
 


