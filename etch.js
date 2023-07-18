let area = document.querySelector('.container');

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
function createSquare() {
    const newSquare = document.createElement('div');
    newSquare.style.border = "1px solid black";
    newSquare.style.flex = "1";
    newSquare.addEventListener('mouseover', () => {
        gradedColoring(newSquare);
    });

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

function createGrid(sideLength) {
    for(let i = 0; i < sideLength; i++) {
        area.appendChild(createRow(sideLength));
    }
}

function clearGrid() {
    while(area.hasChildNodes()){
        area.removeChild(area.firstChild);
    }
}

createGrid(16);