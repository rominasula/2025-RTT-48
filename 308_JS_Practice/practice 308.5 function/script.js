// Function declaration
function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}


console.log(computeArea(5, 10));  
console.log(computeArea(3, 7));   


// Function expression
const planetHasWater = function(planet) {
  // Convert to lowercase to handle all casing variations
  const lowerCasePlanet = planet.toLowerCase();
  return lowerCasePlanet === "earth" || lowerCasePlanet === "mars";
};


console.log(planetHasWater("Earth"));    // true
console.log(planetHasWater("MARS"));     // true
console.log(planetHasWater("venus"));    // false
console.log(planetHasWater("Jupiter"));  // false
