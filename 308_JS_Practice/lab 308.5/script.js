
//Greet User
function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Romina")); 


//add 2 numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(3, 5)); 


//Check Even or Odd
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 


//Find the Larger Number
function maxOfTwo(a, b) {
  return a > b ? a : b;
}

console.log(maxOfTwo(10, 20)); 

//Repeat a Word
function repeatWord(word, times) {
  return word.repeat(times);
}

console.log(repeatWord("hi", 3)); // "hihihi"


//Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


console.log(toFahrenheit(0));   // 32
console.log(toFahrenheit(100)); // 212

//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

Example:
console.log(reverseString("hello")); // "olleh"

//Count Vowels
function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // 3

//Filter Even Numbers from Array
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]