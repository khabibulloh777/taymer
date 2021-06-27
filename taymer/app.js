const timer = document.getElementById("timer"),
  playBtn = document.querySelector(".play__btn"),
  resetBtn = document.querySelector(".reset__btn");

let icon = document.querySelector(".timer__controls i");
let secCircle = document.querySelector(".sec__circle");

let hr = 0;
let min = 0;
let sec = 0;

let stopTime = true;

playBtn.addEventListener("click", playpauseTime);
resetBtn.addEventListener("click", resetTime);

function playpauseTime() {
  if (stopTime) {
    stopTime = false;
    timeCircle();
    icon.setAttribute("class", "fa fa-2x fa-pause");
  } else {
    stopTime = true;
    icon.setAttribute("class", "fa fa-2x fa-play");
  }
}

function resetTime() {
  timer.innerHTML = "00:00:00";
  hr = 0;
  sec = 0;
  min = 0;
  stopTime = true;
  icon.setAttribute("class", "fa fa-2x fa-play");
}

setInterval(() => {
  secCircle.style.transform = `rotate(${6 * sec}deg)`;
}, 1000);

function timeCircle() {
  if (!stopTime) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
      if (min === 60) {
        hr += 1;
        min = 0;
      }
    }
    if (sec < 0 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 0 || min == 0) {
      min = "0" + min;
    }
    if (hr < 0 || hr == 0) {
      hr = "0" + hr;
    }
    timer.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("timeCircle()", 1000);
  }
}
