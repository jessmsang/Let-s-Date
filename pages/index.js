import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PreviewModal from "../components/PreviewModal.js";
import { initialCards /*cardsList*/ } from "../utils/constants.js";

const generateCard = (data, index) => {
  const card = new Card(data, "#card-template");
  const cardEl = card._getView();

  const cardId = `card-${index}`;
  cardEl.id = cardId;

  document.querySelector(".cards").appendChild(cardEl);

  new PreviewModal({
    modalSelector: `#preview-modal-${index}`,
    cardSelector: `#${cardId}`,
    data: data,
  });

  return cardEl;
};

const section = new Section({
  items: initialCards,
  renderer: (item, index) => {
    const cardEl = generateCard(item, index);
    return cardEl;
  },
  containerSelector: ".cards",
});
section.renderItems();
