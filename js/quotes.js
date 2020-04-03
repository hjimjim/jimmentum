const quoteContainer = document.querySelector(".js-quote-container"),
  quoteText = quoteContainer.querySelector(".js-quote-text");

function getRandom(len) {
  const number = Math.floor(Math.random() * len);
  return number;
}

function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const quotes = data;
      quoteText.innerText = JSON.stringify(data[getRandom(quotes.length)].text);
    });
}

function init() {
  getQuote();
}

init();
