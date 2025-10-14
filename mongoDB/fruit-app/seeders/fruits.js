import db from '../db.js';
import fruits from '../data/fruits.js';

console.log("Connected to MongoDB"); // move from db.js if needed
console.log("Seeding fruit data...");

try {
  const collection = db.collection("fruits");

  const resultDelete = await collection.deleteMany({});
  const resultInsert = await collection.insertMany(fruits);

  console.log(resultInsert); // ✅ this logs the full insert result with ObjectIds

  console.log("Complete");
} catch (err) {
  console.error("Seeding error:", err);
} finally {
  process.exit(); // ensures the script exits
}

