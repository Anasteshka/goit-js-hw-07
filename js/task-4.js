const loginForm = document.querySelector(".login-form");
const submitBtn = document.querySelector(".submit");

loginForm.addEventListener("submit", onFormSubmit);

const usersLoginCredentials = [];

function onFormSubmit(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  const userCredentials = {
    email,
    password,
  };

  if (email !== "" && password !== "") {
    usersLoginCredentials.push(userCredentials);
    console.log(usersLoginCredentials);
  } else {
    alert("All form fields must be filled in");
  }

  loginForm.reset();
}
