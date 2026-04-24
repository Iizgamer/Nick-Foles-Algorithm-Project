const startBtn = document.getElementById('startBtn');
let xInput = document.getElementById('xInput');
let yInput = document.getElementById('yInput');
let grid = document.getElementById('grid');

xInput.value = 5;
yInput.value = 5;

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
    grid.innerHTML = '';
    let count = 1;

    for (i=1; i<=Number(yInput.value); i++) {
        let row = document.createElement('tr');
        row.id = `row${i}`;
        grid.appendChild(row);

        for (j=1; j<=Number(xInput.value); j++) {
            let cell = document.createElement('td');
            cell.id = `cell${count}`;
            count++;
            cell.textContent = `${count-1}`;
            row.appendChild(cell);
        }
    }

    let clickingCells = document.querySelectorAll('td');

    for (b=0; b<clickingCells.length;b++) {
        let cellBarrierIdentify = document.getElementById(`cell${b+1}`);
        cellBarrierIdentify.addEventListener('click', () => {
            if (cellBarrierIdentify.classList.contains('barrier')) {
                cellBarrierIdentify.classList.remove('barrier');
            } else {
                cellBarrierIdentify.classList.add('barrier');
            }
        })
    }

    for (g=0; g<clickingCells.length;g++) {
        let cellEndIdentify = document.getElementById(`cell${g+1}`);
        cellEndIdentify.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            function checkForEnd(cells) {
                for (v=0;v<cells.length;v++) {
                    if (cells[v].classList.contains('end')) {
                        return true, v;
                    }
                }
            }

            if (checkForEnd(clickingCells)) {
                clickingCells[v].classList.remove('end');
            }
            cellEndIdentify.classList.add('end');
        })
    }

    for (p=0; p<clickingCells.length; p++) {
        let cellStartIdentify = document.getElementById(`cell${p+1}`);
        cellStartIdentify.addEventListener('dblclick', () => {
            function checkForStart(cells) {
                for (v=0;v<cells.length;v++) {
                    if (cells[v].classList.contains('start')) {
                        return true, v;
                    }
                }
            }

            if (checkForStart(clickingCells)) {
                clickingCells[v].classList.remove('start');
            }
            cellStartIdentify.classList.add('start');
        })
    } 
})