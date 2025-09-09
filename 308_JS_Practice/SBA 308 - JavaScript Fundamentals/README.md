# Learner Data Processor

## Description
This JavaScript application processes course data and calculates each learner's scores for assignments as well as their overall average.  
If an assignment is submitted late, a 10% penalty of the maximum possible points is applied.

---

## Main Features
- **Data validation** – Ensures that the `AssignmentGroup` belongs to the course and that `points_possible` is a positive number.
- **Submission processing** – Calculates the percentage score for each assignment.
- **Late submission penalty** – Reduces 10% of the maximum points if the submission is past the due date.
- **Average calculation** – Computes each learner’s average based on all assignments.
- **Error handling with try/catch** – Catches and handles errors during execution.
- **Loop control with continue** – Skips submissions that have no matching assignment.

---

## Data Structure
### 1. CourseInfo
Contains information about the course.
```javascript
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
```

### 2. AssignmentGroup
List of assignments with maximum points and due dates.
```javascript
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
    { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
    { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }
  ]
};
```

### 3. LearnerSubmissions
List of learner submissions.
```javascript
const LearnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
  ...
];
```

---

##  Key Functions
### 1. `applyLatePenalty(score, dueDate, submittedDate, pointsPossible)`
Applies a penalty of 10% of the maximum points if the submission is late.

### 2. `getLearnerData(course, ag, submissions)`
Processes learner data and returns an array containing:
- Learner ID
- Percentage score for each assignment
- Overall average (`avg`)

---

##  How to Run
 The results will be displayed in the console.

---

## Requirements Covered
- Uses `let` and `const` for variable declaration.
- Performs calculations using operators.
- Uses string, number, and boolean values.
- Includes `if/else` statements.
- Includes `try/catch` for error handling.
- Uses both `for` loop and `forEach`/`map`.
- Uses `continue` to skip invalid submissions.
- Creates and manipulates arrays and objects.
- Outputs processed data.
- Runs without errors.
- Commit frequently to the git repository.

---

##  Sample Output
```javascript

Validation passed

[
  { id: 125, assignment_1: 0.94, assignment_2: 1, assignment_3: 0.8, avg: 0.88 },
  { id: 132, assignment_1: 0.78, assignment_2: 0.84, avg: 0.81 }
]
```
