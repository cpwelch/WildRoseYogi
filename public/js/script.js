let listItems = [...document.querySelectorAll("li")];
let animate = [...document.querySelectorAll(".animate")];

const infoBox = document.querySelectorAll(".infobox");
const infoBoxHeader = document.querySelectorAll(".headerBox");
const infoText = document.querySelectorAll(".infoBoxText");
const infoButtons = document.querySelectorAll(".book-btn");
const infoHeader = document.querySelectorAll(".infoboxHeader");

const toggleNav = document.querySelector(".toggle-button");
const navBar = document.querySelector(".nav-bar");
const bars = document.querySelectorAll(".bar");
const x = document.querySelector(".x");

const seeMore = document.querySelectorAll(".seeMore");
const addText = document.querySelectorAll(".addText");

// Scrolling Animattion
let options = {
  rootMargin: "-20%",
  threshold: 0.0,
};

const setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

let observer2 = new IntersectionObserver(setItemActive, options);

animate.forEach((item, idx) => {
  observer2.observe(item);
});

//InfoBox Animation
for (let i = 0; i < infoBox.length; i++) {
  infoBox[i].addEventListener("mouseenter", function () {
    infoBoxHeader[i].classList.add("infoBoxAnimation");
    infoHeader[i].classList.add("infoboxHeaderAnimation");

    setTimeout(function () {
      infoText[i].classList.remove("hidden");
      infoButtons[i].classList.remove("hidden");
    }, 600);
  });

  infoBox[i].addEventListener("mouseleave", function () {
    setTimeout(function () {
      infoBoxHeader[i].classList.remove("infoBoxAnimation");
      infoText[i].classList.add("hidden");
      infoButtons[i].classList.add("hidden");
      infoHeader[i].classList.remove("infoboxHeaderAnimation");
    }, 2000);
  });
}

//Navigation

toggleNav.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("hidden");
  }
  x.classList.toggle("hidden");
});

//See more section on yoga classes

for (let i = 0; i < seeMore.length; i++) {
  seeMore[i].addEventListener("click", function () {
    addText[i].classList.toggle("hidden");
  });
}
