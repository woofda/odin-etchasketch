let area = document.querySelector('.container');

// Creates single square element
function createSquare() {
    const newSquare = document.createElement('div');
    newSquare.style.border = "1px solid black";
    newSquare.style.flex = "1";
    newSquare.addEventListener('mouseover', () => {
        newSquare.style.backgroundColor = "#5f5f5f";
    })

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

// Fills container with filled row elements
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