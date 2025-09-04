// prime numbers: 5, 7, 11

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


let n = 4;

// check every number greater than 4 and find the first prime number 
for (let num = n + 1; true; num++) {

	// num = 5 (initially, on first iteration)

	// if num is 5...
	// we don't need to divide by 5 (5 / 5)
	// but we should check...
	// can we divide 5 by 4 evenly? (without a remainder) (is 5 divisible by 4?)
	// can we divide 5 by 3 evenly? 
	// can we divide 5 by 2 evenly? 
	// if we can divide 5 by 4, 3, or 2 evenly... it's not prime
	// we don't need to divide by 1 (5 / 1) 

	// create a variable to mark the number as not prime
	let isNotPrime; // undefined

	// check if 5 is divisible by any number below it (except for 1)
	for (let num2 = num - 1; num2 > 1; num2--) {
		// check for a remainder (ex: 5 / 4) because no remainder means it IS divisible 
		// by that number (a number other than itself and 1) and therefore it IS NOT prime
		if (num % num2 === 0) {
			// tell our outer loop that its current number is NOT prime
			isNotPrime = true;
			// exit the inner loop
			break;
		}
	}

	// check if the nested loop determined if num is not prime
	if (isNotPrime) {
		// skip the current iteration of outer loop
		continue;
	// if we hit else here it means it was only divisible by itself or 1
	} else {
		console.log(`Starting from ${n}, the next prime number is ${num}`)
		// exit the outer loop
		break;
	}
}