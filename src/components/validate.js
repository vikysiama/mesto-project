const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(popupParameters.errorClass);
}

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(popupParameters.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
  inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, popupParameters.inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, popupParameters.inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) =>{
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.disabled=true;
    buttonElement.classList.add(inactiveButtonClass);}
  else {
    buttonElement.disabled=false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(popupParameters.inputSelector));
  const buttonElement = formElement.querySelector(popupParameters.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, popupParameters.inactiveButtonClass);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(popupParameters.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement);
  });
};

const popupParameters = {
  popupSelector: '.popup',
  formSelector: '.popup__admin',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};

export {popupParameters , enableValidation};