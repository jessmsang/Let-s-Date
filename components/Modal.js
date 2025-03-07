import Card from "./Card.js";

export default class Modal {
  constructor(modalSelector) {
    this._modalSelector = document.querySelector(modalSelector);
    this._modal = document.querySelector(".modal");
  }

  _handleModalClose() {
    this._handleModalCloseBtnClick();
    this._handleModalCloseEsc();
    this._handleModalCloseClick();
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

  _handleModalCloseClick() {
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
}
