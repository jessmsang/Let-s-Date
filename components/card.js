export default class Card {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardTemplateEl = document.querySelector(cardSelector);
  }

  _getView() {
    this._cardEl = this._cardTemplateEl.content
      .querySelector(".card")
      .cloneNode(true);

    this._cardImageEl = this._cardEl.querySelector(".card__image");
    this._cardTitleEl = this._cardEl.querySelector(".card__title");
    this._cardDeleteBtn = this._cardEl.querySelector(".card__delete-btn");

    this._cardImageEl.src = this._data.image;
    this._cardImageEl.alt = this._data.title;
    this._cardTitleEl.textContent = this._data.title;

    this._setEventListeners();

    return this._cardEl;
  }

  _handleCardDeleteBtn() {
    this._cardDeleteBtn.addEventListener("click", () => {
      this._cardEl.remove();
    });
  }

  _setEventListeners() {
    this._handleCardDeleteBtn();
  }
}
