// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

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

// DARK MODE
// Lấy ra button và body của trang
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

// Sử dụng event listener để nghe sự kiện click vào button
darkModeBtn.addEventListener('click', function() {
  // Toggle class 'dark-mode' cho body
  body.classList.toggle('dark-mode');
});