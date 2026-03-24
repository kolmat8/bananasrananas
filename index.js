const banana = document.getElementById("banana");
const clickCounter = document.getElementById("clickCounter");

let bananaClicked = 0;

banana.addEventListener("click", () => {
    bananaClicked++;
    clickCounter.innerHTML = "you have clicked the banana " + bananaClicked + " times";
});