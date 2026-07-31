// homework-11.js

// 1. Создаем главный семантический тег footer
const footer = document.createElement('footer');

// Базовые стили для футера (темный фон из Figma)
footer.style.backgroundColor = '#1e1e1e';
footer.style.color = '#ffffff';
footer.style.padding = '40px 84px';
footer.style.fontFamily = 'Arial, sans-serif';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.gap = '30px';
footer.style.marginTop = '50px'; // Отступ сверху от карточек

// 2. Создаем контейнер для трех основных колонок
const topRow = document.createElement('div');
topRow.style.display = 'flex';
topRow.style.justifyContent = 'space-between';
topRow.style.alignItems = 'flex-start';
topRow.style.flexWrap = 'wrap'; // Чтобы на мобильных не разъезжалось
topRow.style.gap = '20px';

// --- КОЛОНКА 1: Логотип и описание ---
const col1 = document.createElement('div');
// Создаем кнопку "Регистрация"
const regButton = document.createElement('button');
regButton.textContent = 'Регистрация';
regButton.style.marginTop = '15px';
regButton.style.padding = '8px 16px';
regButton.style.backgroundColor = '#3b82f6'; // Синяя кнопка
regButton.style.color = '#ffffff';
regButton.style.border = 'none';
regButton.style.borderRadius = '5px';
regButton.style.cursor = 'pointer';

// Добавляем её в первую колонку к логотипу и описанию
col1.append(regButton);

const logo = document.createElement('h3');
logo.textContent = 'Product Cards';
logo.style.margin = '0 0 10px 0';
const desc = document.createElement('p');
desc.textContent = 'У Нас Самые Лучшие Продукты Для Кожи!';
desc.style.color = '#aaaaaa';
desc.style.fontSize = '14px';
col1.append(logo, desc);

// --- КОЛОНКА 2: Форма подписки (Центр) ---
const col2 = document.createElement('div');

const formTitle = document.createElement('p');
formTitle.textContent = 'Подпишись на наши акции:';
formTitle.style.margin = '0 0 10px 0';

// Создаем форму
const form = document.createElement('form');
form.style.display = 'flex';
form.style.backgroundColor = '#ffffff';
form.style.borderRadius = '10px';
form.style.padding = '4px';
form.style.width = '344px';
form.style.border = '1px solid #000000';

// Инпут для ввода email
const input = document.createElement('input');
input.type = 'email';
input.placeholder = 'Введи Email...';
input.style.border = 'none';
input.style.outline = 'none';
input.style.padding = '8px 12px';
input.style.flexGrow = '1';
input.style.fontSize = '14px';
input.style.color = '#000000';

// Кнопка отправки
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подписаться';
button.style.backgroundColor = '#1e1e1e';
button.style.color = '#ffffff';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.cursor = 'pointer';

form.append(input, button);

// Элемент для ошибки
const errorMsg = document.createElement('p');
errorMsg.style.color = '#ff4d4d';
errorMsg.style.fontSize = '12px';
errorMsg.style.margin = '5px 0 0 0';
errorMsg.style.display = 'none'; 

col2.append(formTitle, form, errorMsg);

// --- КОЛОНКА 3: Быстрые ссылки ---
const col3 = document.createElement('div');
const linksTitle = document.createElement('h4');
linksTitle.textContent = 'Быстрые ссылки';
linksTitle.style.margin = '0 0 10px 0';

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.margin = '0';
ul.style.display = 'flex';
ul.style.flexDirection = 'column';
ul.style.gap = '8px';

['Главная', 'Магазин', 'Контакты'].forEach(text => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    a.style.color = '#aaaaaa';
    a.style.textDecoration = 'none';
    a.style.fontSize = '14px';
    li.append(a);
    ul.append(li);
});

nav.append(ul);
col3.append(linksTitle, nav);

// Собираем верхний ряд
topRow.append(col1, col2, col3);

// --- НИЖНИЙ РЯД: Копирайт ---
const bottomRow = document.createElement('div');
bottomRow.style.borderTop = '1px solid #333333';
bottomRow.style.paddingTop = '20px';
bottomRow.style.textAlign = 'center';

const copyright = document.createElement('p');
copyright.textContent = '://product-cards.com©all right reserve';
copyright.style.color = '#666666';
copyright.style.fontSize = '12px';
copyright.style.margin = '0';

bottomRow.append(copyright);

// Собираем весь футер
footer.append(topRow, bottomRow);

// Добавляем готовый футер в самый конец тега body
document.body.append(footer);

// ================= ЛОГИКА ВАЛИДАЦИИ ФОРМЫ =================

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const emailValue = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || !emailPattern.test(emailValue)) {
        errorMsg.textContent = 'Пожалуйста, введите корректный email адрес.';
        errorMsg.style.display = 'block';
        return; 
    }

    errorMsg.style.display = 'none';

    // Создаем объект для консоли, как в ТЗ
    const resultObject = {
        email: emailValue
    };

    console.log(resultObject);
    form.reset();
});

// 1. Создаем задний затемненный фон (overlay)
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Затемнение
overlay.style.display = 'none'; // По умолчанию скрыто
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '1000';

// 2. Создаем саму белую плашку окна (modal)
const modal = document.createElement('div');
modal.className = 'modal'; // Класс из ТЗ
modal.style.backgroundColor = '#ffffff';
modal.style.padding = '30px';
modal.style.borderRadius = '12px';
modal.style.width = '400px';
modal.style.position = 'relative';
modal.style.color = '#000000';

// 3. Создаем кнопку-крестик для закрытия
const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;'; // Символ крестика
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '15px';
closeButton.style.border = 'none';
closeButton.style.background = 'none';
closeButton.style.fontSize = '24px';
closeButton.style.cursor = 'pointer';

// Собираем элементы вместе и добавляем на страницу
modal.append(closeButton);
overlay.append(modal);
document.body.append(overlay);

// ================= ЛОГИКА ОТКРЫТИЯ И ЗАКРЫТИЯ =================

// При клике на кнопку "Регистрация" — показываем модалку
regButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
    modal.classList.add('modal-showed'); // Добавляем класс из ТЗ
});

// При клике на крестик — скрываем модалку
closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.classList.remove('modal-showed');
});

// =========================================================================
// УРОВЕНЬ 2: ФОРМА РЕГИСТРАЦИИ ВНУТРИ МОДАЛЬНОГО ОКНА
// =========================================================================

// Проверяем, существует ли модальное окно на странице перед созданием формы
const modalWindow = document.querySelector('.modal');

if (modalWindow) {
    // 1. Создаем элемент формы регистрации
    const regForm = document.createElement('form');
    regForm.id = 'registration-form';
    regForm.style.display = 'flex';
    regForm.style.flexDirection = 'column';
    regForm.style.gap = '12px';
    regForm.style.marginTop = '20px';

    // Заголовок формы
    const regTitle = document.createElement('h3');
    regTitle.textContent = 'Регистрация';
    regTitle.style.margin = '0 0 10px 0';
    regForm.append(regTitle);

    // Функция-помощник для создания полей ввода
    const createInputField = (type, placeholder, name) => {
        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.name = name;
        input.required = true;
        input.style.padding = '10px';
        input.style.border = '1px solid #cccccc';
        input.style.borderRadius = '6px';
        input.style.fontSize = '14px';
        input.style.outline = 'none';
        input.style.color = '#000000';
        return input;
    };

    // Создаем поля ввода формы регистрации согласно ТЗ
    const firstNameInput = createInputField('text', 'Имя', 'firstName');
    const lastNameInput = createInputField('text', 'Фамилия', 'lastName');
    const dobInput = createInputField('date', 'Дата рождения', 'dob');
    const loginInput = createInputField('text', 'Логин', 'login');
    const passwordInput = createInputField('password', 'Пароль', 'password');
    const confirmPasswordInput = createInputField('password', 'Повторите пароль', 'confirmPassword');

    // Кнопка отправки формы
    const submitRegButton = document.createElement('button');
    submitRegButton.type = 'submit';
    submitRegButton.textContent = 'Зарегистрироваться';
    submitRegButton.style.padding = '12px';
    submitRegButton.style.backgroundColor = '#1e1e1e';
    submitRegButton.style.color = '#ffffff';
    submitRegButton.style.border = 'none';
    submitRegButton.style.borderRadius = '6px';
    submitRegButton.style.cursor = 'pointer';
    submitRegButton.style.fontWeight = 'bold';

    // Текст для вывода ошибок валидации регистрации
    const regErrorMsg = document.createElement('p');
    regErrorMsg.style.color = '#ff4d4d';
    regErrorMsg.style.fontSize = '13px';
    regErrorMsg.style.margin = '0';
    regErrorMsg.style.display = 'none';

    // Собираем все элементы внутрь формы
    regForm.append(
        firstNameInput, 
        lastNameInput, 
        dobInput, 
        loginInput, 
        passwordInput, 
        confirmPasswordInput, 
        regErrorMsg,
        submitRegButton
    );

    // Добавляем готовую форму внутрь белой плашки модального окна
    modalWindow.append(regForm);

    // Переменная сущности пользователя во внешней области видимости по ТЗ
    let user = null;

    // Логика валидации формы регистрации
    regForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем перезагрузку страницы

        // Проверка №1: Валидность всей формы через метод checkValidity() по ТЗ
        if (!regForm.checkValidity()) {
            regErrorMsg.textContent = 'Ошибка: Заполните все поля корректно!';
            regErrorMsg.style.display = 'block';
            return;
        }

        // Проверка №2: Совпадение паролей по ТЗ
        if (passwordInput.value !== confirmPasswordInput.value) {
            regErrorMsg.textContent = 'Ошибка: Пароли не совпадают!';
            regErrorMsg.style.display = 'block';
            return;
        }

        // Если проверки пройдены, скрываем ошибку
        regErrorMsg.style.display = 'none';

        // Создаем объект сущности со временем создания Date() по ТЗ
        user = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            dob: dobInput.value,
            login: loginInput.value.trim(),
            password: passwordInput.value, 
            createdAt: new Date() 
        };

        // Выводим объект в консоль по ТЗ
        console.log('Вывод сущности user (Задание №4/Уровень 2):', user);

        // Очищаем поля формы
        regForm.reset();

        // Закрываем окно (скрываем фон и убираем класс у модалки)
        const overlayWindow = document.querySelector('body > div');
        if (overlayWindow) {
            overlayWindow.style.display = 'none';
        }
        modalWindow.classList.remove('modal-showed');
        
        alert('Регистрация успешно завершена!');
    });
};
