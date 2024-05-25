var btn = document.querySelector("#btn");
var city = document.querySelector("#city");
if (btn) {
  btn.addEventListener("click", function () {
    var value = city.value;
    // console.log(city.options[0].text)
    // var text = city.options[city.selectedIndex].text;
    console.log(text, "text");
    console.log(value, "value");
  });
}

// var currentUser = {
//   id: 1,
//   userName: "Test 1",
// };
var profileLink = document.querySelector("#profile-link");
if (profileLink) {
  profileLink.href = `profile.html?id=1`;
}

var urlParams = new URLSearchParams(location.search);
var paramId = urlParams.get("id");
if (paramId) {
  var users = JSON.parse(localStorage.getItem("users"));
  var currentUser = users.find(function (user) {
    return user.id === paramId;
  });
  console.log(currentUser);
  var greet = document.querySelector("#greet");
  greet.textContent += `${currentUser?.userName}`;
}

function greetWorld() {
  try {
    var greeting = "Hello world!";
    aler(greeting);
  } catch (err) {
    console.log(err)
    // alert(err);
  }
}
console.log("hello")
greetWorld();
