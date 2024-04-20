function handleClick(name) {
  console.log("WOrking...", name);
}
function makeFieldYellow() {
  this.style.color = "yellow";
}
function checkAddress(id) {
  var inputElement = document.getElementById(id);
  if (inputElement.value) {
    console.log(inputElement.value);
  } else {
    inputElement.value = "abc@abc.com";
  }
}
function readMore() {
  var para = document.getElementById("para");
  para.innerHTML =
    "They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp <a href = '' > branches </a> for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
}

function toggleVisibility() {
  var div = document.getElementById("div");
  var btn = document.getElementById("btn");
  if (div.classList.contains("hide")) {
    btn.innerText = "Hide";
    div.classList.remove("hide");
  } else {
    btn.innerText = "Show";
    div.classList.add("hide");
  }
}

var divs = document.getElementsByClassName("div");
for (let i = 0; i < divs.length; i++) {
    var para = divs[i].getElementsByTagName("p")
    console.log(para)
}

// var divs = document.getElementsByTagName("input");
// console.log(divs);


// var div = document.getElementById("div");
// var para = div.getElementsByTagName("p")
// console.log(para)