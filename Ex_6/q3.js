document.getElementById("app").innerHTML = `
    <h2>Change Font Size!</h2>
    <p id="para1"
       onmouseover="incSize()"
       onmouseout="decSize()">
       Move cursor over me to zoom in...
    </p>
`;

function incSize() {
    document.getElementById("para1").style.fontSize = "28px";
}

function decSize() {
    document.getElementById("para1").style.fontSize = "16px";
}