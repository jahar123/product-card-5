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
      this.modalElement.classList.add('modal-showed');
    }
  }

  close() {
    if (this.modalElement) {
      this.modalElement.classList.remove('modal-showed');
    }
  }

  isOpen() {
    if (!this.modalElement) return false;
    return this.modalElement.classList.contains('modal-showed');
  }

  initListeners() {
    const closeButton = this.modalElement.querySelector('.modal__close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}


