const quotes = [
  {
    quote: "There's no place like home.",
    author: "The Wizard of Oz",
  },
  {
    quote: "Carpe Diem, Seize the day. Make your lives extraordinary.",
    author: "Dead Poets Society",
  },
  {
    quote: "Good words, good thoughts and good deeds.",
    author: "Bohemian Rhapsody",
  },
  {
    quote: "When the Lord closes a door, somewhere he opens a window.",
    author: "The sound of music",
  },
  {
    quote: "The purpose of education is to learn to think for yourself.",
    author: "Dead Poets Society",
  },
  {
    quote: "Life is like a box of chocolates, you never know what you're gonna get.",
    author: "Forrest Gump",
  },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
