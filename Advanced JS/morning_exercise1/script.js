// REQUESTS (how we interact with this data):
const personal = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Bob', lastName: 'Thompson'}), 300))
const business = () => new Promise((resolve) => setTimeout(() => resolve({ occupation: 'Farmer', salary: 300 }), 1000))
const residence = () => new Promise((resolve) => setTimeout(() => resolve({ country: 'USA', state: 'Florida' }), 1000))

// WHAT WE WANT:
// print: [firstName] is a [occupation] from [state] [country]

// OBJECTIVE:
// Extract the data about bob that is currently wrapped in promises
// and piece together the string we want (above). Don't alter any of
// the code above and don't recreate the data yourself.

// EXTRA: 
// Refactor your code using Promise.all()

// CODE BELOW:

const something = personal ()
console.log(something)

Promise.all([personal(), business(), residence()])
.then(([personalData, businessData, residenceData]) => {
    const { name } = personalData
    const { occupation } = businessData
    const { state, country } = residenceData

    console.log(`${name} is a ${occupation} from ${state} ${country}`)
  })