const mainEntry = document.getElementById("main-entry");
const rotatingCd = document.querySelector(".rotating-cd");
const backgroundMusic = document.getElementById("background-music");

document.addEventListener("DOMContentLoaded", function () {
  backgroundMusic.muted = false;
  backgroundMusic.play().catch((error) => {
    console.log("Autoplay blocked. Music will require interaction.");
  });
});

if (rotatingCd) {
  rotatingCd.addEventListener("click", () => {
    if (rotatingCd.style.animationPlayState === "paused") {
      rotatingCd.style.animationPlayState = "running";
      backgroundMusic.play();
    } else {
      rotatingCd.style.animationPlayState = "paused";
      backgroundMusic.pause();
    }
  });
}

mainEntry.addEventListener("click", () => {
  mainEntry.style.color = "black";
  mainEntry.style.backgroundColor = "white";
  mainEntry.style.border = "2px solid black";
  mainEntry.innerHTML = "Entering...";

  setTimeout(() => {
    window.location.href = "entry1.html";
  }, 1000);
});

const entries = document.querySelectorAll(".entry");
entries.forEach((entry) => {
  entry.addEventListener("click", () => {
    console.log(`You clicked on: ${entry.textContent}`);
    entry.style.color = "gray";
  });
});
