const body = document.querySelector("body");

const IMG_NUM = 10;

function printBackground(num) {
  const img = new Image();
  img.src = `img/${num + 1}.jpg`;
  img.classList.add("js-bgImage");
  body.prepend(img);
}

function getRandomNum() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const imgNum = getRandomNum();
  printBackground(imgNum);
}

init();
