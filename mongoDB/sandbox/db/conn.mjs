import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

console.log("ATLAS_URI is:", process.env.ATLAS_URI); // Debug line

const client = new MongoClient(process.env.ATLAS_URI);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error("MongoDB connection failed:", e);
}

const db = conn.db("sample_training");

export default db;
