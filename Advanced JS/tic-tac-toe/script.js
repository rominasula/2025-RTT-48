const cells = document.querySelectorAll('td');
const resetBtn = document.getElementById('reset');
let isXTurn = true;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = isXTurn ? 'X' : 'O';
      isXTurn = !isXTurn;
    }
  });
});

resetBtn.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  isXTurn = true;
});
