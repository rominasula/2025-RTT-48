// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

 //Applies a late penalty of 10% of total points if the submission is late.

function applyLatePenalty(score, dueDate, submittedDate, pointsPossible) {
  // Calculate the difference in milliseconds and convert to days
  const msPerDay = 24 * 60 * 60 * 1000; 
  const daysLate = Math.ceil((submittedDate.getTime() - dueDate.getTime()) / msPerDay);

  // If the submission is late, subtract 10% of the total points
  if (daysLate > 0) {
    score -= pointsPossible * 0.1;
  }

  // Ensure the score never goes below zero
  return Math.max(score, 0);
}


function getLearnerData(course, ag, submissions) {
  try {
    // Validate that AssignmentGroup belongs to CourseInfo
    if (ag.course_id !== course.id) {
      throw new Error(`Course ID mismatch: ${ag.course_id} does not match ${course.id}`);
    }

    // Validate assignments
   ag.assignments.forEach(assign => {
  if (typeof assign.points_possible !== "number" || assign.points_possible === undefined || assign.points_possible === null) {
    throw new Error(`Invalid points_possible for assignment ${assign.id}`);
  }
  if (assign.points_possible <= 0) {
    throw new Error(`points_possible must be greater than 0 for assignment ${assign.id}`);
  }
});

console.log("Validation passed"); 


    // Process learner data
    const learnerResults = {};

    for (let i = 0; i < submissions.length; i++) {
      const sub = submissions[i];
      const assignment = ag.assignments.find(a => a.id === sub.assignment_id);

      // Use continue to skip submissions without a matching assignment
      if (!assignment) {
        console.log(`Skipping submission ${sub.assignment_id} (no matching assignment)`);
        continue;
      }

      const learnerId = sub.learner_id;

      // Convert to Date objects
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(sub.submission.submitted_at);

      // Apply late penalty
      const adjustedScore = applyLatePenalty(
        sub.submission.score,
        dueDate,
        submittedDate,
        assignment.points_possible
      );

      // Store learner data
      if (!learnerResults[learnerId]) {
        learnerResults[learnerId] = { id: learnerId, totalScore: 0, totalPossible: 0 };
      }

      learnerResults[learnerId].totalScore += adjustedScore;
      learnerResults[learnerId].totalPossible += assignment.points_possible;

      // Store assignment score as percentage
      learnerResults[learnerId][`assignment_${assignment.id}`] =
        +(adjustedScore / assignment.points_possible).toFixed(2);
    }

    // Convert to array and calculate overall average
    return Object.values(learnerResults).map(learner => {
      learner.avg = +(learner.totalScore / learner.totalPossible).toFixed(2);
      delete learner.totalScore;
      delete learner.totalPossible;
      return learner;
    });

  } catch (error) {
    console.error("Error in getLearnerData:", error.message);
    return [];
  }
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
