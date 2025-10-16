import express from "express";
import mongoose from "mongoose";
import Grade from "../models/grade.mjs";

const router = express.Router();

// Create a single grade entry
router.post("/", async (req, res) => {
  let newDocument = req.body;

  // Rename for backward compatibility
  if (newDocument.student_id) {
    newDocument.learner_id = newDocument.student_id;
    delete newDocument.student_id;
  }

  try {
    const grade = new Grade(newDocument);
    const result = await grade.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get a single grade entry
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const result = await Grade.findById(id);
  if (!result) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Add a score to a grade entry
router.patch("/:id/add", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const result = await Grade.findByIdAndUpdate(
    id,
    { $push: { scores: req.body } },
    { new: true }
  );

  if (!result) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Remove a score from a grade entry
router.patch("/:id/remove", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const result = await Grade.findByIdAndUpdate(
    id,
    { $pull: { scores: req.body } },
    { new: true }
  );

  if (!result) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a single grade entry
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }

  const result = await Grade.findByIdAndDelete(id);
  if (!result) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Redirect student to learner route
router.get("/student/:id", (req, res) => {
  res.redirect(`/grades/learner/${req.params.id}`);
});

// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {
  const query = {
    learner_id: Number(req.params.id),
  };

  if (req.query.class) {
    query.class_id = Number(req.query.class);
  }

  const result = await Grade.find(query);

  if (!result.length) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a learner's grade data
router.delete("/learner/:id", async (req, res) => {
  const query = { learner_id: Number(req.params.id) };

  const result = await Grade.deleteMany(query);
  if (result.deletedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Get a class's grade data
router.get("/class/:id", async (req, res) => {
  const query = { class_id: Number(req.params.id) };

  if (req.query.learner) {
    query.learner_id = Number(req.query.learner);
  }

  const result = await Grade.find(query);
  if (!result.length) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Update class ID for a class
router.patch("/class/:id", async (req, res) => {
  const filter = { class_id: Number(req.params.id) };
  const update = { class_id: req.body.class_id };

  const result = await Grade.updateMany(filter, { $set: update });

  if (result.matchedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

// Delete a class's grade data
router.delete("/class/:id", async (req, res) => {
  const query = { class_id: Number(req.params.id) };

  const result = await Grade.deleteMany(query);
  if (result.deletedCount === 0) return res.status(404).send("Not found");
  return res.status(200).send(result);
});

export default router;
