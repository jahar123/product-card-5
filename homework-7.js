function showWeather(citi, temperatyre) {
    console.log('Сейчас в ${citi} ${temperatyre} градусов по Цельси');
    showWeather('Москва', 30);
}


const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log('Сверхсветовая скорость');
    } else if (speed === SPEED_OF_LIGHT) {
        console.log('Субсветовая скорость');

    } else {
        console.log('Скорость света');
    }
}

checkSpeed(299792458);


const productName = 'Ноутбук';
const productPrice = 70000;

function buyProduct(budget) {
    if (budget >= productPrice) {
        console.log('${productName} приобретён, Спасибо за покупку!');
    }
    else {
        const missingAmount = productPrice - budget;
        console.log('Недостаточно средств,${missingAmount}, пополните баланс');
    }
}
/*  */
buyProduct(75000);
buyProduct(69000);


function greetUser() {
    console.log('Привет! это функция для 7дз');
}

let userAge = 27;
let currentStatus = "активен";
const isStudent = true;