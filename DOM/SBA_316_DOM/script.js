// Using getElementById, querySelector
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

  // Create DocumentFragment to hold new task
  const fragment = document.createDocumentFragment();

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = `${taskText} [${priority}]`;

  // Set custom attribute for priority
  taskSpan.setAttribute("data-priority", priority);

  // Add class for color
  if (priority === "High") taskSpan.classList.add("high");
  if (priority === "Medium") taskSpan.classList.add("medium");
  if (priority === "Low") taskSpan.classList.add("low");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Done";
  completeBtn.setAttribute("title", "Mark as completed"); // Attribute modification
  completeBtn.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");

    // Use parentNode to show DOM navigation 
    console.log("Completed task from parent:", this.parentNode);
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("title", "Delete this task"); //attribute modification
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  //Append to li
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Use cloneNode to duplicate 
  fragment.appendChild(li);

  taskList.appendChild(fragment);
  updateCounter();

  // Log siblings and children (parent-child-sibling navigation)
  if (taskList.firstChild) {
    console.log("First task:", taskList.firstChild);
    console.log("Next sibling:", taskList.firstChild.nextSibling);
    console.log("Parent node of task list:", taskList.parentNode);
  }
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

// BOM method: beforeunload
window.addEventListener("beforeunload", function () {
  console.log("Page is reloading...");
});

// Second BOM method: log user agent
console.log("User Agent Info:", navigator.userAgent);
