import {formParameters, enableValidation, disabledAddButton} from './validate.js';
import {openModalBox, closeModalBox, closeOverley, renderLoading} from './modal.js';
import {createCard, addCard, photoCardsItems} from './card.js';
import {getInformationAboutUser, getInitialCards, setInformationAboutUser, setInitialCards, setNewAvatar, setLikes} from './api.js';

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
const AvatarButtonImage = new URL('../images/avatar_button.svg', import.meta.url);

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
  { name: 'Avatar Button', link: AvatarButtonImage },
  { name: 'Inter Black', link: InterBlack },
  { name: 'Inter Black 2', link: InterBlack2 },
  { name: 'Inter Medium', link: InterMedium },
  { name: 'Inter Medium 2', link: InterMedium2 },
  { name: 'Inter Regular', link: InterRegular },
  { name: 'Inter Regular 2', link: InterRegular2 }
];

//функция копирования информации из профиля в попап
function copyEditProfileData(username, profession) {
  nameInput.value = username.textContent;
  jobInput.value = profession.textContent;
}

//универсальная функция обработки событий submit
function handleSubmit(request, evt, loadinfText = 'Сохранение...') {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(submitButton, true, initialText, loadinfText);
  request()
    .then(() => {
      evt.target.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(submitButton, false, initialText);
    });
}

//обработчик сабмита формы профиля
function handleEditFormSubmit(evt) {
  function makeRequest() {
    return setInformationAboutUser(nameInput.value, jobInput.value).then((userData) =>{
      userNameProfile.textContent = userData.name;
      jobProfile.textContent = userData.about;
      closeModalBox(popupEditProfile);
    });
  }
  handleSubmit(makeRequest, evt)
}

//обработчик сабмита формы аватара
function handleAvatarFormSubmit(evt) {
  function makeRequest() {
    return setNewAvatar(linkInputAvatar.value, linkInputImage.value).then((avatarData) =>{
      addAvatar.style = `background-image: url(${avatarData.avatar})`;
      closeModalBox(popupAvatar);
      formAvatarElement.reset();
    });
  }
  handleSubmit(makeRequest, evt)
}

//обработчик сабмита формы добавления новой карточки
function handleNewPlaceFormSubmit(evt) {
  function makeRequest() {
    return setInitialCards(titleInputImage.value, linkInputImage.value).then((cardData) =>{
      addCard(cardData, myIdUser);
      closeModalBox(popupAddPlace);
      formAddPlaceElement.reset();
    });
  }
  handleSubmit(makeRequest, evt)
}

//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const addAvatar = document.querySelector('.profile__image');

//Попап профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer =popupEditProfile.querySelector('.popup__container')
const formEditElement = popupContainer.querySelector('.popup__admin');
const nameInput = document.querySelector('.popup__item_el_name-user');
const jobInput = document.querySelector('.popup__item_el_profession');

//Поля профиля
const userNameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

//Попап аватара
const popupAvatar = document.querySelector('.popup_new-avatar');
const popupAvatarContainer =popupAvatar.querySelector('.popup__container')
const formAvatarElement = popupAvatarContainer.querySelector('.popup__admin');
const linkInputAvatar = formAvatarElement.querySelector('.popup__item_el_link');

//Попап добавления карточки
const popupAddPlace = document.querySelector('.popup_new-place');
const popupAddPlaceContainer =popupAddPlace.querySelector('.popup__container')
const formAddPlaceElement = popupAddPlaceContainer.querySelector('.popup__admin');
const titleInputImage = formAddPlaceElement.querySelector('.popup__item_el_title');
const linkInputImage = popupAddPlaceContainer.querySelector('.popup__item_el_link');

//Слушатели события submit
formAddPlaceElement.addEventListener('submit',(evt) => handleNewPlaceFormSubmit(evt));
formEditElement.addEventListener('submit',(evt) => handleEditFormSubmit(evt));
formAvatarElement.addEventListener('submit',(evt) => handleAvatarFormSubmit(evt));

//Слушатели события click
addAvatar.addEventListener('click', () => (openModalBox(popupAvatar), disabledAddButton(formAvatarElement, formParameters)));
editButton.addEventListener('click', () => (openModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
addButton.addEventListener('click', () => (openModalBox(popupAddPlace), disabledAddButton(formAddPlaceElement, formParameters)));

for(let i=0; i < closeButton.length; i++){
  const popupItem = closeButton[i].closest('.popup');
  closeButton[i].addEventListener('click', ()=> closeModalBox(popupItem));
}

enableValidation(formParameters);
closeOverley();

 export let myIdUser;


function getInfoProfile(username, profession, image) {
  const name = document.querySelector('.profile__title');
  const job = document.querySelector('.profile__subtitle');
  addAvatar.style = `background-image: url(${image})`;
  name.textContent = username;
  job.textContent = profession;
}



Promise.all([getInformationAboutUser(), getInitialCards()])
  .then(([data, cards]) => {
    getInfoProfile(data.name, data.about, data.avatar);
    myIdUser = data._id;
    cards.forEach((card) => {
      photoCardsItems.append(createCard(card, myIdUser))});
  })
  .catch((err) => {
    console.log(err);
  });

export function addLike(card, putLikes) {
  setLikes(card)
    .then(putLikes)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally();
}

