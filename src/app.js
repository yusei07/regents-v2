// smooth scroll

function init() {
  new SmoothScroll(document, 50, 5);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

window.addEventListener("DOMContentLoaded", init);


// type effect on hero span

const hero_type = new Typed("#type-effect", {
  strings: ["Future Leaders", "Dreamers", "World Changers"],
  typeSpeed: 70,
  backSpeed: 35,
  startDelay: 500,
  backDelay: 2000,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  loop: true
})

hero_type.start()


// swiper slide

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centerSlide: true,
  loop: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // when window width >= 600px
  breakpoints: {
    600: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})



// anime/reveal on scroll



// show/hide menu

// issue : in dev tool using the toggle open/close, when going back to the normal screen
// size it will not show the nav-menu bascially it acts as if it was 1024px meaning it still applies the media query

const menu = document.querySelector(".nav-menu")
const menuOpenBtn = document.querySelector("#open-menu-btn")
const menuCloseBtn = document.querySelector("#close-menu-btn")


menuOpenBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  menu.style.visibility = 'visible';
  menuCloseBtn.style.display = 'inline-block';
  menuOpenBtn.style.display = 'none';
})

const closeNav = () => {
  menu.style.display = 'none';
  menuCloseBtn.style.display = 'none';
  menuOpenBtn.style.display = 'inline-block';
}

menuCloseBtn.addEventListener('click', closeNav)

