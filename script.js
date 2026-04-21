const startBtn = document.getElementById('startBtn');
let xInput = document.getElementById('xInput');
let yInput = document.getElementById('yInput');

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
    console.log('yInput.value')
})