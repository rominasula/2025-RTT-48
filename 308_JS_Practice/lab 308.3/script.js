//1. Count down from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//2. Output odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//3. Output even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//4. Output multiples of 3, from 6 to 60
for (let i = 6; i <= 60; i += 3) {
  console.log(i);
}

//5. Output an increasing number of # symbols
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

//6. Loop from 1 to 20 with conditions
for (let i = 1; i <= 20; i++) {
  if (i === 2) {
    console.log("even");
  } else if (i === 1 || i === 3) {
    console.log("odd");
  } else if (i % 2 === 0) {
    console.log("even");
  } else if (isPrime(i)) {
    console.log("prime");
  } else {
    console.log("odd");
  }
}

// Helper function to check prime numbers
function isPrime(num) {
  if (num < 2) return false;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) return false;
  }
  return true;
}