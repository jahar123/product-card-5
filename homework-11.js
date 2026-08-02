
const subscribeForm = document.getElementById('subscribe-form');
const subInput = document.getElementById('sub-input');
const subErrorMsg = document.getElementById('sub-error');


const regButton = document.getElementById('reg-btn');
const overlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-modal-btn');
const regForm = document.getElementById('registration-form');

const passwordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('reg-confirm');
const regErrorMsg = document.getElementById('reg-error');

let user = null;


if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const emailValue = subInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '' || !emailPattern.test(emailValue)) {
            subErrorMsg.textContent = 'Пожалуйста, введите корректный email адрес.';
            subErrorMsg.style.display = 'block';
            return; 
        }
        
        subErrorMsg.style.display = 'none';
        console.log({ email: emailValue });
        subscribeForm.reset();
    });
}


if (regButton && overlay && closeButton) {
    regButton.addEventListener('click', () => {
        overlay.style.display = 'flex';
      
        overlay.querySelector('.modal-card').classList.add('modal-showed'); 
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlay.querySelector('.modal-card').classList.remove('modal-showed');
    });
}


if (regForm) {
    regForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (!regForm.checkValidity()) {
            regErrorMsg.textContent = 'Ошибка: Заполните все поля корректно!';
            regErrorMsg.style.display = 'block';
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            regErrorMsg.textContent = 'Ошибка: Пароли не совпадают!';
            regErrorMsg.style.display = 'block';
            return;
        }

        regErrorMsg.style.display = 'none';

        
        const formData = new FormData(regForm);
        user = {
            firstName: formData.get('firstName').trim(),
            lastName: formData.get('lastName').trim(),
            dob: formData.get('dob'),
            login: formData.get('login').trim(),
            password: passwordInput.value, 
            createdAt: new Date() 
        };

        console.log(user);

        regForm.reset();
        overlay.style.display = 'none';
        overlay.querySelector('.modal-card').classList.remove('modal-showed');
        alert('Регистрация успешно завершена!');
    });
}
