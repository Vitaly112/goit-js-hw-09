const LOCAL_KEY_EMAIL = "feedback-form-email";
const LOCAL_KEY_MSG   = "feedback-form-msg";
const inputEmail   = document.querySelector(".form-email");
const inputMessage = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
inputEmail.addEventListener("input", onEmailInput);
reload();

inputMessage.addEventListener("input", onMessageInput);
reload();


function onEmailInput(event) {
    const emailText = event.target.value;
    localStorage.setItem(LOCAL_KEY_EMAIL, emailText);
}


function onMessageInput(event) {
    const messageText = event.target.value;
    localStorage.setItem(LOCAL_KEY_MSG, messageText);
} 

function reload() {
    const savedEmail = localStorage.getItem(LOCAL_KEY_EMAIL);
    if (savedEmail) {
        inputEmail.value = savedEmail;
    }
        const savedMessage = localStorage.getItem(LOCAL_KEY_MSG);
    if (savedMessage) {
        inputMessage.value = savedMessage;
    }
}


function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit :", event);
    console.log("Ваше повідомлення відправлено");
    localStorage.removeItem(LOCAL_KEY_EMAIL);
    localStorage.removeItem(LOCAL_KEY_MSG);
    event.currentTarget.reset();
}