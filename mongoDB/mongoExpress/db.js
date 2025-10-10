// import { MongoClient } from "mongodb"; 

// const connectionString = process.env.ATLAS_URI

// const client = new MongoClient(connectionString)

// let connection;

// try {
//     connection = await client.connect()
//     console.log('Connected to MongoDB')
// } catch (e) {
//     console.log(e)
// }

// const db = connection.db("sample_training")

// export default db

// db.js
import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.ATLAS_URI);

let db;
try {
  await client.connect();
  console.log("✅ Connected to MongoDB");
  db = client.db("sample_airbnb");
} catch (error) {
  console.error("Connection error:", error);
}

export default db;

