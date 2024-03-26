const LOCAL_KEY = "feedback-form-state"; 
const form = document.querySelector(".feedback-form"); 

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onTextInput); 
reload();


function onTextInput(event) {
    let savedInput = localStorage.getItem(LOCAL_KEY);
    savedInput = savedInput ? JSON.parse(savedInput) : {};
    let { email, message } = form.elements;
    savedInput = {
      ...savedInput, 
      email: email.value.trim(),
      message: message.value.trim(),
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(savedInput));
  }

function reload() {
  let savedInput = localStorage.getItem(LOCAL_KEY);
  if (savedInput) {
    savedInput = JSON.parse(savedInput);
    Object.entries(savedInput).forEach(([name, value]) => {
      form.elements[name].value = value ?? '';
    })
  }
}


function handleSubmit(event) {
    event.preventDefault();
  
    const { email, message } = event.currentTarget.elements;
  
   
    if (email.value.trim() === '' || message.value.trim() === '') {
      alert('Будь ласка, заповніть обидва поля форми.');
      return;
    }
  
  
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(LOCAL_KEY);
    event.currentTarget.reset();
  }