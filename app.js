const scoreNumberElements = document.querySelectorAll("ol li");
const submitButtonElement = document.querySelector("button");
const selectedScoreElement = document.getElementById("selected-score");

let score;

function highlightScore(event) {
  event.target.classList.add("highlighted");

  for (const scoreNumberElement of scoreNumberElements) {
    if (scoreNumberElement !== event.target) {
      scoreNumberElement.classList.remove("highlighted");
    }
  }

  score = +event.target.textContent;
}

function submitRating() {
  const mainPage = document.getElementById("main-content");
  const thankYouPage = document.getElementById("thank-you-content");

  mainPage.style.display = "none";

  selectedScoreElement.textContent = score;
  thankYouPage.style.display = "block";
}

for (const scoreNumberElement of scoreNumberElements) {
  scoreNumberElement.addEventListener("click", highlightScore);
}

submitButtonElement.addEventListener("click", submitRating);
