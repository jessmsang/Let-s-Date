import initialCards from "../utils/initial-cards.js";
import Card from "../components/Card.js";

const cardsList = document.querySelector(".cards");
const modalsList = document.querySelector(".modals");

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
