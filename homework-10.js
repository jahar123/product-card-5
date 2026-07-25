
import { beautyProducts } from "./products.js";

const productDescriptionsMap = beautyProducts.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});


console.log('Объект с описаниями продуктов (Задание 4):', productDescriptionsMap);

function createCardDOM(product) {
 
  const cardElement = document.createElement('li');
  cardElement.className = 'product-card__box';

  const imgElement = document.createElement('img');
  imgElement.src = product.image;
  imgElement.alt = product.name;
  imgElement.width = 290;
  imgElement.height = 245;
  cardElement.appendChild(imgElement);

  const categoryElement = document.createElement('span');
  categoryElement.className = 'product-card__category';
  categoryElement.textContent = product.category;
  cardElement.appendChild(categoryElement);

  const titleElement = document.createElement('h2');
  titleElement.className = 'product-name';
  titleElement.textContent = product.name;
  cardElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'product-descripton';
  descriptionElement.textContent = product.description;
  cardElement.appendChild(descriptionElement);

  const compoundLabel = document.createElement('span');
  compoundLabel.className = 'product-compound';
  compoundLabel.textContent = 'Состав:';
  cardElement.appendChild(compoundLabel);

  const ulElement = document.createElement('ul');
  product.ingredients.forEach(ingredientText => {
    const liIngredient = document.createElement('li');
    liIngredient.className = 'product-compound__Ingredients';
    liIngredient.textContent = ingredientText;
    ulElement.appendChild(liIngredient);
  });
  cardElement.appendChild(ulElement);

  const priceWrapper = document.createElement('div');
  priceWrapper.className = 'product-card__price-wrapper';

  const priceTitle = document.createElement('b');
  priceTitle.className = 'product-card__price';
  priceTitle.textContent = 'Цена:';

  const priceValue = document.createElement('span');
  priceValue.className = 'product-card__price-rub';
  priceValue.textContent = product.price;

  priceWrapper.appendChild(priceTitle);
  priceWrapper.appendChild(priceValue);
  cardElement.appendChild(priceWrapper);

  return cardElement;
}

  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(userInput, 10);

 
  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Введено некорректное значение! Показываем все доступные карточки.");
    return 5;
  };



function renderBeautyCatalog(productsArray) {

  const catalogListContainer = document.querySelector('.product-catalog__list');
  if (!catalogListContainer) return;

  catalogListContainer.innerHTML = '';

  const visibleCardsCount = askUserForCardsAmount();
  
  const productsToRender = productsArray.slice(0, visibleCardsCount);

  productsToRender.forEach(product => {
    const readyCard = createCardDOM(product);
    catalogListContainer.appendChild(readyCard);
  });
}

renderBeautyCatalog(beautyProducts);
