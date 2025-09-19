// using getElementById, querySelector
const taskForm = document.getElementById("taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const clearAllBtn = document.getElementById("clearAll");
const taskCounter = document.getElementById("taskCounter");

// Update task counter
function updateCounter() {
  taskCounter.innerText = `Total tasks: ${taskList.children.length}`;
}

// Add new task with priority + buttons
function addTask(taskText, priority = "Low") {
  const li = document.createElement("li");

  // Task text span (so color applies only here)
  const taskSpan = document.createElement("span");
  taskSpan.textContent = `${taskText} [${priority}]`;

  // Add priority class for color
  if (priority === "High") taskSpan.classList.add("high");
  if (priority === "Medium") taskSpan.classList.add("medium");
  if (priority === "Low") taskSpan.classList.add("low");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Done";
  completeBtn.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  // Append everything
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  updateCounter();
}

// Handle form submit
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const priority = document.getElementById("priority").value;
  if (taskText !== "") {
    addTask(taskText, priority);
    taskInput.value = "";
  } else {
    alert("Task cannot be empty!");
  }
});

// Clear all tasks
clearAllBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all tasks?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    updateCounter();
  }
});

// BOM method: reload page
window.addEventListener("beforeunload", function () {
  console.log("Page is reloading...");
});
