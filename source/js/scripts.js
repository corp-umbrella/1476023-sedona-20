var navMainList = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__button");
var navToggleCross = document.querySelector(".main-nav__icon-cross");
var navToggleMenu = document.querySelector(".main-nav__icon-menu");
var modalFailure = document.querySelector(".modal-failure");
var modalSuccess = document.querySelector(".modal-success");
var modalFailureButton = document.querySelector(".modal__button--failure");
var modalSuccessButton = document.querySelector(".modal__button--success");

navMainList.classList.remove('.main-nav__wrapper--open');

(() => {
  const menuButton = document.querySelector(".main-nav__button");
  const menuList = document.querySelector(".main-nav__wrapper");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("main-nav__button--open");
    menuList.classList.toggle("main-nav__wrapper--open");
  });
})();

if (modalFailureButton) {
  modalFailureButton.addEventListener("click", function () {
    if (modalFailureButton) {
      if (modalFailure.classList.contains("modal-failure--open")) {
        modalFailure.classList.remove("modal-failure--open");
      }
    }
  });
}

if (modalSuccessButton) {
  modalSuccessButton.addEventListener("click", function () {
    if (modalSuccessButton) {
      if (modalSuccess.classList.contains("modal-success--open")) {
        console.log("111");
        modalSuccess.classList.remove("modal-success--open");
      }
    }
  });
}
