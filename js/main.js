const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const banner = document.getElementById("banner");
const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;
const background = document.getElementById("background");
const gameMade = document.getElementById("game-made");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

const toggleDarkMode = () => {
  body.classList.toggle("dark-mode");
};
darkModeBtn.addEventListener("click", toggleDarkMode);

//Scroll effect
let stopScroll = true;

const applyScroll = (_) => {
  if (background.style.visibility === "") {
    background.style.top = `${banner.getBoundingClientRect().height}px`;
    background.style.visibility = "visible";
  }

  if (stopScroll) {
    return;
  }
  let scroll = this.scrollY;
  background.style.top = `${scroll.toString()}px`;
};

window.onload = (e) => {
  background.style.transition = "all 1s ease-in-out";
};

window.onscroll = applyScroll;

let observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    stopScroll = e.isIntersecting;
  });
});

observer.observe(document.querySelector("#banner"));

// Description

const games = ["COD Warzone", "CSGO", "LOL"];
let current = 1;

gameMade.onanimationiteration = () => {
  gameMade.innerHTML = games[current++];
  if (current >= games.length) {
    current = 0;
  }
};

// Change AVATAR

const avatar = document.getElementById("avatar");
const inputAvatar = document.createElement("input");
inputAvatar.type = "file";

avatar.addEventListener("click", () => {
  inputAvatar.click();
});

inputAvatar.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const imageURL = URL.createObjectURL(file);
    avatar.src = imageURL;

    localStorage.setItem("avatarImage", imageURL);
  }
});

const savedAvatarImage = localStorage.getItem("avatarImage");
if (savedAvatarImage) {
  avatar.src = savedAvatarImage;
}
