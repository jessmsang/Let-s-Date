class Card {
  constructor(data, selector) {
    this._data = data;
    this._templateEl = document.querySelector(selector);
  }

  _setEventListeners() {
    this._handleDeleteBtn();
  }

  _handleDeleteBtn() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
  }

  getCardTemplate() {
    this._cardEl = this._templateEl.content
      .querySelector(".card")
      .cloneNode(true);

    this._cardIconEl = this._cardEl.querySelector(".card__icon");
    this._cardTitleEl = this._cardEl.querySelector(".card__title");
    this.cardDescriptionEl = this._cardEl.querySelector(".card__description");
    this._cardDeleteBtn = this._cardEl.querySelector(".card__delete-btn");
    this._cardSaveBtn = this._cardEl.querySelector(".card__save-btn");

    this._cardIconEl.src = this._data.icon;
    this._cardIconEl.alt = this._data.icon;
    this._cardTitleEl.textContent = this._data.title;
    this._cardDescriptionEl = this._data.description;

    this._setEventListeners();

    return this._cardEl;
  }
}

export default Card;
