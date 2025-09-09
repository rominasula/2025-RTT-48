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


   

  } catch (error) {
    console.error("Error in getLearnerData:", error.message);
    return [];
  }
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
