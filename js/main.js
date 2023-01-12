const burgerMenu = document.querySelector(".burger__menu");
const burgerList = document.querySelector(".burger__list");
const burgerCloseBtn = document.querySelector(".burger__close");
const photoBlock = document.querySelector(".photo");
const body = document.querySelector("#body");

const stopScroll = "remove-scroll";
const burgerListVisible = "burger__list_visible";
const burgerCloseBtnVisible =  "burger__close_visible";
const photoNonClickable = "photo_non-click";

const toggleMenu = function () {
  burgerList.classList.toggle(burgerListVisible);
  burgerCloseBtn.classList.toggle(burgerCloseBtnVisible);
  photoBlock.classList.toggle(photoNonClickable);
  body.classList.toggle(stopScroll);
}

burgerMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const itsBurgerList = target == burgerList || burgerList.contains(target);
  const itsBurgerMenu = target == burgerMenu;
  const isBurgerListActive = burgerList.classList.contains("burger__list_visible");

  if (!itsBurgerList && !itsBurgerMenu && isBurgerListActive) {
    toggleMenu();
  }
});

function closeMenu() {
  burgerList.classList.remove(burgerListVisible);
  burgerCloseBtn.classList.remove(burgerCloseBtnVisible);
  photoBlock.classList.remove(photoNonClickable);
  body.classList.remove(stopScroll);
}
