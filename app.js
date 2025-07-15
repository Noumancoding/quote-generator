// Quote logic will be implemented here
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote'); // ✅ keep only once

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  }
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = `– ${quote.author}`;
}

showRandomQuote();

newQuoteBtn.addEventListener('click', showRandomQuote);
