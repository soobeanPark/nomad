const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const geeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmitClick(event) {
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY, username);
paintGreeting(username);
}

function paintGreeting(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmitClick);
} else { 
    paintGreeting(saveUsername);
}

loginForm.addEventListener("submit", onSubmitClick);
