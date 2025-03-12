// script.js

// Your JavaScript code goes here

console.log("Hello, world!");

const person = new Object();

person.name = "Jihad";
person.location = "Dhaka";
person.address = "01793504010";
person.gender = "male";
person.fullname =
function(){
    return person.name + " " + person.location;
}

console.log("Print Person");
console.log(person.location);
console.log(person.fullname);