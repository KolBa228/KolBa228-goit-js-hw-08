import throttle from 'lodash.throttle';

import '../css/03-feedback.css';

import '../css/common.css';

const form = document.querySelector('.feedback-form');

const textarea = document.querySelector('.feedback-form textarea');

const input = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', formSubmit);

form.addEventListener('input', throttle(onFormInput, 500));

let feedbackFormData = {};

function formSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  feedbackFormData = {};
};

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;

  const data = JSON.stringify(feedbackFormData);

  localStorage.setItem(STORAGE_KEY, data);

};

function textareaInputMessage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData.email) {
    input.value = savedData.email;
    feedbackFormData.email = savedData.email;
  }

  if (savedData.message) {
    textarea.value = savedData.message;
    feedbackFormData.message = savedData.message;
  }
};

textareaInputMessage();