import {closeModalBox} from './modal.js';
import {popupParameters} from './validate.js';

const closeOverley = () => {
  const popupList = Array.from(document.querySelectorAll(popupParameters.popupSelector));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', function (evt) {
      if (evt.currentTarget === evt.target) {
        closeModalBox(popupElement);
      }
    });
  });
};

function closewithEscape(popupElement, evt) {
  if (evt.key === 'Escape') {
    closeModalBox(popupElement);
  }
}


export {closeOverley, closewithEscape};
