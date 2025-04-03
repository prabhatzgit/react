// this is my first java script code
console.log("Namaste Duniya");

//let name; // -> undefined
let name = "Prabhat";
console.log(name);

// variable name declaration shouldn't be a reserved word
// should be a meaningful
// can't start with a number (like 1name)
// can't contain a space or hyphen

// ------------- constants -----------

let interestRate = 0.3; // let variable can instantiate and assign
interestRate = 1; // can able to re-assign
console.log(interestRate);

const interestR = 0.4; // let variable can instantiate and assign
//interestR = 2; // can't able to re-assign
console.log(interestR);

// ------------ Primitives / Value types -> String, Number, Boolean, Undefined, Null

let nameOfEmployee = "Prabhat"; // Strind literal
let age = 34; // Number literal
let isApproved = true; // Boolean literal
let firstName = undefined;
let selectedColor = null;

// Languages two types
// 1. static (Statistically typed) 2. Dynamic (Dynamicall typed)

// 1. Static (Statistically typed)

// string staticName = 'Prabhat';

// 2. Dynamic (Dynamicall typed)

let dynamicName = "Prabhat Ranjan Mahanty";

// ------- Reference types -----------

// how to declare an object

let person = {
  name: "Prabhat",
  age: 34,
};

// case1:
console.log(person);

//  case2: dot notation to change the value of an attribute of object

person.name = "Prabhat Ranjan";

console.log(person.name);

// case3: bracket notation
person["name"] = "Prabhat Mahanty";

console.log(person.name);

// case4: to change the attribute dynamic
let selection = "name";
person[selection] = "Prabhat Ranjan Mahanty";

// ---------- array -----------

let selectedColours = ["red", "green"];

console.log(selectedColours); // fetch the elements from an array

console.log(selectedColours[0]); // fetch element based on index element

selectedColours[2] = "green";

console.log(selectedColours); // add new elelement to array and print it

selectedColours[2] = 1;

console.log(selectedColours); // update element at index 2

console.log(selectedColours.length); // get length

// ---------------- Functions -------------

// basic function
function greet() {
  console.log("Namaste Duniya from function");
}

greet();

// function to accept and print names

function greetDynamicNames(name) {
  console.log("Namaste " + name);
}

greetDynamicNames("Ganesha");

// function to accept two args

function greetDynamic(firstName, lastName) {
  console.log("Namaste " + firstName + " " + lastName);
}

greetDynamic("Prabhat"); // Namaste Prabhat undefined
greetDynamic("Ranjan"); // Namaste Ranjan undefined

greetDynamic("Prabhat", "Ranjan");

// calculating a square value
function square(number) {
  return number * number;
}

console.log(square(2));
