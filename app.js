const startStopBtn = document.querySelector(".start-stop");
const resetBtn = document.querySelector(".reset");

// hour hand, minutes hand and seconds hand
const hourHand = document.querySelector(".hrs");
const minuteHand = document.querySelector(".mins");
const secHand = document.querySelector(".secs");

// time variables 
let seconds = 0, minutes = 0, hours = 0;

// Adding leading zeros
let leadingSecs = 0, leadingMins = 0, leadingHrs = 0;
// window.setInterval(stopWatch, 1000);

// Control interval and time state
let intervalId = null;
let timerStatus = "stopped";

// Start and stop watch
startStopBtn.addEventListener("click", function(e) {
    if(timerStatus === "stopped") {
        intervalId = window.setInterval(stopWatch, 1000);
        startStopBtn.querySelector(".icon").innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        timerStatus = "started";
    } else {
        window.clearInterval(intervalId);
        startStopBtn.querySelector(".icon").innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        timerStatus = "stopped";
    }
})

// Reset watch
resetBtn.addEventListener("click", function() {
    window.clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;

    hourHand.textContent = "00";
    minuteHand.textContent = "00";
    secHand.textContent = "00";

    startStopBtn.querySelector(".icon").innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
})

// Stopwatch
function stopWatch() {
    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if(minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

    if (seconds < 10) {
        leadingSecs = "0" + seconds.toString();
    } else {
        leadingSecs = seconds;
    }
    if (minutes < 10) {
        leadingMins = "0" + minutes.toString();
    } else {
        leadingMins = minutes;
    }
    if (hours < 10) {
        leadingHrs = "0" + hours.toString();
    } else {
        leadingHrs = hours;
    }

    hourHand.textContent = leadingHrs;
    minuteHand.textContent = leadingMins;
    secHand.textContent = leadingSecs;

}









