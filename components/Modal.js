class Modal {
  constructor(card, selector) {
    this.card = card;
    this._modalTemplateEl = document.querySelector(selector);
  }

  getModalTemplate() {
    this._modalEl = this._modalTemplateEl.content
      .querySelector(".modal")
      .cloneNode(true);

    this._modalImageEl = this._modalEl.querySelector(".modal__image");
    this._modalTitleEl = this._modalEl.querySelector(".modal__title");
    this._modalDescriptionEl = this._modalEl.querySelector(
      ".modal__description"
    );
    this._modalCloseBtn = this._modalEl.querySelector(".modal__close-btn");

    this._modalImageEl.src = this.cardImageEl;
    this._modalImageEl.alt = this.cardTitleEl;
    this._modalTitleEl.textContent = this.cardTitleEl;
    this._modalDescriptionEl.textContent = this.cardDescriptionEl;

    return this._modalEl;
  }
}

export default Modal;
