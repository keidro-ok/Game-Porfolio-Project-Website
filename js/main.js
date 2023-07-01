// Change AVATAR

const avatar = document.getElementById('avatar');
const inputAvatar = document.createElement('input');
inputAvatar.type = 'file';

avatar.addEventListener('click', () => {
  inputAvatar.click();
});

inputAvatar.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const imageURL = URL.createObjectURL(file);
    avatar.src = imageURL;

    // Lưu URL vào LocalStorage
    localStorage.setItem('avatarImage', imageURL);
  }
});

// Kiểm tra xem đã có ảnh đại diện trong LocalStorage hay không
const savedAvatarImage = localStorage.getItem('avatarImage');
if (savedAvatarImage) {
  // Hiển thị ảnh đại diện đã lưu
  avatar.src = savedAvatarImage;
}



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