const express = require("express");
const router = express.Router();
const error = require("../utilities/error");

// Temporary in-memory data
let comments = [];
let commentId = 1;

// GET /comments
router.get("/", (req, res, next) => {
  let results = comments;

  // Optional filtering
  if (req.query.userId) {
    results = results.filter(c => c.userId == req.query.userId);
  }
  if (req.query.postId) {
    results = results.filter(c => c.postId == req.query.postId);
  }

  res.json(results);
});

// POST /comments
router.post("/", (req, res, next) => {
  const { userId, postId, body } = req.body;
  if (!userId || !postId || !body) {
    return next(error(400, "userId, postId, and body are required"));
  }

  const newComment = { id: commentId++, userId, postId, body };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// GET /comments/:id
router.get("/:id", (req, res, next) => {
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return next(error(404, "Comment not found"));
  res.json(comment);
});

// PATCH /comments/:id
router.patch("/:id", (req, res, next) => {
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return next(error(404, "Comment not found"));

  if (req.body.body) comment.body = req.body.body;
  res.json(comment);
});

// DELETE /comments/:id
router.delete("/:id", (req, res, next) => {
  const index = comments.findIndex(c => c.id == req.params.id);
  if (index === -1) return next(error(404, "Comment not found"));

  const deleted = comments.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
