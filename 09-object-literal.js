let person = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 24,
    isMarried: true,
    skills: ["HTML", "CSS", "JS"], // "Git & GitHub"
    marks: {
        math: 80,
        physics: 90,
        english: 56,
        chemistry: 78
    }
}

console.log(person);
const firstName = person.firstName;
console.log(`First Name: ${firstName}`);

console.log(`Age is: ${person.age}`);

person.skills.push("Git & GitHub");
const personSkills = person.skills;
console.log(`======= Person Skills =======`);
for (const element of personSkills) {
    console.log(element);   
}
console.log(`==== Marks =========`);
console.log(`English marks: ${person.marks.english}`);


console.log(`======== Update ======= `);
person.age = 55;
console.log(`Updated age: ${person.age}`);
console.log(person);


console.log(`======== Add new property  ======= `);
person.country = "India";
console.log(person);


console.log(`======== Traversing ============`);
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key}, ${element}`);
    }
}

console.log(`======== Delete the property ======= `);
delete person.isMarried;
console.log(person);


console.log(`======== Empty object ======= `);
let student = {

}
console.log(`======== Method in the object ======= `);
let employee = {
    fullName: "Elon Musk",
    age: 55,
    city: "LA",
    country: "USA",
    details:function(){
       console.log(`Full Name: ${this.fullName}, City: ${this.city}, Country: ${this.country}`);   
    }
}

employee.details();