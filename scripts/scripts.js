/*//----------------------------------------// DROPDOWN NAV //----------------------------------------//*/
function myFunction(x) {
  x.classList.toggle("change");
}

function toogleSlideMenu(x) {
  if (x.classList.contains('change')) {
    document.getElementById("mySidenav").style.height = "27%";
    document.body.classList.toggle('lock-scroll');
  }

  else {
    document.getElementById("mySidenav").style.height = "0%";
    document.body.classList.remove('lock-scroll');
  }
}

/*//----------------------------------------// COMMENTS-SLIDER //----------------------------------------//*/
const slider = document.querySelector('.comments-slider');
const cards = document.querySelector('.comments-gallery');
let isPressed = false;
let cursorX;

slider.addEventListener("mousedown", (e) => {
  isPressed = true;
  cursorX = e.offsetX - cards.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorX}px`;
});

window.addEventListener("mouseup", () => {
  isPressed = false;
});

function boundSlides() {
  const containerRect = slider.getBoundingClientRect();
  const cardsRect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cardsRect.right < containerRect.right) {
    cards.style.left = `-${cardsRect.width - containerRect.width}px`;
  }
}

slider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorX}px`;
  boundSlides();
});