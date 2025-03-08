export default class Card {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardTemplateEl = document.querySelector(cardSelector);
  }

  _getView() {
    this.cardEl = this._cardTemplateEl.content
      .querySelector(".card")
      .cloneNode(true);

    this._cardImageEl = this.cardEl.querySelector(".card__image");
    this._cardTitleEl = this.cardEl.querySelector(".card__title");
    this._cardDeleteBtn = this.cardEl.querySelector(".card__delete-btn");

    this._cardImageEl.src = this._data.image;
    this._cardImageEl.alt = this._data.title;
    this._cardTitleEl.textContent = this._data.title;

    this._setEventListeners();

    return this.cardEl;
  }

  _handleCardDeleteBtn() {
    this._cardDeleteBtn.addEventListener("click", () => {
      this.cardEl.remove();
    });
  }

  _setEventListeners() {
    this._handleCardDeleteBtn();
  }
}
