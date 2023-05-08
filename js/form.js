// fetch needed html elements
const form = document.querySelector('[data-js="new-question-form"]');
const main = form.parentElement;

// add event listener to the new question form submit button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // extract form data
  const formData = new FormData(event.target);
  addNewQuestionCard(formData);

  // reset the form and its focus
  event.target.reset();
  event.target.elements[0].focus();
});

// create and append the new question card
function addNewQuestionCard(formData) {
  const data = Object.fromEntries(formData);
  const questionCardComponent = createQuestionCardComponent(data);

  main.append(questionCardComponent);
}

// create the question card elements, attributes, classes and content
function createQuestionCardComponent(data) {
  // create html elements
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

  // set up bookmark element
  bookmarkElement.classList.add("question-card__bookmark");
  bookmarkElement.setAttribute("data-js", "bookmark");

  // set up question element
  questionElement.classList.add("question-card__question");
  questionElement.textContent = data["question-input"];

  // set up submit button element
  buttonElement.classList.add("question-card__button", "show-answer-button");
  buttonElement.type = "button";
  buttonElement.setAttribute("data-js", "answer-button");
  buttonElement.textContent = "Show Answer";

  // set up answer element
  answerElement.classList.add("question-card__answer", "--display--none");
  answerElement.setAttribute("data-js", "answer");
  answerElement.textContent = data["answer-input"];

  // set up tag element
  tagListElement.classList.add("question-card__tag-container");
  tagItemElement.classList.add("question-card__tag");
  tagItemElement.textContent = "#" + data["tag-input"];

  // append every element to its corresponding parent
  questionCardElement.append(imageWrapperElement);
  imageWrapperElement.append(bookmarkElement);
  questionCardElement.append(questionElement);
  questionCardElement.append(buttonElement);
  questionCardElement.append(answerElement);
  questionCardElement.append(tagListElement);
  tagListElement.append(tagItemElement);

  return questionCardElement;
}
