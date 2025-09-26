const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');

let isXTurn = true; // X goes first

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = isXTurn ? 'X' : 'O';
      isXTurn = !isXTurn;
    }
  });
});

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  isXTurn = true;
});
