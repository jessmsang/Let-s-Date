class Card {
  constructor(data, selector) {
    this._data = data;
    this._cardTemplateEl = document.querySelector(selector);
  }

  _setEventListeners() {
    this._handleModalSaveBtn();
    this._handleCardDeleteBtn();
    this._openPreviewModal();
  }

  _openPreviewModal() {
    this._modal = document.querySelector(".modal");
    this._cardHeaderEl = this._cardEl.querySelector(".card__header");

    this._cardHeaderEl.addEventListener("click", () => {
      this._modal.classList.add("modal_opened");
      this.getPreviewModal();
    });
  }

  _handleModalClose() {
    this._handleModalCloseBtnClick();
    this._handleModalCloseEsc();
    this._handleModalCloseModalClick();
  }

  _handleModalCloseBtnClick() {
    this._modalCloseBtn = this._previewModal.querySelector(".modal__close-btn");
    this._modalCloseBtn.addEventListener("click", () => {
      this._modal.classList.remove("modal_opened");
    });
  }

  _handleModalCloseEsc() {
    document.addEventListener("keyup", (EventTarget) => {
      if (
        this._modal.classList.contains("modal_opened") &&
        EventTarget.key === "Escape"
      ) {
        this._modal.classList.remove("modal_opened");
      }
    });
  }

  _handleModalCloseModalClick() {
    this._modal.addEventListener("click", (EventTarget) => {
      if (
        this._modal.classList.contains("modal_opened") &&
        EventTarget.target.classList.contains("modal")
      ) {
        this._modal.classList.remove("modal_opened");
      }
    });
  }

  _handleModalSaveBtn() {
    this._cardSaveBtn.addEventListener("click", () => {
      this._cardSaveBtn.classList.toggle("card__save-btn_saved");
    });
  }

  _handleCardDeleteBtn() {
    this._cardDeleteBtn.addEventListener("click", () => {
      this._cardEl.remove();
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

    this._handleModalClose();

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
    // this._cardDescriptionEl.textContent = this._data.description;

    this._setEventListeners();

    return this._cardEl;
  }
}

export default Card;
