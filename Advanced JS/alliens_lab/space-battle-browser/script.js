// wait returns a promise and can be handled with async/await
import { wait } from './util.js';

const button = document.querySelector('button');

// Start game when button is clicked
button.addEventListener('click', start);

// Utility to get random values in a range
function getRandom(min, max, decimals = 0) {
  const val = Math.random() * (max - min) + min;
  return Number(val.toFixed(decimals));
}

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  isAlive() {
    return this.hull > 0;
  }

  attack(target) {
    if (Math.random() < this.accuracy) {
      target.hull -= this.firepower;
      console.log(`${this.name} hits ${target.name} for ${this.firepower} damage!`);
    } else {
      console.log(`${this.name} missed!`);
    }
  }
}

function createAlienShips(count) {
  const aliens = [];
  for (let i = 0; i < count; i++) {
    const alien = new Ship(
      `Alien Ship ${i + 1}`,
      getRandom(3, 6),
      getRandom(2, 4),
      getRandom(0.6, 0.8, 2)
    );
    aliens.push(alien);
  }
  return aliens;
}

async function battle(player, alien) {
  console.log(`\n A new alien ship appears: ${alien.name}`);
  console.log(`  Hull: ${alien.hull}, Firepower: ${alien.firepower}, Accuracy: ${alien.accuracy}`);

  while (player.isAlive() && alien.isAlive()) {
    await wait(1000);
    player.attack(alien);

    if (!alien.isAlive()) {
      console.log(`You destroyed ${alien.name}!`);
      return true;
    }

    await wait(1000);
    alien.attack(player);

    if (!player.isAlive()) {
      console.log(` Your ship has been destroyed by ${alien.name}!`);
      return false;
    }

    console.log(` ${player.name} Hull: ${player.hull.toFixed(1)} | ${alien.name} Hull: ${alien.hull.toFixed(1)}`);
  }
}

async function start() {
  const nameOfShip = prompt('What is the name of your ship?') || 'USS Assembly';
  const player = new Ship(nameOfShip, 20, 5, 0.7);
  const alienFleet = createAlienShips(6);

  console.clear();
  console.log(`Welcome, Captain! Your ship is: ${player.name}`);
  console.log(`  Hull: ${player.hull}, Firepower: ${player.firepower}, Accuracy: ${player.accuracy}\n`);
  await wait(1000);

  for (let i = 0; i < alienFleet.length; i++) {
    const currentAlien = alienFleet[i];
    const result = await battle(player, currentAlien);

    if (!result) {
      console.log(` Game Over. Earth has been lost.`);
      return;
    }

    if (i < alienFleet.length - 1) {
      const choice = prompt("Do you want to attack the next ship or retreat? (attack/retreat)").toLowerCase();
      if (choice !== 'attack') {
        console.log(" You retreated. Earth is safe... for now.");
        return;
      }
    } else {
      console.log(" You destroyed all alien ships! Earth is saved!");
    }
  }
}

// Start game when button is clicked
button.addEventListener('click', start);
