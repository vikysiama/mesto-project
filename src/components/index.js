import {formParameters, enableValidation, disabledAddButton} from './validate.js';
import {openModalBox, closeModalBox, closeOverley} from './modal.js';
import {fillCards, popupAddPlace, formAddPlaceElement, createCard, addCard} from './card.js';

import '../pages/index.css';

const addButtonMobileImage = new URL('../images/Add-Button_mobile.svg', import.meta.url);
const headerLogoImage = new URL('../images/header_logo.svg', import.meta.url);
const likeActiveImage = new URL('../images/like-active.svg', import.meta.url);
const photoCardDombayImage = new URL('../images/photo_card_Dombay.jpg', import.meta.url);
const photoCardKarachaivoCherkessiaImage = new URL('../images/photo_card_Karachaivo-cherkessia.jpg', import.meta.url);
const photoCardMountainElbrusImage = new URL('../images/photo_card_mountain_Elbrus.jpg', import.meta.url);
const photoLikeImage = new URL('../images/photo_like.svg', import.meta.url);
const popupCloseIconImage = new URL('../images/popup__Close-Icon.svg', import.meta.url);
const profileAddButtonImage = new URL('../images/profile_Add-Button.svg', import.meta.url);
const profileEditButtonImage = new URL('../images/profile_Edit-Button.svg', import.meta.url);
const profileKustoImage = new URL('../images/profile_Kusto.jpg', import.meta.url);
const TrashImage = new URL('../images/Trash.svg', import.meta.url);

const InterBlack = new URL('../fonts/Inter/Inter-Black.woff', import.meta.url);
const InterBlack2 = new URL('../fonts/Inter/Inter-Black.woff2', import.meta.url);
const InterMedium = new URL('../fonts/Inter/Inter-Medium.woff', import.meta.url);
const InterMedium2 = new URL('../fonts/Inter/Inter-Medium.woff2', import.meta.url);
const InterRegular = new URL('../fonts/Inter/Inter-Regular.woff', import.meta.url);
const InterRegular2 = new URL('../fonts/Inter/Inter-Regular.woff2', import.meta.url);

const whoIsTheGoat = [
  { name: 'add Button Mobile', link: addButtonMobileImage },
  { name: 'header Logo', link: headerLogoImage },
  { name: 'like Active', link: likeActiveImage },
  { name: 'photo Card Dombay', link: photoCardDombayImage },
  { name: 'photo Card Karachaivo Cherkessia', link: photoCardKarachaivoCherkessiaImage },
  { name: 'photo Card Mountain Elbrus', link: photoCardMountainElbrusImage },
  { name: 'photo Like', link: photoLikeImage },
  { name: 'popup Close Icon', link: popupCloseIconImage},
  { name: 'profile Add Button', link: profileAddButtonImage },
  { name: 'profile Edit Button', link: profileEditButtonImage },
  { name: 'profile Kusto', link: profileKustoImage },
  { name: 'Trash', link: TrashImage },
  { name: 'Inter Black', link: InterBlack },
  { name: 'Inter Black 2', link: InterBlack2 },
  { name: 'Inter Medium', link: InterMedium },
  { name: 'Inter Medium 2', link: InterMedium2 },
  { name: 'Inter Regular', link: InterRegular },
  { name: 'Inter Regular 2', link: InterRegular2 }
];

function copyEditProfileData(username, profession) {
  nameInput.value = username.textContent;
  jobInput.value = profession.textContent;
}

function handleEditFormSubmit(evt, username, profession) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closeModalBox(popupEditProfile);
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  createCard(titleInput.value, linkInput.value);
  addCard(titleInput.value, linkInput.value);
  closeModalBox(popupAddPlace);
  formAddPlaceElement.reset();
}

const titleInput = document.querySelector('.popup__item_el_title');
const linkInput = document.querySelector('.popup__item_el_link');

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer =popupEditProfile.querySelector('.popup__container')
const formEditElement = popupContainer.querySelector('.popup__admin');

const nameInput = document.querySelector('.popup__item_el_name-user');
const jobInput = document.querySelector('.popup__item_el_profession');

const userNameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

formEditElement.addEventListener('submit',(evt) => handleEditFormSubmit(evt, userNameProfile, jobProfile));
formAddPlaceElement.addEventListener('submit',(evt) => handleNewPlaceFormSubmit(evt));

editButton.addEventListener('click', () => (openModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
addButton.addEventListener('click', () => (openModalBox(popupAddPlace), disabledAddButton(formParameters.inactiveButtonClass)));

for(let i=0; i < closeButton.length; i++){
  const popupItem = closeButton[i].closest('.popup');
  closeButton[i].addEventListener('click', ()=> closeModalBox(popupItem));
}

fillCards();
enableValidation(formParameters);
closeOverley();


