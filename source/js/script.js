let navMain = document.querySelector(".header__navigation");
let navToggle = document.querySelector(".header__navigation-toggle");

navMain.classList.remove("header__navigation--nojs");
navToggle.classList.remove("header__navigation-toggle--nojs");


navToggle.addEventListener('click', function () {
  if(navMain.classList.contains("header__navigation--closed")){
    navMain.classList.remove("header__navigation--closed");
    navMain.classList.add("header__navigation--opened");
  } else {
    navMain.classList.add("header__navigation--closed");
    navMain.classList.remove("header__navigation--opened");
  }
  navToggle.classList.toggle("header__navigation-toggle--open");
});
