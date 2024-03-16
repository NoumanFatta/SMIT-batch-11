// var fNames = ["Adil", "Furqan", "Irtiza"];
// var lNames = ["Jutt", "Khan", "Arain"];

// for (var i = 0; i < fNames.length; i++) {
//   for (var j = 0; j < fNames.length; j++) {
//     console.log(fNames[i] + " " + lNames[j]);
//   }
// }

// =========CHAPTER 21 ================

// var cities = ["karachi", "lahore", "islamabad"];
// var input = prompt("Enter your city");
// var convertedInput = input.toLowerCase();
// var isEligible = false;
// console.log(convertedInput.toUpperCase(), input);
// console.log(convertedInput)
// for (var i = 0; i < cities.length; i++) {
//   if (convertedInput === cities[i]) {
//     isEligible = true;
//     break;
//   }
// }

// if (isEligible) {
//   console.log("You are eligible");
// } else {
//   console.log("You are not eligible");
// }

// var str = "kARachi";
// var firstLetter = str.slice(0, 1).toUpperCase();
// var rest = str.slice(1).toLowerCase();
// console.log(firstLetter + rest);

var text = "i World War II was started in September 1, 1939. World War II";
// var banPhrase = "September";
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + banPhrase.length) === banPhrase) {
//     text =
//       text.slice(0, i) + "Sept" + text.slice(i + banPhrase.length);
//   }
// }
// console.log(text);

var arr = ["khi", "lhr", "isl"];
console.log(text.indexOf("World War IIs"));

var text = "To be or not to be be.";
var segIndex = text.lastIndexOf("be");

console.log(segIndex)

// World War II was started in sept
