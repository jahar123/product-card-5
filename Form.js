export default class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
    if (!this.formElement) {
      console.error(`Форма с id "${formId}" не найдена.`);
    }
  }

  getData() {
    if (!this.formElement) return {};
    const formData = new FormData(this.formElement);
    return Object.fromEntries(formData.entries());
  }

  validate() {
    const data = this.getData();
    const values = Object.values(data);
    return values.every(value => value.trim() !== '');
  }

  clear() {
    if (this.formElement) {
      this.formElement.reset();
    }
  }
}
