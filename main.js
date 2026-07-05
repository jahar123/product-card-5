
const changeColorCardButton = document.querySelector('#change-color-all-card');
const productCards = document.querySelectorAll('.product-card__box');
const yellowColorHash = '#FFFF00';
const greenColorHash = '#00ff00';



changeColorCardButton.addEventListener('click', () => {
    productCards.forEach((card) => {
        card.style.backgroundColor = greenColorHash;
    });
});

const firstProductCard = document.querySelector('.product-card__box');
const changeColorCardButtonTwo = document.querySelector('#change-color-first-card');


changeColorCardButtonTwo.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = yellowColorHash;
});

const openGoogleButton = document.querySelector('#open-goole');


openGoogleButton.addEventListener('click', () => {
    const answer = confirm('Вы действительно хотите открыть Google?');
    if (answer) {
        window.location.href = 'https://google.com';
    }
});

const outputlogButton = document.querySelector('#output-console-log');

outputlogButton.addEventListener('click', () => {
    outputConsoleLog('Дз №6');
});

function outputConsoleLog(messager) {
    alert(messager);
}
