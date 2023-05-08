// fetch needed html elements
const form = document.querySelector('[data-js="new-question-form"]');
const main = form.parentElement;
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const answerTextCounter = document.querySelector(
  '[data-js="answer-text-counter"]'
);
const questionTextCounter = document.querySelector(
  '[data-js="question-text-counter"]'
);

// set up text counter content
const textCounterText = " characters left";
resetTextCounter();

// add event listener to the question input
questionInput.addEventListener("input", (event) => {
  // call the updateTextCounter function with the questionTextCounter element and the return value from the calculateTextCounter function
  updateTextCounter(
    questionTextCounter,
    calculateTextCounter(event.target.value.length, event.target.maxLength)
  );
});

// add event listener to the answer input
answerInput.addEventListener("input", (event) => {
  // call the updateTextCounter function with the answerTextCounter element and the return value from the calculateTextCounter function
  updateTextCounter(
    answerTextCounter,
    calculateTextCounter(event.target.value.length, event.target.maxLength)
  );
});

// add event listener to the new question form submit button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // extract form data
  const formData = new FormData(event.target);
  addNewQuestionCard(formData);

  // reset the form and its focus
  event.target.reset();
  event.target.elements[0].focus();
  resetTextCounter();
});

function updateTextCounter(element, number) {
  element.textContent = `${number} characters left`;
}

function calculateTextCounter(inputLength, maxLength) {
  return maxLength - inputLength;
}

function resetTextCounter() {
  answerTextCounter.textContent = answerInput.maxLength + textCounterText;
  questionTextCounter.textContent = questionInput.maxLength + textCounterText;
}

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
