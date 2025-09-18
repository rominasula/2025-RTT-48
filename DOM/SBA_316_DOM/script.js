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

// Add new task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // DOM validation: Prevent empty or short tasks
  if (taskInput.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerText = taskInput.value;

  // Add complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Done";
  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.parentNode.removeChild(li);
    updateCounter();
  });

  // Append buttons
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Append task to list
  taskList.appendChild(li);

  // Reset form
  taskInput.value = "";
  updateCounter();
});

// Clear all tasks
clearAllBtn.addEventListener("click", function () {
  // Using BOM method (confirm)
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
