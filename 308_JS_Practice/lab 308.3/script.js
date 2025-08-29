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
