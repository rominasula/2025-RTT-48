class Cat {

    constructor(name,color,age){
        this.name = name;
        this.color=color;
        this.age=age;
    }
    miau(){
        console.log(`${this.name} says: Miau!`)
    }
     sleep() {
    console.log(`${this.name} is sleeping...`);
  }
    eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  }
    
}

// create two instances
const cat1 = new Cat("Milo", "brown", 3);
const cat2 = new Cat("Luna", "black", 2);

// Log both instances
console.log(cat1);
console.log(cat2);

// Invoke methods
cat1.miau();
cat1.sleep();
cat1.eat("fish");

cat2.miau();
cat2.sleep();
cat2.eat("prosciutto");

//Part 2: Pirate Class – Constructors

class Pirate {
   constructor(name, rank, weapon) {
    this.name = name;
    this.rank = rank;
    this.weapon = weapon;
  }
attack() {
    console.log(`${this.name} attacks with their ${this.weapon}!`);
  }

  drinkRum() {
    console.log(`${this.name} says: Ahh, that's the good stuff!`);
  }

  introduce() {
    console.log(`I'm ${this.name}, the ${this.rank} of this ship!`);
  }
}

// Create two arrays of pirates
const jollyRoger = [
  new Pirate("Jack", "Captain", "Sword"),
  new Pirate("Anne", "First Mate", "Pistol"),
  new Pirate("Bill", "Gunner", "Cannon")
];

const blackPearl = [
  new Pirate("Barbossa", "Captain", "Cutlass"),
  new Pirate("Morgan", "Navigator", "Dagger"),
  new Pirate("Sam", "Cook", "Frying Pan")
];

// Loop over each array and print 3 properties
function printPirates(pirateArray) {
  for (let pirate of pirateArray) {
    console.log(`Name: ${pirate.name}, Rank: ${pirate.rank}, Weapon: ${pirate.weapon}`);
    pirate.introduce();
    pirate.attack();
    pirate.drinkRum();
    console.log('---');
  }
}

console.log("Jolly Roger Pirates:");
printPirates(jollyRoger);

console.log("Black Pearl Pirates:");
printPirates(blackPearl);

