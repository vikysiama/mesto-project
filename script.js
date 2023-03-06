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

function handleFormSubmit(evt, username, profession) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  CloseModalBox(popupEditProfile);
}
formElement.addEventListener('submit',(evt) => handleFormSubmit(evt, userNameProfile, jobProfile));

EditButton.addEventListener('click', () => (OpenModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
CloseButton.addEventListener('click', ()=> CloseModalBox(popupEditProfile));

const initialCards = [
  {
    name: 'Карачаево-Черкессия',
    link: 'images/photo_card_Karachaivo-cherkessia.jpg'
  },
  {
    name: 'Домбай',
    link: 'images/photo_card_Dombay.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'images/photo_card_mountain_Elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: 'images/photo_card_Dombay.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'images/photo_card_mountain_Elbrus.jpg'
  },
  {
    name: 'Карачаевск',
    link: 'images/photo_card_Karachaivo-cherkessia.jpg'
  }
];


const photoCardTemplate = document.querySelector('#photo-card').content;

function createCard( title, link){
  const cardItem = photoCardTemplate.querySelector('.photo-cards__item').cloneNode(true);
  const photoCardsImage = cardItem.querySelector('.photo-cards__image');
  const photoCardsName =cardItem.querySelector('.photo-cards__title');
  photoCardsImage.src = link;
  photoCardsImage.alt = title;
  photoCardsName.textContent = title;

  return cardItem;
}
