const EditButton = document.querySelector('.profile__edit-button');
const CloseButton = document.querySelector('.popup__close-button');

const popupEditProfile = document.querySelector('.popup');

function OpenModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

function CloseModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

EditButton.addEventListener('click', () => (OpenModalBox(popupEditProfile)));
CloseButton.addEventListener('click', ()=> CloseModalBox(popupEditProfile));
