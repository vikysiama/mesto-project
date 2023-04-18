const showInputError = (formElement, inputElement, errorMessage, formParameters) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formParameters.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formParameters.errorClass);
}

const hideInputError = (formElement, inputElement, formParameters) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formParameters.inputErrorClass);
  errorElement.classList.remove(formParameters.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, formParameters) => {
  if (inputElement.validity.patternMismatch) {
  inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formParameters);
  } else {
    hideInputError(formElement, inputElement, formParameters);
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

const setEventListeners = (formElement, formParameters) => {
  const inputList = Array.from(formElement.querySelectorAll(formParameters.inputSelector));
  const buttonElement = formElement.querySelector(formParameters.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, formParameters);
      toggleButtonState(inputList, buttonElement, formParameters.inactiveButtonClass);
    });
  });
};

const enableValidation = (formParameters) => {
  const formList = Array.from(document.querySelectorAll(formParameters.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement, formParameters);
  });
};

function disabledAddButton(form, formParameters) {
  form.reset();
  const buttonElement = form.querySelector(formParameters.submitButtonSelector);
  buttonElement.disabled=true;
  buttonElement.classList.add(formParameters.inactiveButtonClass);
}

const formParameters = {
  formSelector: '.popup__admin',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
};



export {formParameters, enableValidation, disabledAddButton};
