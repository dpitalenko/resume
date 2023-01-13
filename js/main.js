const burgerMenu = document.querySelector(".burger__menu");
const burgerList = document.querySelector(".burger__list");
const burgerListLinks = document.querySelectorAll(".burger__list .burger__link");
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

burgerListLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });
})

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

let photoIndex = 1;
showNext(photoIndex);

function arrowNext(n) {
  photoIndex += n;
  showNext(photoIndex);
}

function currentPhoto(n) {
  photoIndex = n;
  showNext(photoIndex);
}

function showNext(n) {
  let i;
  let photos = document.getElementsByClassName("photo__item");
  let dots = document.getElementsByClassName("dot__item");

  if (n > photos.length) {
    photoIndex = 1;
  }

  if (n < 1) {
    photoIndex = photos.length;
  }

  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot__item_active", "");
  }

  photos[photoIndex-1].style.display = "block";
  photos[photoIndex-1].classList.add("fade");
  dots[photoIndex-1].className += " dot__item_active";
}