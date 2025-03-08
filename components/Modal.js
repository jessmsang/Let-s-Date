export default class Modal {
  constructor(modalSelector) {
    this._modalEl = document.querySelector(modalSelector);

    if (!this._modalEl) {
      console.error(`Element not found for selector: ${modalSelector}`);
      return;
    }

    this._modalCloseBtn = this._modalEl.querySelector(".modal__close-btn");
    this.setEventListeners();
  }

  setEventListeners() {
    this._modalEl.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal__close-btn") ||
        evt.target.classList.contains("modal")
      ) {
        this.close();
      }
    });
  }

  open() {
    this._modalEl.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._modalEl.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
