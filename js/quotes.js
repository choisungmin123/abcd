/**
 * quotes.js
 */
const quotes = [
    {
      quote: "The word impossible is not in my dictionary.",
      author: "- Napoleon Bonaparte - ",
    },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

