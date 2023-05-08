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
