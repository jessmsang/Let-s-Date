import Modal from "./Modal.js";

export default class PreviewModal extends Modal {
  constructor({ modalSelector, cardSelector, data }) {
    const previewModalTemplate = document.querySelector(
      "#preview-modal-template"
    );

    if (!previewModalTemplate) {
      console.error("Element not found for selector: #preview-modal-template");
      return;
    }

    const previewModalEl =
      previewModalTemplate.content.cloneNode(true).firstElementChild;
    previewModalEl.id = modalSelector.replace("#", "");
    document.body.appendChild(previewModalEl);

    super(`#${previewModalEl.id}`);
    this._cardEl = document.querySelector(cardSelector);
    this._data = data;

    if (!this._cardEl) {
      console.error(`Element not found for selector: ${cardSelector}`);
      return;
    }

    this._setEventListeners();
  }

  _setEventListeners() {
    super.setEventListeners();
    this._handleOpenPreviewModal();
  }

  _handleOpenPreviewModal() {
    this._cardEl.addEventListener("click", () => {
      this._updateModalContent();
      super.open();
    });
  }

  _updateModalContent() {
    this._previewModalImage = this._modalEl.querySelector(".modal__image");
    this._previewModalTitle = this._modalEl.querySelector(".modal__title");
    this._previewModalDescription = this._modalEl.querySelector(
      ".modal__description"
    );

    this._previewModalImage.src = this._data.image;
    this._previewModalImage.alt = this._data.title;
    this._previewModalTitle.textContent = this._data.title;
    this._previewModalDescription.textContent = this._data.description;
  }
}
