var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var stopButton = document.querySelector("#stop");
var displayExample = document.querySelector("#display-example");

// get items from local storage
var displaySeconds = localStorage.getItem("secondsLeft");
displayExample.textContent = displaySeconds;

var secondsLeft = 10;
var timerInterval;
function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
stopButton.addEventListener("click", function() {
  clearInterval(timerInterval);
  displayExample.setAttribute("style", "display: none");
  localStorage.setItem("secondsLeft", secondsLeft);
})
