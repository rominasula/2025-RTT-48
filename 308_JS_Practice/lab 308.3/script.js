// 1. Count down from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 2. Output odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 3. Output even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Output multiples of 3, starting at 6 and ending at 60
for (let i = 6; i <= 60; i += 3) {
  console.log(i);
}

// 5. Output an increasing number of # symbols, from 1 to 7
let symbol = "";
for (let i = 1; i <= 7; i++) {
  symbol += "#";
  console.log(symbol);
}

//Count down to 0 from a given number
let num = 10; // starting number
while (num >= 0) {
  console.log(num);
  num--;
}

//Log integers in multiples of 3 as long as they are less than 35
let i = 3;
while (i < 35) {
  console.log(i);
  i += 3;
}

//Print integers in multiples of 5 as long as they are less than 100
let j = 5;
while (j < 100) {
  console.log(j);
  j += 5;
}

//Integers between 0 and 20 — divisible by 2 → multiply by 3 before output
let k = 0;
while (k <= 20) {
  if (k % 2 === 0) {
    console.log(k * 3);
  }
  k++;
}


//(This skips odd numbers automatically because only even numbers pass the if.)

//Print all prime numbers between 0 and 20
let numCheck = 2; // 0 and 1 are not prime
while (numCheck <= 20) {
  let isPrime = true;

  let divisor = 2;
  while (divisor <= Math.sqrt(numCheck)) {
    if (numCheck % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }

  if (isPrime) {
    console.log(numCheck);
  }

  numCheck++;
}

// Price of cookie
let cookiePrice = 4;
// Amount paid
let amountPaid = 10;

// Calculate change
let change = amountPaid - cookiePrice; // 10 - 4 = 6 dollars

// Convert dollars to cents
let changeInCents = change * 100;

// Value of a quarter in cents
let quarterValue = 25;

// Counter for quarters
let quartersCount = 0;

// Loop to count quarters
while (changeInCents >= quarterValue) {
  quartersCount++;
  changeInCents -= quarterValue;
}

console.log(`Romeo received ${quartersCount} quarters.`);
