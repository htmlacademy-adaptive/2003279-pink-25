let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let btn1 = document.querySelector('#button1');
let btn2 = document.querySelector('#button2');
let btn3 = document.querySelector('#button3');
let priceCurrent = document.querySelector('#price');

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

btn1.addEventListener('click', function() {
  priceCurrent.className = 'price__table';
  priceCurrent.classList.add('price__table--current-01');
  btn1.classList.add('slider__toggle--current');
  btn2.classList.remove('slider__toggle--current');
  btn3.classList.remove('slider__toggle--current');
});

btn2.addEventListener('click', function() {
  priceCurrent.className = 'price__table';
  priceCurrent.classList.add('price__table--current-02');
  btn2.classList.add('slider__toggle--current');
  btn1.classList.remove('slider__toggle--current');
  btn3.classList.remove('slider__toggle--current');
});

btn3.addEventListener('click', function() {
  priceCurrent.className = 'price__table';
  priceCurrent.classList.add('price__table--current-03');
  btn3.classList.add('slider__toggle--current');
  btn2.classList.remove('slider__toggle--current');
  btn1.classList.remove('slider__toggle--current');
});
