const LOCAL_KEY_STATE = "feedback-form-state";
const inputEmail = document.querySelector("input[type='email']");
const inputMessage = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
inputEmail.addEventListener("input", handleInputChange);
inputMessage.addEventListener("input", handleInputChange);
reload();

function handleInputChange(event) {
    const { name, value } = event.target;
    const trimmedValue = value.trim(); 
    localStorage.setItem(name, trimmedValue);
}

function reload() {
    const savedState = JSON.parse(localStorage.getItem(LOCAL_KEY_STATE)) || {};
    const savedEmail = savedState.email;
    const savedMessage = savedState.message;
    
    if (savedEmail) {
        inputEmail.value = savedEmail;
    }
    
    if (savedMessage) {
        inputMessage.value = savedMessage;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit :", event);
    console.log("Ваше повідомлення відправлено");
    localStorage.removeItem(LOCAL_KEY_STATE);
    event.currentTarget.reset();
}