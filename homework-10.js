
// ЗАДАНИЕ 1 & 2: Импорт данных продукта

import { beautyProducts } from "./products.js";

const productTemplate = document.getElementById('product-template');
const catalogListContainer = document.querySelector('.product-catalog__list');


// ЗАДАНИЕ 3: Создание карточки через клонирование <template>

const createCard = (product) => {
  if (!productTemplate) return null;

  const cardClone = productTemplate.content.cloneNode(true);

  cardClone.querySelector('.card__image').src = `img/${product.image}.png`;
  cardClone.querySelector('.card__image').alt = product.name;
  cardClone.querySelector('.product-card__category').textContent = product.category;
  cardClone.querySelector('.product-name').textContent = product.name;
  cardClone.querySelector('.product-descripton').textContent = product.description;
  
  // Выводим цену с красивым знаком рубля
  cardClone.querySelector('.product-card__price-rub').textContent = `${product.price} ₽`;

  const compoundList = cardClone.querySelector('.compaund__list');
  if (compoundList) {
    compoundList.innerHTML = '';
    product.ingredients.forEach((ingredientText) => {
      const liIngredient = document.createElement('li');
      liIngredient.className = 'product-compound__Ingredients';
      liIngredient.textContent = ingredientText;
      compoundList.append(liIngredient);
    });
  }

  return cardClone;
};


// ЗАДАНИЕ 4: Преобразование массива в массив объектов методом .reduce()

const productDescriptionsMap = beautyProducts.reduce((acc, product) => {
  acc.push({
    [product.name]: product.description
  });
  return acc;
}, []);

console.log('Массив с объектами описаний (Задание 4):', productDescriptionsMap);


// ЗАДАНИЕ 5 (Функция 1): Запрос количества через prompt

const askUserForCardsAmount = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);

  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Введено некорректное значение! Показываем все доступные карточки.");
    return 5;
  }
};

// ЗАДАНИЕ 5 (Функция 2): Рендеринг (отрисовка) карточек в HTML-контейнер

const renderBeautyCatalog = (productsArray) => {
  if (!catalogListContainer) return;

  catalogListContainer.innerHTML = '';

  const visibleCardsCount = askUserForCardsAmount();
  const productsToRender = productsArray.slice(0, visibleCardsCount);

  productsToRender.forEach((product) => {
    const readyCard = createCardDOM(product);
    if (readyCard) {
      catalogListContainer.appendChild(readyCard);
    }
  });
};

renderBeautyCatalog(beautyProducts);


