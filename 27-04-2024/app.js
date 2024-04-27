var root = document.getElementById("root");
// root.innerHTML = "<div class = 'bg' > Hello, world!  </div>"

// var div = document.createElement("div");
// div.setAttribute("class", "bg");
// div.setAttribute("id", "child");
// var txt = document.createTextNode("Hello, world!");
// div.appendChild(txt);
// root.appendChild(div);
// root.removeChild(div);

var btn = document.querySelector("button");
function btnHandler(event) {
  console.log(event);
}
btn.addEventListener("click", btnHandler);

var form = document.querySelector("form");
function onSubmit(event) {
  event.preventDefault();
  console.log("hello");
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello");
});

var emails = ["a", "b"];
var passwords = ["123", "321"];
var amounts = [100, 200];
