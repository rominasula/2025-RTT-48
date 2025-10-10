import express from "express";
import db from "../db.js";

const router = express.Router();
const collection = db.collection("listingsAndReviews");


// 1️⃣ Retrieve all listings where property_type is "Apartment"
router.get("/apartments", async (req, res) => {
  try {
    const results = await collection.find({ property_type: "Apartment" }).limit(10).toArray();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving apartments" });
  }
});

// 2️⃣ Find all listings where the price is less than $200
router.get("/under200", async (req, res) => {
  try {
    const results = await collection.find({ price: { $lt: 200 } }).limit(10).toArray();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving listings" });
  }
});

// 3️⃣ Fetch all listings where accommodates >= 4
router.get("/accommodates4", async (req, res) => {
  try {
    const results = await collection.find({ accommodates: { $gte: 4 } }).limit(10).toArray();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving listings" });
  }
});

export default router;