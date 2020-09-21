var incrementButton = document.querySelector("#increment");
var decrementButton = document.querySelector("#decrement");
var countId = document.querySelector("#count");
var count = 0;

decrementButton.addEventListener("click", function() {
        count--;
        displayCounde()
})

incrementButton.addEventListener("click", function() {
    count++;
    displayCounde()
})

function displayCounde () {
    countId.textContent = count;
}
