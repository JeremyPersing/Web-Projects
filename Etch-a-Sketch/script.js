const container = document.getElementById("container");

function makeRows(num) {
    container.style.background = "#95a3a1"
    container.style.border = "1px solid black"
    let str = ""
    for(let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            let div = document.createElement('div');
            div.className = "grid-item";
            div.style.height = 800/num + "px";
            div.style.width = 800/num + "px";
            container.appendChild(div);
            div.onmouseover = function() {
                div.style.background = "black";
            }
        }
        str += " auto";
    }
    container.style.gridTemplateColumns = str;
};


function submit() {
    let area = document.getElementById("areaField").value;
    makeRows(area);
    document.getElementById("text").style.display = "none";
    document.getElementById("areaField").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("info").innerHTML = "<button onclick='refresh()'>Start Over</button>"
}

function refresh() {
    window.location.reload(false);
}


