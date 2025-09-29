const cells = document.querySelectorAll('td');
console.log(cells); // ✅ Now logs the actual cell elements

// const resetBtn = document.getElementById('reset');
// resetBtn.addEventListener("click", () => {
//     window.location.reload(); // ✅ Reloads page to reset board
// });

const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
    });
});

let currentPlayer = "X";

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        } else {
            console.log("Box already marked.");
        }
    });
});



