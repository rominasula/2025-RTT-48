// console.log("Hello World!")
// console.log("Good Bye")

// // let x = 10;
// // let y = 5;

// // {
// // 	let z = x + y;
// // 	console.log(z);
// // }


// let num = -5;

// // Check if the number is positive or negative
// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// let age = 17; // Change this value to test

// if (age >= 18) {
//   console.log("Access Granted ");
// } else {
//   console.log("Access Denied ");
// }


//1. What Number’s Bigger?
// First pair
let a = 5;
let b = 10;

if (a > b) {
  console.log(`The greater number of ${a} and ${b} is ${a}.`);
} else {
  console.log(`The greater number of ${a} and ${b} is ${b}.`);
}

// Second pair
let c = 42;
let d = 17;

if (c > d) {
  console.log(`The greater number of ${c} and ${d} is ${c}.`);
} else {
  console.log(`The greater number of ${c} and ${d} is ${d}.`);
}


//2. The World Translator
let language = "al"; 

if (language === "en") {
  console.log("Hello, World");
} else if (language === "es") {
  console.log("Hola, Mundo");
} else if (language === "al") {
  console.log("Pershendetje, Bote");
} else if (language === "fr") {
  console.log("Bonjour, le monde");
} else {
  console.log("Hello, World"); // default
}

//3. The Pluralizer
function pluralize(noun, number) {
  // handle irregular plurals
  if (noun === "sheep") {
    return number + " " + noun;
  } else if (noun === "goose") {
    return number + " " + (number === 1 ? "goose" : "geese");
  }

  // regular case
  if (number === 1) {
    return number + " " + noun;
  } else {
    return number + " " + noun + "s";
  }
}

console.log(pluralize("cat", 5));    // "5 cats"
console.log(pluralize("dog", 1));    // "1 dog"
console.log(pluralize("sheep", 3));  // "3 sheep"
console.log(pluralize("goose", 2));  // "2 geese"

