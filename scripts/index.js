import initialCards from "../utils/initial-cards.js";
import Card from "../components/Card.js";
// import Modal from "../components/Modal.js";

const cardsList = document.querySelector(".cards");

function openPreviewModal() {
  const previewModal = document.querySelector("#preview-modal");
  previewModal.classList.add("modal_opened");
  return previewModal;
}

const renderCard = (item) => {
  const card = generateCard(item);
  cardsList.append(card);
};

const generateCard = (data) => {
  const card = new Card(data, "#card-template");
  const cardEl = card.getCardTemplate();

  cardEl.addEventListener("click", openPreviewModal);

  return cardEl;
};

initialCards.forEach((item) => {
  renderCard(item);
});
