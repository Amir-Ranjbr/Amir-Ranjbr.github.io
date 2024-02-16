"use strict";
// Scroll
document
  .querySelector(".header__left-scroll")
  .addEventListener("click", function () {
    const scrollAmount = window.innerHeight;
    window.scroll({
      top: window.scrollY + scrollAmount,
      behavior: "smooth",
    });
  });

// Transiton
const elements = document.querySelectorAll(".main__projects");
const windowHeight = window.innerHeight;

function fadeInElementsOnScroll() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
      }, 300);
    } else {
      element.style.opacity = 0;
      element.style.transform = "translateX(-25rem)";
    }
  });
}
window.addEventListener("scroll", fadeInElementsOnScroll);

// Copyed
const copyButton = document.getElementById("copy-button");
const email = "am.ranjbr.ir@gmail.com";

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(email);
  copyButton.insertAdjacentHTML(
    "afterend",
    '<p class="copy-message">Copied!</p>'
  );

  setTimeout(() => {
    const copyMessage = document.querySelector(".copy-message");
    copyMessage.remove();
  }, 1000);
});
// Scroll Nav
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
// Scroll to top
let calcScrollValue = () => {
  const scrollTop = document.querySelector(".scrollTop");
  const scrollTopValue = document.querySelector(".scrollTop-value");
  const scrollTopPosition = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollGradientPercentage = (scrollTopPosition * 100) / calcHeight;
  scrollTop.style.display = scrollTopPosition > 100 ? "grid" : "none";
  scrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollTop.style.background = `conic-gradient(#126ffa ${scrollGradientPercentage}%, #d7d7d7 ${scrollGradientPercentage}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Menu Options
const menuBtn = document.querySelector(".menu-bars-btn");
const menu = document.querySelector(".menu-responsive");

// Open or close menu
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("visibility");
});

// Close menu in click
document
  .querySelector(".menu-times-btn")
  .addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.toggle("visibility");
  });

// Close menu without click
document.addEventListener("mousedown", function (event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove("active");
    menuBtn.classList.remove("visibility");
  }
});
