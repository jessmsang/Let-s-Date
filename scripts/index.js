import initialCards from "../utils/initial-cards";
import Card from "../components/card";

//Card elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards");

//Preview modal elements
const previewModal = document.querySelector("#preview-modal");
const previewModalImage = previewModal.querySelector(".modal__image");
const previewModalCaption = previewModal.querySelector(".modal__caption");

//Close button (unviersal)
const closeButtons = document.querySelectorAll(".modal__close-button");

//Modals (universal)
const modals = document.querySelectorAll(".modal");
