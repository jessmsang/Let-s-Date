class Card {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
    this._handleDeleteBtn();
  }

  getView() {
    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
