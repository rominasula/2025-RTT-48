import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.ATLAS_URI;

try {
 await mongoose.connect(uri, {
  dbName: "sample_training"
});
  console.log("Connected to MongoDB via Mongoose");
} catch (err) {
  console.error("Mongoose connection error:", err);
}

export default mongoose;


