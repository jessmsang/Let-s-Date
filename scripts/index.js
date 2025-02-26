import initialCards from "../utils/initial-cards.js";
import Card from "../components/Card.js";

const cardsList = document.querySelector(".cards");

const previewModal = document.querySelector("#preview-modal");
const previewModalTitle = previewModal;
const previewModalCaption = previewModal.querySelector(".modal__caption");

const closeButtons = document.querySelectorAll(".modal__close-button");

const modals = document.querySelectorAll(".modal");

const renderCard = (item) => {
  const card = generateCard(item);
  cardsList.append(card);
};

const generateCard = (data) => {
  const card = new Card(data, "#card-template");
  const cardEl = card.getCardTemplate();

  return cardEl;
};

initialCards.forEach((item) => {
  renderCard(item);
});

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keyup", closeModalEsc);
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keyup", closeModalEsc);
// }

// function closeModalEsc(evt) {
//   modals.forEach((modal) => {
//     if (modal.classList.contains("modal_opened") && evt.key === "Escape") {
//       closeModal(modal);
//     }
//   });
// }

// closeButtons.forEach((button) => {
//   const modal = button.closest(".modal");
//   button.addEventListener("click", () => {
//     closeModal(modal);
//   });
// });

// modals.forEach((modal) => {
//   modal.addEventListener("click", function (evt) {
//     if (
//       modal.classList.contains("modal_opened") &&
//       evt.target.classList.contains("modal")
//     ) {
//       closeModal(modal);
//     }
//   });
// });
