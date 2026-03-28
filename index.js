const banana = document.getElementById("banana");
const clickCounter = document.getElementById("clickCounter");
var scream = new Audio('hl2-stalker-scream.mp3');

let bananaClicked = 0;

scream.play().then(() => {
    scream.pause();
    scream.currentTime = 0;
}).catch(() => {});

function trog() {
    if (bananaClicked == 67) {
        scream.play()
    }
}

banana.addEventListener("click", () => {
    bananaClicked++;
    clickCounter.innerHTML = "you have clicked the banana " + bananaClicked + " times";
    if (bananaClicked == 67) {
        setTimeout(trog, 6700)
    }
});
