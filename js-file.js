const container = document.querySelector("#container");

for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "height: 25px; width: 25px;");
    container.appendChild(div);
}
