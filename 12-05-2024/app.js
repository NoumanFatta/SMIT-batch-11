var registerForm = document.querySelector("#registerForm");
var loginForm = document.querySelector("#loginForm");
var toastContainer = document.getElementById("liveToast");
var toastBody = toastContainer.querySelector(".toast-header").innerHTML;
var users = JSON.parse(localStorage.getItem("users")) || [];

function showToast(header, msg) {
  const toast = new bootstrap.Toast(toastContainer);
  toastContainer.querySelector(".toast-header").innerHTML = header + toastBody;
  toastContainer.querySelector(".toast-body").innerText = msg;
  toast.show();
}

registerForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var formData = new FormData(ev.currentTarget);
  var userExists = users.find(function (user) {
    return user.email === formData.get("email");
  });
  if (userExists) {
    showToast("Error", "User already exists!");
    return;
  }
  users.push({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  localStorage.setItem("users", JSON.stringify(users));
});

loginForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var formData = new FormData(ev.currentTarget);
  var userCreds = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  var userExists = users.find(function (user) {
    return user.email === userCreds.email;
  });
  console.log(users);
  console.log(userExists);
  if (!userExists) {
    showToast("Error", "Invalid email or password")
    return;
  }
  if (userExists.password !== userCreds.password) {
    showToast("Error", "Invalid email or password");
    return;
  }
  localStorage.setItem("isLoggedIn", "true");
  location.href = "index.html";
});
console.log("hello")