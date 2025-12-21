let startTime;
let elapsedTime = 0;
let timerInterval;

// Convert time to string format (MM:SS:CC)
function timeToString(time) {
    let diffInMin = time / 60000;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 10);
    toggleButtons(true);
}

function stop() {
    clearInterval(timerInterval);
    toggleButtons(false);
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("lapsList").innerHTML = "";
    toggleButtons(false);
}

function lap() {
    let li = document.createElement("li");
    let count = document.querySelectorAll('#lapsList li').length + 1;
    li.innerHTML = `<span>Lap ${count}</span> <span>${timeToString(elapsedTime)}</span>`;
    document.getElementById("lapsList").prepend(li);
}

function toggleButtons(isRunning) {
    document.getElementById("startBtn").disabled = isRunning;
}