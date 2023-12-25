const buttons = Array.from(document.querySelectorAll(".button"));
const buttonArrow = Array.from(document.querySelectorAll(".button__arrow"));
const buttonArrowYellow = Array.from(document.querySelectorAll(".button__arrow_y"));

const buttonContent = Array.from(document.querySelectorAll(".button__content"));
const footerLink = Array.from(document.querySelectorAll(".footer-link"));
const imageContainer = Array.from(document.querySelectorAll(".card__image__container"));
const cardHover = Array.from(document.querySelectorAll(".card__hover"));
const cardLink = Array.from(document.querySelectorAll(".card__link"));

const cardsContainer = document.querySelector(".cards__container");
const merchCards = document.querySelector(".merch__cards");

buttons.forEach((button, index) => {
  if (window.innerWidth < 1000) {
    return;
  }
  button.addEventListener("mouseenter", () => {
    buttonArrow[index].classList.add("invisible");
    buttonArrowYellow[index].classList.remove("invisible");
  });
  button.addEventListener("mouseleave", () => {
    buttonArrow[index].classList.remove("invisible");
    buttonArrowYellow[index].classList.add("invisible");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.scale = "0.99";
  });
  button.addEventListener("mouseup", () => {
    button.style.scale = "1";
  });
});

footerLink.forEach((link) => {
  if (window.innerWidth < 1000) {
    return;
  }
  link.addEventListener("mouseenter", () => {
    let hover = document.createElement("div");
    hover.classList.add("link__hover");
    link.append(hover);
  });
  link.addEventListener("mouseleave", () => {
    document.querySelector(".link__hover").remove();
  });
});

let scale = null;

imageContainer.forEach((container, index) => {
  if (window.innerWidth < 1000) {
    return;
  }

  container.addEventListener("mouseenter", () => {
    container.firstChild.nextSibling.style.scale = `${scale}`;
    container.firstChild.nextSibling.style.opacity = "0.75";
    cardHover[index].classList.remove("invisible");
  });

  container.addEventListener("mouseleave", () => {
    container.firstChild.nextSibling.style.scale = "";
    container.firstChild.nextSibling.style.opacity = "1";
    cardHover[index].classList.add("invisible");
  });
});

cardLink.forEach((link) => {
  if (window.innerWidth < 1000) {
    return;
  }
  link.addEventListener("mouseenter", () => {
    link.firstChild.nextSibling.src = "images/merch-arrow-square_hover.svg";
  });
  link.addEventListener("mouseleave", () => {
    link.firstChild.nextSibling.src = "images/merch-arrow-square.svg";
  });
});

let slides = Array.from(document.querySelectorAll(".swiper-slide"));
slides[0].classList.add("first-slide");
slides[slides.length - 1].classList.add("last-slide");

let cards = Array.from(document.querySelectorAll(".cards__card"));
cards[0].classList.add("first-card");
cards[cards.length - 1].classList.add("last-card");

changeFooterNetworkIcons();

function changeFooterNetworkIcons() {
  if (window.innerWidth < 481) {
    document.querySelector(".footer__networks").innerHTML = `
      <div class="footer-link">
      <a href="https://www.youtube.com/@pleasantildar" target="_blank" 
      ><img class="footer-link__icon" src="images/icons-header/v.2/Youtube.svg" alt="Youtube"
    /></a></div>
    <div class="footer-link">
    <a href="https://www.twitch.tv/ildarzhe" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="images/icons-header/v.2/Twitch.svg" alt="Twitch"
  /></a></div>
    <div class="footer-link">
    <a href="https://www.t.me/unpleasent" target="_blank" class="footer-link">
    <img class="footer-link__icon"src="images/icons-header/v.2/Telegram.svg" alt="Telegram" />
  </a></div>
    <div class="footer-link">
    <a href="https://www.instagram.com/masterildar" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="images/icons-header/v.2/Instagram.svg" alt="Instagram"
  /></a></div>
    <div class="footer-link">
    <a href="https://www.twitter.com/master_ildar" target="_blank" class="footer-link"
    ><img class="footer-link__icon"src="images/icons-header/v.2/Twitter.svg" alt="Twitter"
  /></a></div>
    <div class="footer-link">
    <a href="https://vk.com/pleasentildar" target="_blank" class="footer-link">
    <img class="footer-link__icon"src="images/icons-header/v.2/VK.svg" alt="VK" />
  </a></div>`;
  }
}

new Swiper(".swiper", {
  touchRatio: 1,
  grabCursor: true,
  slidesPerView: "auto",
  freeMode: true,
  speed: 800,
});
