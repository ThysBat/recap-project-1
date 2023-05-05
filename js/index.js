const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

/* Toggle bookmark icon */
for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", (event) => {
    bookmark.classList.toggle("--bookmarked");
  });
}

/* Toggle answer */
answerButton.addEventListener("click", (event) => {
  const parent = answerButton.parentElement;
  const answer = parent.querySelector('[data-js="answer"]');

  answer.classList.toggle("--hidden");

  if (answer.classList.contains("--hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
