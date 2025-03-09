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
    this._cardSaveBtn = this._cardEl.querySelector(".card__save-btn");

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

  _handleCardSaveBtn() {
    this._cardSaveBtn.addEventListener("click", () => {
      this._cardSaveBtn.classList.toggle("card__save-btn_saved");
    });
  }

  _setEventListeners() {
    this._handleCardDeleteBtn();
    this._handleCardSaveBtn();
  }
}
