const form = document.querySelector('[data-js="new-question-form"]');
const main = form.parentElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  addNewQuestionCard(formData);
  //   event.target.reset();
  event.target.elements[0].focus();
});

function addNewQuestionCard(formData) {
  const data = Object.fromEntries(formData);
  const questionCardComponent = createQuestionCardComponent(data);

  main.append(questionCardComponent);
}

function createQuestionCardComponent(data) {
  const questionCardElement = document.createElement("section");
  const imageWrapperElement = document.createElement("div");
  const bookmarkElement = document.createElement("img");
  const questionElement = document.createElement("p");
  const buttonElement = document.createElement("button");
  const answerElement = document.createElement("p");
  const tagListElement = document.createElement("ul");
  const tagItemElement = document.createElement("li");

  questionCardElement.classList.add("question-card", "section-sizing");
  imageWrapperElement.classList.add("question-card__image-wrapper");

  bookmarkElement.classList.add("question-card__bookmark");
  bookmarkElement.setAttribute("data-js", "bookmark");

  questionElement.classList.add("question-card__question");
  questionElement.textContent = data["question-input"];

  buttonElement.classList.add("question-card__button", "show-answer-button");
  buttonElement.type = "button";
  buttonElement.setAttribute("data-js", "answer-button");
  buttonElement.textContent = "Show Answer";

  answerElement.classList.add("question-card__answer", "--display--none");
  answerElement.setAttribute("data-js", "answer");
  answerElement.textContent = data["answer-input"];

  tagListElement.classList.add("question-card__tag-container");
  tagItemElement.classList.add("question-card__tag");
  tagItemElement.textContent = "#" + data["tag-input"];

  questionCardElement.append(imageWrapperElement);
  imageWrapperElement.append(bookmarkElement);
  questionCardElement.append(questionElement);
  questionCardElement.append(buttonElement);
  questionCardElement.append(answerElement);
  questionCardElement.append(tagListElement);
  tagListElement.append(tagItemElement);

  return questionCardElement;
}
