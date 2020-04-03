const dateForm = document.querySelector(".js-date"),
  dateText = document.querySelector(".js-date-text");

function printDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  dateText.innerText = `${month}월 ${day}일`;
}

function init() {
  printDate();
}

init();
