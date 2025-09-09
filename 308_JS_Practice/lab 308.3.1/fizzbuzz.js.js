for (let i = 1; i <= 100; i++) {
  
  // Check divisibility
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Declare an arbitrary number
let n = 9; // You can change this to test

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor → not prime
    }
  }
  return true; // No divisors found → prime
}

// Find the next prime number
let nextNum = n + 1; // Start checking from the next number
while (true) {
  if (isPrime(nextNum)) {
    console.log(`The next prime after ${n} is ${nextNum}`);
    break; // Exit loop once prime is found
  }
  nextNum++;
}
