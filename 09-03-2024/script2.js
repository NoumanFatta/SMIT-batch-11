// var mithai = "chamcham";

// var mithai = prompt("Enter mithai's name");
// if (mithai === "gulab jamun") {
//   alert("Le aao!");
// } else if (mithai === "chamcham") {
//   alert("aane do!");
// } else if (mithai === "barfi") {
//   alert("chalegi!");
// } else {
//   alert("rhne do!");
// }

// var a = 1;
// if (a === 1) console.log("Right");
// else console.log("Wrong");
// console.log("hello");

// 1. Ask user for val 1
// 2. Ask user for operation ("+","-","*","/")
// 3. Ask user for val 2
// 4. print the resut

// =================== CHAPTER 11=========================

// var firstName = "Nouman";
// var lastName = "Fatta";
// var fullName = firstName + " " + lastName;
// var x = 5;
// var y = 10;
// var totalCost = 50;

// if (fullName === "Nouman Fatta") {
//   console.log("pass", fullName);
// }

// if (totalCost === 25 * 2) {
//   console.log("Right");
// }
// if (x * y === 3 * 5) {
//   console.log("Right 2");
// } else {
//   console.log("wrong");
// }

// var x = 10;
// if (x !== 8) {
//   console.log("Right");
// } else {
//   console.log("Wrong");
// }

// if (7 >= 6) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var a = 10;
// if (a === 10) {
//   console.log("Right");
// }
// if (a > 9) {
//   console.log("right 2");
// }
// if (a > 10) {
//   console.log("right 3");
// } else {
//   console.log("wrong 1");
// }

// =================== CHAPTER 13=========================

// var currentTime = 5;
// var timeLimit = 5;

// if (currentTime <= timeLimit) {
//   var age = +prompt("What is your age?");
//   if (age >= 18) {
//     var haveNIC = prompt("Do you have NIC?");
//     if (haveNIC === "YES") {
//       console.log("You can vote!");
//     } else {
//       console.log("Please bring NIC!");
//     }
//   } else {
//     console.log("You are not eligible!");
//   }
// } else {
//   console.log("time over!");
// }

// var rice = "biryani";
// var salan = "karahi";
// var drink = "koi or";

// var str = "string";
// var num = 1;
// var bool = true;

// if (
//   rice === "biryani" &&
//   salan === "karahi" &&
//   (drink === "cola" || drink === "pakola")
// ) {
//   console.log("Aane do!");
// } else {
//   console.log("rehne do!");
// }

// =================== CHAPTER 14=========================
// var x = 5;
// var y = 5;
// var a = 1;
// var b = 4;
// var c = 8;
// var d = 40;

// if ((x === y || a === b) && c * 5 === d) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var perc = 59;

// if (perc >= 80 && perc <= 100) {
//   console.log("A+");
// } else if (perc >= 70) {
//   console.log("A");
// } else if (perc >= 60) {
//   console.log("B");
// }

// =================== CHAPTER 15=========================

// var cities = ["kiranchi", "lor", "burger"];
// cities = ["quetta", "multan"];
// console.log(cities);
// console.log(cities[2]);

// =================== CHAPTER 16=========================

// var cities = [];
// cities[0] = "islamabad";
// cities[1] = "karachi";
// cities[2] = "multan";
// cities[3] = "quetta";
// console.log(cities);
// cities.pop();
// console.log(cities);
// cities.push("peshawar", "gawadar", "hyderabad");
// console.log(cities);

// =================== CHAPTER 16 - 18=========================

// cities.shift();
// console.log(cities);
// cities.unshift("faislabad", "larkana");
// console.log(cities);

// var alphabets = ["a", "b", "c", "d", "e"];
// console.log(alphabets);
// alphabets.splice(0, 0, "f");
// console.log(alphabets);

// var alphNum = ["a", 1, 2, 3, "b", "c", "d"];
// console.log(alphNum);
// var nums = alphNum.slice(1, 4);
// console.log(nums);
// console.log(alphNum)

// var cities = ["khi", "lhr", "isl"];
// var userCity = "psh";

// if (
//   userCity === cities[0] ||
//   userCity === cities[1] ||
//   userCity === cities[2]
// ) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }

// var table = +prompt("Enter the table number");
// var multiplier = +prompt("Enter multiplier");

// 2 X 1 = 2*1
// 2 X 2 = 2*2
// 2 X 3 = 2*3

// for (var i = 0; i <= multiplier; i++) {
//   console.log(table, "x", i, "=", table * i);
// }

var cities = ["khi", "lhr", "isl", "pesh"];
var userCity = "h";
var isEligible = false;

for (var i = 0; i < cities.length; i++) {
  if (userCity === cities[i]) {
    isEligible = true;
    break;
  }
}

if (isEligible) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}
