const productCards = document.querySelectorAll('.product-card__box');
const changeColorCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const yellowColorHash = '#FFFF00';

if (changeColorCardButton) {
    changeColorCardButton.addEventListener('click', () => {
        productCards.forEach((card) => {
            card.style.backgroundColor = greenColorHash;
        });
    });
}

const firstProductCard = document.querySelector('.product-card__box');
const changeColorCardButtonTwo = document.querySelector('#change-color-first-card');

if (changeColorCardButtonTwo) {
    changeColorCardButtonTwo.addEventListener('click', () => {
        if (firstProductCard) {
            firstProductCard.style.backgroundColor = yellowColorHash;
        }
    });
}

const openGoogleButton = document.querySelector('#open-goole');

if (openGoogleButton) {
    openGoogleButton.addEventListener('click', () => {
        const answer = confirm('Вы действительно хотите открыть Google?');
        if (answer) {
            window.location.href = 'https://google.com';
        }
    });
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('дз №6'));

function outputConsoleLog(messager) {
    alert(messager)
    consolmessagere.log(messager)
}