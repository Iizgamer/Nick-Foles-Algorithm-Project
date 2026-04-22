const startBtn = document.getElementById('startBtn');
let xInput = document.getElementById('xInput');
let yInput = document.getElementById('yInput');
let grid = document.getElementById('grid');

startBtn.addEventListener('mouseenter', (e) => {
    startBtn.style.background = '#afafaf';  
});

startBtn.addEventListener('mouseleave', (e) => {
    startBtn.style.background = '#838383'
});

class Cell {
    constructor() {
        this.x = x;
        this.y = y;
    }
}

startBtn.addEventListener('click', function() {
    let count = 1
    for (i=1; i<=Number(yInput.value); i++) {
        let row = document.createElement('tr');
        row.id = `row${i}`;
        grid.appendChild(row);
        grid.appendChild(document.createElement('br'));
        for (j=1; j<=Number(xInput.value); j++) {
            let cell = document.createElement('td');
            cell.id = `cell${count}`;
            count++;
            cell.textContent = `${count-1}`;
            row.appendChild(cell);
        }
    }
})