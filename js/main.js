var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
//var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--open');
navMain.classList.add('main-nav--close');
//pageHeader.classList.add('page-header--closed');
//pageHeader.classList.remove('page-header--opened');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
    //pageHeader.classList.remove('page-header--closed');
    //pageHeader.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
    //pageHeader.classList.add('page-header--closed');
  }
});
