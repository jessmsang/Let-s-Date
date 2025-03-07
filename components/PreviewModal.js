import Modal from "./Modal.js";

export default class ModalCardPreview extends Modal {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
    this._modal = document.querySelector(".modal");
    this._cardHeaderEl = this._cardEl.querySelector(".card__header");
  }

  _setEventListeners() {
    this._handleModalSaveBtn();
    this._openPreviewModal();
  }
  _openPreviewModal() {
    this._cardHeaderEl.addEventListener("click", () => {
      this._modal.classList.add("modal_opened");
      this.getPreviewModal();
    });
  }

  handleOpenPreviewModal() {
    this._previewModalImage.src = this._data.image;
    this._previewModalImage.alt = this._data.title;
    this._previewModalTitle.textContent = this._data.title;
    this._previewModalDescription.textContent = this._data.description;

    this._handleModalClose();

    return this._previewModal;
  }
}
