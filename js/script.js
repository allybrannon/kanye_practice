'use strict';

const apiUrl = 'https://api.kanye.rest';
const refreshQuote = document.querySelector('#refreshQuote');

function getQuote() {
    const kanye = document.querySelector(`#kanyeSays`);

    get(apiUrl).then(function(response) {
        kanye.innerHTML = response.quote;
    });
}

refreshQuote.addEventListener('click', function(e){
    e.preventDefault();
    getQuote();
});

getQuote();