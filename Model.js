export default class Modal {
    constructor(modalId) {
       
        this.modalElement = document.getElementById(modalId);
        
        if (this.modalElement) {
           
            this.initListeners();
        } else {
            console.error(`Модальное окно с id "${modalId}" не найдено.`);
        }
    }

   
    open() {
        if (this.modalElement) {
            this.modalElement.classList.add('open'); 
        }
    }

   
    close() {
        if (this.modalElement) {
            this.modalElement.classList.remove('open');
        }
    }

    
    isOpen() {
        if (!this.modalElement) return false;
        return this.modalElement.classList.contains('open');
    }

   
    initListeners() {
       
        const closeButton = this.modalElement.querySelector('.close-btn');
        
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.close(); 
            });
        }
    }
};