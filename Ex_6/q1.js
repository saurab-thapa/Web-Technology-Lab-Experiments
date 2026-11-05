document.getElementById("app").innerHTML = `
    <h2>Digital Clock!</h2>
    <span id="time"></span>
`;

function display() {
    var d = new Date();

    var h = String(d.getHours()).padStart(2, "0");
    var m = String(d.getMinutes()).padStart(2, "0");
    var s = String(d.getSeconds()).padStart(2, "0");

    document.getElementById("time").innerHTML =
        h + ":" + m + ":" + s;
}

display();
setInterval(display, 1000);
