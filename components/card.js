class Card {
  constructor(data, selector) {
    this._data = data;
    this._cardTemplateEl = document.querySelector(selector);
  }

  _setEventListeners() {
    this._openPreviewModal();
  }

  _openPreviewModal() {
    this._cardEl.addEventListener("click", () => {
      this._modal = document.querySelector(".modal");
      this._modal.classList.add("modal_opened");
      this.getPreviewModal();
    });
  }

  // _handleCardSaveBtn() {}

  _handleModalCloseBtn() {
    this._modalCloseBtn = this._previewModal.querySelector(".modal__close-btn");
    this._modalCloseBtn.addEventListener("click", () => {
      this._modal.classList.remove("modal_opened");
    });
  }

  getPreviewModal() {
    this._previewModal = document.querySelector("#preview-modal");
    this._previewModalImage = this._previewModal.querySelector(".modal__image");
    this._previewModalTitle = this._previewModal.querySelector(".modal__title");
    this._previewModalDescription = this._previewModal.querySelector(
      ".modal__description"
    );

    this._previewModalImage.src = this._data.image;
    this._previewModalImage.alt = this._data.title;
    this._previewModalTitle.textContent = this._data.title;
    this._previewModalDescription.textContent = this._data.description;

    this._handleModalCloseBtn();

    return this._previewModal;
  }

  getCardTemplate() {
    this._cardEl = this._cardTemplateEl.content
      .querySelector(".card")
      .cloneNode(true);

    this._cardImageEl = this._cardEl.querySelector(".card__image");
    this._cardTitleEl = this._cardEl.querySelector(".card__title");
    this._cardDescriptionEl = this._cardEl.querySelector(".card__description");
    this._cardDeleteBtn = this._cardEl.querySelector(".card__delete-btn");
    this._cardSaveBtn = this._cardEl.querySelector(".card__save-btn");

    this._cardImageEl.src = this._data.image;
    this._cardImageEl.alt = this._data.title;
    this._cardTitleEl.textContent = this._data.title;
    this._cardDescriptionEl.textContent = this._data.description;

    this._setEventListeners();

    return this._cardEl;
  }
}

export default Card;
