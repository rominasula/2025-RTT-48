import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Create a single grade entry
router.post("/", async (req, res) => {
  let collection = await db.collection("grades");
  let newDocument = req.body;

  // rename fields for backwards compatibility
  if (newDocument.student_id) {
    newDocument.learner_id = newDocument.student_id;
    delete newDocument.student_id;
  }

  let result = await collection.insertOne(newDocument);
  res.status(201).send(result);
});

// Get a single grade entry
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(id) };
  let result = await collection.findOne(query);

  if (!result) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Add a score to a grade entry
router.patch("/:id/add", async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(id) };

  let result = await collection.updateOne(query, {
    $push: { scores: req.body }
  });

  if (result.matchedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Remove a score from a grade entry
router.patch("/:id/remove", async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(id) };

  let result = await collection.updateOne(query, {
    $pull: { scores: req.body }
  });

  if (result.matchedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a single grade entry
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(id) };
  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Get route for backwards compatibility
router.get("/student/:id", async (req, res) => {
  res.redirect(`learner/${req.params.id}`);
});

// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { learner_id: Number(req.params.id) };

  if (req.query.class) query.class_id = Number(req.query.class);

  let result = await collection.find(query).toArray();

  if (!result.length) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a learner's grade data
router.delete("/learner/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { learner_id: Number(req.params.id) };

  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Get a class's grade data
router.get("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };

  if (req.query.learner) query.learner_id = Number(req.query.learner);

  let result = await collection.find(query).toArray();

  if (!result.length) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Update a class id
router.patch("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };

  let result = await collection.updateMany(query, {
    $set: { class_id: req.body.class_id }
  });

  if (result.matchedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a class
router.delete("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };

  let result = await collection.deleteMany(query);

  if (result.deletedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

export default router;
