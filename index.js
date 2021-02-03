import PrintContent from "/src/js/PrintContent.js";
const api = "/src/js/API.json";

const printContent = new PrintContent();
const menuBurger = document.querySelector(".header__menu");
const menuLinks = document.querySelector(".header");
const heroText = document.querySelector(".hero__copy");

fetch(api)
  .then((response) => response.json())
  .then((data) => printContent.fetchData(data))
  .catch((error) => console.log(error));

menuBurger.addEventListener("click", showSubMenu);

function showSubMenu() {
  if (menuLinks.className === "header") {
    menuLinks.className += " responsive";
    heroText.style.display = "none";
    document.body.style.overflow = "hidden";
  } else {
    menuLinks.className = "header";
    heroText.style.display = "inline";
    document.body.style.overflow = "scroll-y";
  }
}

window.onresize = () => {
  if (screen.width > 992) {
    menuLinks.className = "header";
    heroText.style.display = "inline";
    document.body.style.overflow = "scroll-y";
  }
};
