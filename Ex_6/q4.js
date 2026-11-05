document.getElementById("app").innerHTML = `
    <h2>Move the Car</h2>

    <div id="track">
        <div id="car">🚗</div>
    </div>

    <button onclick="moveRight()">Move</button>
    <button onclick="stop()">Stop</button>
`;

let animate;
let position = 0;

function moveRight() {
    clearInterval(animate);

    animate = setInterval(() => {
        var car = document.getElementById("car");
        var track = document.getElementById("track");
        var maxPosition = Math.max(0, track.clientWidth - car.offsetWidth);
        position = Math.min(position + 2, maxPosition);
        car.style.left = position + "px";

        if (position >= maxPosition) {
            clearInterval(animate);
        }
    }, 10);
}

function stop() {
    clearInterval(animate);
    position = 0;
    document.getElementById("car").style.left = "0px";
}