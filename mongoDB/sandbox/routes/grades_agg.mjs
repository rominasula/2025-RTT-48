import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// Utility to calculate weighted average (reusable expression)
const weightedAvgExpression = {
  $divide: [
    {
      $sum: {
        $map: {
          input: "$scores",
          as: "score",
          in: {
            $multiply: [
              "$$score.score",
              { $divide: ["$$score.weight", 100] }
            ],
          },
        },
      },
    },
    1,
  ],
};

// GET /grades/stats - overall stats
router.get("/stats", async (req, res) => {
  try {
    const grades = db.collection("grades");

    const pipeline = [
      {
        $addFields: { avg: weightedAvgExpression }
      },
      {
        $group: {
          _id: "$learner_id",
          avgGrade: { $avg: "$avg" },
        },
      },
      {
        $group: {
          _id: null,
          totalLearners: { $sum: 1 },
          above70: {
            $sum: {
              $cond: [{ $gt: ["$avgGrade", 70] }, 1, 0]
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalLearners: 1,
          above70: 1,
          percentAbove70: {
            $multiply: [{ $divide: ["$above70", "$totalLearners"] }, 100]
          },
        },
      },
    ];

    const stats = await grades.aggregate(pipeline).toArray();
    res.json(stats[0] || { totalLearners: 0, above70: 0, percentAbove70: 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving stats");
  }
});

// GET /grades/stats/:id - stats for a specific class
router.get("/stats/:id", async (req, res) => {
  try {
    const classId = Number(req.params.id);
    const grades = db.collection("grades");

    const pipeline = [
      { $match: { class_id: classId } },
      { $addFields: { avg: weightedAvgExpression } },
      {
        $group: {
          _id: "$learner_id",
          avgGrade: { $avg: "$avg" },
        },
      },
      {
        $group: {
          _id: null,
          totalLearners: { $sum: 1 },
          above70: {
            $sum: {
              $cond: [{ $gt: ["$avgGrade", 70] }, 1, 0]
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalLearners: 1,
          above70: 1,
          percentAbove70: {
            $multiply: [{ $divide: ["$above70", "$totalLearners"] }, 100]
          },
        },
      },
    ];

    const stats = await grades.aggregate(pipeline).toArray();
    res.json(stats[0] || { totalLearners: 0, above70: 0, percentAbove70: 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving stats");
  }
});

// Get the weighted average of a specified learner's grades, per class
router.get("/learner/:id/avg-class", async (req, res) => {
  try {
    let collection = await db.collection("grades");

    let result = await collection
      .aggregate([
        { $match: { learner_id: Number(req.params.id) } },
        { $unwind: "$scores" },
        {
          $group: {
            _id: "$class_id",
            quiz: {
              $push: {
                $cond: [
                  { $eq: ["$scores.type", "quiz"] },
                  "$scores.score",
                  "$$REMOVE",
                ],
              },
            },
            exam: {
              $push: {
                $cond: [
                  { $eq: ["$scores.type", "exam"] },
                  "$scores.score",
                  "$$REMOVE",
                ],
              },
            },
            homework: {
              $push: {
                $cond: [
                  { $eq: ["$scores.type", "homework"] },
                  "$scores.score",
                  "$$REMOVE",
                ],
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            class_id: "$_id",
            avg: {
              $sum: [
                { $multiply: [{ $avg: "$exam" }, 0.5] },
                { $multiply: [{ $avg: "$quiz" }, 0.3] },
                { $multiply: [{ $avg: "$homework" }, 0.2] },
              ],
            },
          },
        },
      ])
      .toArray();

    if (!result.length) res.status(404).send("Not found");
    else res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving average grades");
  }
});

export default router;
