
import throttle from 'lodash.throttle'

const input = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

onDataTextForm();

form.addEventListener("input", throttle(onTextInput, 500));
form.addEventListener("submit", buttonSumbitForm);

function onTextInput(evt) {
    const email = input.value;
    const message = textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: email, message: message}));
    // console.log(message);
}

function buttonSumbitForm(evt) {
    evt.preventDefault();
    const { elements: email, message } = evt.currentTarget;
    console.log({ email: input.value, message: message.value });
    localStorage.removeItem(STORAGE_KEY); 
    evt.currentTarget.reset();
}

function onDataTextForm(evt) {
    const savedTextValue = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedTextValue);
    if (parseMessage) {
        console.log(input.value = parseMessage.email);
        console.log(textarea.value = parseMessage.message);
    }
}
