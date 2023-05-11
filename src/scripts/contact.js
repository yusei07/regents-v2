const webLink = encodeURI(window.location.href);
const phoneNum = "6281909000033"
const msg = encodeURIComponent('Hellow Regents School !!');
// const title = encodeURIComponent('Title Here');

// const fb = document.querySelector('.facebook');
// fb.href = `https://www.facebook.com/share.php?u=${weblink}`;

// const twitter = document.querySelector('.twitter');
// twitter.href = `http://twitter.com/share?&url=${weblink}&text=${msg}&hashtags=javascript,programming`;

// const linkedIn = document.querySelector('.linkedin');
// linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${weblink}`;

const whatsapp = document.querySelector('#whatsapp');
whatsapp.href = `https://wa.me/${phoneNum}/?text=${msg}`
// https://api.whatsapp.com/send/?phone=6281909000033&text&type=phone_number&app_absent=0
// whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${weblink}`;

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
