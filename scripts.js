function createGrid(number) {
    const gridContainer = document.querySelector(".grid");
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }
}

function changeColor(event){
    event.target.style.backgroundColor = "black";
}

function resetGrid(){
    let num = prompt("Please enter grid size less than or equal to 100:");
    if (num === undefined || num === null || num === "") {
        return;
    }

    while (num > 100){
        num = prompt("Number too big! Please enter grid size less than or equal to 100:");
    }

    const gridContainer = document.querySelector(".grid");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(num);
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}

function clearGrid(){
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});