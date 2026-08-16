export class Modal {
  static #activeOverlayHandler = null;

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId, shouldCloseOnOverlay);
    this.#initClose();
  }

  open(shouldCloseOnOverlay) {
    if (!this.modal || !this.overlay) return;
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (shouldCloseOnOverlay) {
      if (Modal.#activeOverlayHandler) {
        this.overlay.removeEventListener('click', Modal.#activeOverlayHandler);
      }
      Modal.#activeOverlayHandler = () => this.close();
      this.overlay.addEventListener('click', Modal.#activeOverlayHandler);
    }
  }

  close() {
    if (!this.modal || !this.overlay) return;
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    if (Modal.#activeOverlayHandler) {
      this.overlay.removeEventListener('click', Modal.#activeOverlayHandler);
      Modal.#activeOverlayHandler = null;
    }
  }

  #initOpen(buttonId, shouldCloseOnOverlay) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open(shouldCloseOnOverlay));
    }
  }

  #initClose() {
    if (!this.modal) return;
    const closeButton = this.modal.querySelector('.modal-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }
  }
}
