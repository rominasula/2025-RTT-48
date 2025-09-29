/* 
    To run this file, you will need to install Node.js (https://nodejs.org/en)
    Once installed, open up the terminal in VSCode and type: node script
*/

// wait returns a promise and can be handled with async/await
import { wait } from './util.js'
import setup from 'prompt-sync'

const prompt = setup()

async function start() {

    // an example of how to get started
    let nameOfShip = prompt('What is the name of your ship? ')
    await wait(1000)
    console.log(`Your ship name is: ${nameOfShip}`)

}

start()
