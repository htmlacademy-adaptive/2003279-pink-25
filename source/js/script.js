let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let sliderToggle = document.querySelector('.slider__toggle');
let priceCurrent = document.querySelector('.price__table');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

sliderToggle.addEventListener('click', function() {
  if (sliderToggle.classList.contains('slider__toggle--current-01')) {
    priceCurrent.className('price__table');
    priceCurrent.classList.add('price__table--current-01');
  } else if (sliderToggle.classList.contains('slider__toggle--current-02')) {
    priceCurrent.className('price__table');
    priceCurrent.classList.add('price__table--current-02');
  } else if (sliderToggle.classList.contains('slider__toggle--current-03')) {
    priceCurrent.className('price__table');
    priceCurrent.classList.add('price__table--current-03');
  }
});
