export class Modal {

  #modal;
  #overlay;
  #overlayHandler;

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.#modal = document.getElementById(modalId);
    this.#overlay = document.getElementById('overlay');
    this.#initOpen(buttonId, shouldCloseOnOverlay);
  }

  open(shouldCloseOnOverlay) {
    if (!this.#modal || !this.#overlay) return;

    this.#modal.classList.add('modal-showed');
    this.#overlay.classList.add('overlay-showed');


    this.#initClose(shouldCloseOnOverlay);
  }

  close() {
    if (!this.#modal || !this.#overlay) return;

    this.#modal.classList.remove('modal-showed');
    this.#overlay.classList.remove('overlay-showed');


    if (this.#overlayHandler) {
      this.#overlay.removeEventListener('click', this.#overlayHandler);
      this.#overlayHandler = null;
    }
  }

  #initOpen(buttonId, shouldCloseOnOverlay) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        this.open(shouldCloseOnOverlay);
      });
    }
  }

  #initClose(shouldCloseOnOverlay) {

    const closeButton = this.#modal.querySelector('.modal-close-button') || this.#modal.querySelector('.close-btn') || this.#modal.querySelector('button');

    if (closeButton) {

      closeButton.addEventListener('click', () => {
        this.close();
      }, { once: true });
    }


    if (shouldCloseOnOverlay) {
      this.#overlayHandler = () => {
        this.close();
      };
      this.#overlay.addEventListener('click', this.#overlayHandler);
    }
  }
}

