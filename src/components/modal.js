import {closewithEscape} from './utils.js';

function openModalBox(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => closewithEscape(popup, evt));
}

function closeModalBox(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => closewithEscape(popup, evt));
}

export {openModalBox, closeModalBox};
