let area = document.querySelector('.container');

// Creates single square element
function createSquare() {
    const newSquare = document.createElement('div');
    newSquare.style.border = "2px solid #5f5f5f";
    newSquare.style.flex = "1";
    return newSquare;
}

// Creates row container filled with square elements
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

createGrid(16);