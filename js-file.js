const editbutton = document.querySelector("#sizebutton");
const clearbutton = document.querySelector("#clearbutton");
const container = document.querySelector("#container");

// const radios = document.querySelectorAll("input[name='brush']");

let size = 16;
generateGrid(size);

editbutton.onclick = () => {
    do {
        size = prompt("Enter new grid size: ", "16");
        if(size > 64) {
            alert("Size must be less than 65");
        }
    } while(size > 64)
    deleteGrid();
    generateGrid(size);
}

clearbutton.onclick = () => {
    deleteGrid();
    generateGrid(size);
}

function deleteGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateGrid(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, minmax(auto, auto));`;
    for(let i = 0; i < (size*size); i++) {
        const div = document.createElement("div");
        div.setAttribute("style", "max-height: 100%; max-width: 100%;");
        div.onmouseover = () => div.style.backgroundColor = "white";
        container.appendChild(div);
    }
}

function colorize() {

}



