const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

// register and login switching
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

// slider
function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// mobile navbar

const menu = document.querySelector(".nav-menu")
const menuOpenBtn = document.querySelector("#open-menu-btn")
const menuCloseBtn = document.querySelector("#close-menu-btn")
const menuSignIn = document.querySelector("#menu-login")

menuOpenBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  menu.style.visibility = 'visible';

  menuSignIn.style.display = 'inline-block';
  menuSignIn.style.visibility = 'visible';

  menuCloseBtn.style.display = 'inline-block';
  menuCloseBtn.style.visiblity = 'visible';
  menuOpenBtn.style.display = 'none';
})

const closeNav = () => {
  menu.style.display = 'none';
  menu.style.visibility = 'hidden';

  menuSignIn.style.display = 'none';
  menuSignIn.style.visibility = 'visible';

  menuCloseBtn.style.display = 'none';
  menuOpenBtn.style.display = 'inline-block';
}

menuCloseBtn.addEventListener('click', closeNav)
