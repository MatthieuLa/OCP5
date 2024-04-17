const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const img = document.querySelector(".banner-img");
const paragraph = document.querySelector("#banner p");

let index = 0;

// Events

arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateSlide();
  console.log(index);
  updateDots();
});

arrowRight.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateSlide();
  console.log(index);
  updateDots();
});

// Fonctions

function updateSlide() {
  img.src = `./assets/images/slideshow/${slides[index].image}`;
  paragraph.innerHTML = slides[index].tagLine;
}

function updateDots() {
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add("dot_selected"); // Ajoute la classe 'dot_selected' au dot correspondant à l'index actuel
    } else {
      dot.classList.remove("dot_selected"); // Supprime la classe 'dot_selected' des autres dots
    }
  });
}
