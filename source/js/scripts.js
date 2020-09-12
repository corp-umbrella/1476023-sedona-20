var navMainList = document.querySelector('.main-nav__wrapper');
var navToggle = document.querySelector('.main-nav__button');
var navToggleCross = document.querySelector('.main-nav__icon-cross');
var navToggleMenu = document.querySelector('.main-nav__icon-menu');
var modalFailure = document.querySelector('.modal-failure');
var modalSuccess = document.querySelector('.modal-success');
var modalFailureButton = document.querySelector('.modal__button--failure')
var modalSuccessButton = document.querySelector('.modal__button--success')

navToggle.classList.remove('main-nav__button--nojs');
navMainList.classList.remove('.main-nav__wrapper--closed');

navToggle.addEventListener('click', function() {
  if (navToggle) {
    if (navToggleCross.classList.contains('main-nav__icon-cross--active')) {
      navToggleCross.classList.remove('main-nav__icon-cross--active');
      navToggleMenu.classList.add('main-nav__icon-menu--active');
      navMainList.classList.add('main-nav__wrapper--closed');
    } else {
        navToggleCross.classList.add('main-nav__icon-cross--active');
        navToggleMenu.classList.remove('main-nav__icon-menu--active');
        navMainList.classList.remove('main-nav__wrapper--closed');
      }
  }
});

modalFailureButton.addEventListener('click', function () {
  if (modalFailureButton) {
    if (modalFailure.classList.contains("modal-failure--open")) {
    modalFailure.classList.remove("modal-failure--open")
  }
}
});

modalSuccessButton.addEventListener('click', function () {
  if (modalSuccessButton) {
    if (modalSuccess.classList.contains("modal-success--open")) {
      console.log ("111")
    modalSuccess.classList.remove("modal-success--open")
  }
}
});
