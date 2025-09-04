

// Part 1: Detect number of columns from CSV header

let csvData = "ID,Name,Occupation,Age,Color\n42,Bruce,Knight,41,blue\n57,Bob,Fry Cook,19,red\n63,Blaine,Quiz Master,58,white\n98,Bill,Doctor’s Assistant,26,black";

// Loop through first line to count commas (for number of columns)
let i = 0;
let numCol = 1; 

while (i < csvData.length) {
  if (csvData[i] === ',') {
    numCol++;
  } else if (csvData[i] === '\n') {
    break; 
  }
  i++;
}

console.log("Part 1 - Number of columns:", numCol);


// Part 2: Convert CSV to 2D array

let rowData = csvData.split('\n'); // Split by rows
let arrOfArr = [];

for (let i = 0; i < rowData.length; i++) {
  let colData = rowData[i].split(','); // Split each row by comma
  arrOfArr.push(colData);
}

console.log("Part 2 - 2D Array:");
console.log(arrOfArr);

// Part 3: Convert 2D array into array of objects

let headers = arrOfArr[0]; // First row is the keys
let objectArray = [];

for (let i = 1; i < arrOfArr.length; i++) {
  let row = arrOfArr[i];
  let obj = {};

  for (let j = 0; j < headers.length; j++) {
    let key = headers[j].toLowerCase(); // lowercase keys
    obj[key] = row[j]; // assign value
  }

  objectArray.push(obj);
}

console.log("Part 3 - Array of Objects:");
console.log(objectArray);


// Part 4: Sorting and Manipulating Data 

// 1. Remove the last element
objectArray.pop();

// 2. Insert new object at index 1
objectArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
});

// 3. Add new object to the end
objectArray.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111"
});

// 4. Calculate average age (as number)
let totalAge = 0;

for (let i = 0; i < objectArray.length; i++) {
  totalAge += parseInt(objectArray[i].age); // Convert string to number
}

let avgAge = totalAge / objectArray.length;
console.log("Part 4 - Average Age:", avgAge);

// Show updated array
console.log("Part 4 - Updated Array of Objects:");
console.log(objectArray);


// Part 5: Convert to CSV 


let keys = Object.keys(objectArray[0]);

//Create CSV header row
let csvHeader = keys.join(',');

// Convert each object to a CSV row
let csvRows = objectArray.map(obj => {
  return keys.map(key => obj[key] ?? '').join(',');
});

// Combine header + rows into one CSV string
let finalCSV = [csvHeader, ...csvRows].join('\n');

console.log("Part 5 - Final CSV Output:");
console.log(finalCSV);
