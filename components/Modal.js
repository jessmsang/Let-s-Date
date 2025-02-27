class Modal {
  constructor(data, selector) {
    this.data = data;
    this._modalTemplateEl = document.querySelector(selector);
    this._setEventListeners;
  }

  // _setEventListeners() {
  //   this._handleOpenModal();
  // }
  //   this._handleCloseModal();
  //   this._handleCloseModalEsc();
  // }

  //   this._cardEl.addEventListener("click", () => {
  //     this._modalEl.classList.add("modal_opened");
  //     document.addEventListener("keyup", this._handleCloseModalEsc);
  //   });
  // }

  // _handleCloseModal() {
  //   this._cardEl.addEventListener("click", () => {
  //     this._modalEl.classList.remove("modal_opened");
  //     document.removeEventListener("keyup", this._handleCloseModalEsc);
  //   });
  // }

  // _handleCloseModalEsc(evt) {
  //   this._modals = document.querySelectorAll(".modal");
  //   this._modals.forEach((modal) => {
  //     if (
  //       this._modal.classList.contains("modal_opened") &&
  //       evt.key === "Escape"
  //     ) {
  //       this._handleCloseModal();
  //     }
  //   });
  // }

  getModalTemplate() {
    this._modalEl = this._modalTemplateEl.content
      .querySelector(".modal")
      .cloneNode(true);

    this._modalImageEl = this._modalEl.querySelector(".modal__image");
    this._modalTitleEl = this._modalEl.querySelector(".modal__title");
    this._modalDescriptionEl = this._modalEl.querySelector(
      ".modal__description"
    );
    this._modalCloseBtn = this._modalEl.querySelector(".modal__close-btn");

    this._modalImageEl.src = this.cardImageEl;
    this._modalImageEl.alt = this.cardTitleEl;
    this._modalTitleEl.textContent = this.cardTitleEl;
    this._modalDescriptionEl.textContent = this.cardDescriptionEl;

    // this._setEventListeners();

    return this._modalEl;
  }
}

export default Modal;
