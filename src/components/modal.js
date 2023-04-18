import {formParameters} from './validate.js';

function openModalBox(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closewithEscape);
}

function closeModalBox(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closewithEscape);
}

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

function closewithEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closeModalBox(openedPopup);
  }
}

const popupParameters = {
  popupSelector: '.popup',
}

function renderLoading(button, isLoading, buttonText='Сохранить', loadinfText = 'Сохранение...') {
  if(isLoading) {
    button.textContent = loadinfText;
  } else {
    button.textContent = buttonText;
  }
}

export {openModalBox, closeModalBox, closeOverley, popupParameters, renderLoading};
