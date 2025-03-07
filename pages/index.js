import Section from "../components/Section.js";
import Card from "../components/Card.js";
import { initialCards /*cardsList*/ } from "../utils/constants.js";

const generateCard = (data) => {
  const card = new Card(data, "#card-template");
  const cardEl = card._getView();

  return cardEl;
};

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardEl = generateCard(item);
    return cardEl;
  },
  containerSelector: ".cards",
});
section.renderItems();
