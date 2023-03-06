const EditButton = document.querySelector('.profile__edit-button');
const CloseButton = document.querySelector('.popup__close-button');

const popupEditProfile = document.querySelector('.popup');
const popupContainer =popupEditProfile.querySelector('.popup__container')
const formElement = popupContainer.querySelector('.popup__admin');

const nameInput = document.querySelector('.popup__item_el_name-user');
const jobInput = document.querySelector('.popup__item_el_profession');

const userNameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

function OpenModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

function CloseModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

function copyEditProfileData(username, profession) {
  nameInput.value = username.textContent;
  jobInput.value = profession.textContent;
}

EditButton.addEventListener('click', () => (OpenModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
CloseButton.addEventListener('click', ()=> CloseModalBox(popupEditProfile));
