function makeBig() {
  var p = document.querySelector("p");
  p.style.fontSize = "2rem";
  var margin = p.style.margin;
  console.log(margin);
  p.setAttribute("title", "Paragraph");
  //   var attr = p.setAttribute("title")
  //   console.log(attr)
}
var a = document.querySelector("div").childNodes[1].nodeValue
// var b = document.childNodes[1].childNodes[0]
console.log(a)
