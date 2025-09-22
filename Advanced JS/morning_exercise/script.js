function characterCounter(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; 
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(characterCounter("hello romina"));

//another option

// function characterCounter(str) {
//   const occurences = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] in occurences)) {
//       occurences[str[i]] = 1;
//     } else {
//       occurences[str[i]]++;
//     }
//   }
//   return occurences;
// }

// console.log(characterCounter("hello"));

