const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoading() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// let apiQuotes = [];

// Shhow new quote
// function newQuote() {
//     // Pick a random quote from 
//    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
//     if (!quote.author) {
//         authorText.textContent = 'Unkown';
//     } else {
//         authorText.textContent = quote.author;
//     }

//     if (quote.text.lenth > 50) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }
//     quoteText.textContent = quote.text;
// }

// Get Quote from API
/*async function getQuote() {
    showLoading();
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://type.fit/api/quotes/';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
       
        
        removeLoading();
    } catch (error) {
        console.log(error);
        getQuote();
    }
}
*/

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} = ${author}`;
    window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuote();