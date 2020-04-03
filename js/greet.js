const greetContainer = document.querySelector(".js-greet-container"),
  greetForm = greetContainer.querySelector("form"),
  greetInput = greetContainer.querySelector("input"),
  greetText = greetContainer.querySelector("h1");

const USER_NAME = "currentUser";
const VISIBLE_CN = "visible";

function saveName(name) {
  localStorage.setItem(USER_NAME, `${name}`);
  printGreeting(name);
}

function handleSummit() {
  event.preventDefault();
  const name = greetInput.value;
  saveName(name);
}

function askUserName() {
  greetForm.classList.add(VISIBLE_CN);
  greetForm.addEventListener("submit", handleSummit);
}

function printGreeting(name) {
  greetForm.classList.remove(VISIBLE_CN);
  greetText.classList.add(VISIBLE_CN);
  greetText.innerText = `Have a nice day ${name}!!!`;
}

function loadName() {
  const name = localStorage.getItem(USER_NAME);
  if (name === null) {
    //no user name
    askUserName();
  } else {
    // remove input and add greeting
    printGreeting(name);
  }
}

function init() {
  loadName();
}

init();
