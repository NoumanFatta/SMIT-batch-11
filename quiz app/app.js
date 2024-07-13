window.addEventListener("load", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    location.pathname = "/quiz.html";
  }
});

const USER_KEY = "users";

const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const allUsers = JSON.parse(localStorage.getItem(USER_KEY)) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const foundUser = allUsers.find((user) => {
    return user.email === email.value && user.password === pass.value;
  });
  if (!foundUser) {
    alert("Inavlid email or password");
    return;
  }
  localStorage.setItem("currentUser", JSON.stringify(foundUser.email));
  location.pathname = "/quiz.html";
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const newForm = new FormData(e.currentTarget);
  const newUser = {
    email: newForm.get("email"),
    password: newForm.get("password"),
  };
  const foundUser = allUsers.find((user) => {
    return user.email === newUser.email;
  });
  if (foundUser) {
    alert("Email already exists");
    return;
  }
  allUsers.push(newUser);
  localStorage.setItem(USER_KEY, JSON.stringify(allUsers));
});
