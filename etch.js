// Form display functions
document.querySelector('.new-button').addEventListener('click', () => {
    document.querySelector('.new-form').style.display = 'block';
});

document.querySelector('.cancel').addEventListener('click', () => {
    document.querySelector('.new-form').style.display = 'none';
});

document.querySelector('.create').addEventListener('click', () => {
    clearGrid();

    let size = parseInt(document.querySelector('input[type=text]').value);
    if(isNaN(size)) {
        createGrid();
    } else if(size < 1) {
        createGrid(1);
    } else if(size > 100) {
        createGrid(100);
    } else {
        createGrid(size);
    }

    document.querySelector('.new-form').style.display = 'none';
});


// Coloring functions
let shades = [''];
for(let i = 255; i > 27; i -= 28) {
    shades.push(`rgb(${i}, ${i}, ${i})`);
}

function standardColoring(square) {
    square.style.backgroundColor = "#5f5f5f";
}

function randomColoring(square) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function gradedColoring(square) {
    let shade = shades.indexOf(square.style.backgroundColor);
    if(shade < 9) {
        square.style.backgroundColor = shades[shade + 1];
    }
}


// Grid creation functions
let area = document.querySelector('.container');

function createSquare() {
    const newSquare = document.createElement('div');

    if(document.querySelector('input[type=checkbox]:checked')) {
        newSquare.style.border = "1px solid black";
    }

    newSquare.style.flex = "1";

    if(document.querySelector('input[name=coloring]:checked').value === 'graded') {
        newSquare.addEventListener('mouseover', () => {
            gradedColoring(newSquare);
        });
    } else if(document.querySelector('input[name=coloring]:checked').value === 'random') {
        newSquare.addEventListener('mouseover', () => {
            randomColoring(newSquare);
        });
    } else {
        newSquare.addEventListener('mouseover', () => {
            standardColoring(newSquare);
        });
    }

    return newSquare;
}

function createRow(length) {
    const rowContainer = document.createElement('div');
    rowContainer.style.display = "flex";
    rowContainer.style.flex = "1";

    for(let i = 0; i < length; i++) {
        rowContainer.appendChild(createSquare());
    }
    
    return rowContainer;
}

function createGrid(sideLength = 16) {
    for(let i = 0; i < sideLength; i++) {
        area.appendChild(createRow(sideLength));
    }
}

function clearGrid() {
    while(area.hasChildNodes()){
        area.removeChild(area.firstChild);
    }
}


// Default grid initilization
createGrid();