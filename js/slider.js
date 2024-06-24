const slider = document.querySelector(".review__slider");
const prevBtn = document.querySelector(".review__slider-button--prev");
const nextBtn = document.querySelector(".review__slider-button--next");
const cards = Array.from(document.querySelectorAll(".review__card"));

let counter = 0; // счетчик индекса массива карточек
document.addEventListener("DOMContentLoaded", showCard(0));
prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);

function nextCard() {
  if (counter === cards.length - 1) {
    hideCard(counter);
    counter = 0;
    showCard(counter);
  } else {
    hideCard(counter);
    counter += 1;
    showCard(counter);
  }
}
function prevCard() {
  if (counter === 0) {
    hideCard(counter);
    counter = cards.length - 1;
  }
  hideCard(counter);
  counter -= 1;
  showCard(counter);
}

function showCard(counter) {
  cards[counter].style.width = "100%";
  console.log(counter);
}

function hideCard(counter) {
  cards[counter].style.width = "0%";
}
