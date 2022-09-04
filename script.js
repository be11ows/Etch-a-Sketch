let nextDimension;
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');

const btnDiv = document.createElement('div');
btnDiv.className = 'btnDiv';

const resizeBtn = document.createElement('button');
resizeBtn.textContent = 'Resize';
resizeBtn.className = 'resizeBtn';

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.className = 'clearBtn';

btnDiv.appendChild(resizeBtn);
btnDiv.appendChild(clearBtn);
navbar.appendChild(btnDiv);

let draw = false;

function makeGrid(num) {
    container.style.setProperty('--size', num)
    
    for(let i = 0; i < num * num; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            if(!draw) return;
            cell.style.backgroundColor = 'blue';
        });
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = 'blue';
        })
        container.appendChild(cell);
    }
};

window.addEventListener('mousedown', ()=>{
    draw = true;
});
window.addEventListener('mouseup', () => {
    draw = false;
})

clearBtn.addEventListener('click', () => {
    container.innerHTML = '';
    makeGrid(nextDimension);
});

resizeBtn.addEventListener('click', () => {
    nextDimension = prompt('What would you like the grid height and width to be?');
    if (nextDimension < 0 || nextDimension > 60) {
        alert('Type a number between 1-60.');
    }
    container.innerHTML = '';
    makeGrid(nextDimension);
});


makeGrid(nextDimension = 11);