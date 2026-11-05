
document.getElementById("app").innerHTML = `
    <h2>Dynamic Background</h2>
    <p>Background colour changes every 30 seconds.</p>
`;

function setBackgroundColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = color;
}

setBackgroundColor();
setInterval(setBackgroundColor, 30000);
