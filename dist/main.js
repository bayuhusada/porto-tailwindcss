const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
  humberger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden');
});

window.onscroll = function () {
  const nav = document.querySelector('header');
  const fix = nav.offsetTop;

  if (window.pageYOffset > fix) {
    nav.classList.add('navbar-fixed');
  } else {
    nav.classList.remove('navbar-fixed');
    bay.classList.remove('bayu');
  }
};
