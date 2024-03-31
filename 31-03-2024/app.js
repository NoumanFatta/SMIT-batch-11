// function tellTime() {
//   console.log("start of function");
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   console.log("time: " + theHr + ":" + theMin);
// }
// console.log("rest of the code");
// tellTime();
// console.log("in between");
// tellTime();
// tellTime();

// function add(num1, num2) {
//   const result = num1 + num2;
//   console.log("Result of " + num1 + " + " + num2 + " is " + result);
// }
// var num1 = 3;
// var num2 = 5;
// add(num1, num2);

// function greetUser(userName) {
//   console.log("Hello, " + userName);
// }
// greetUser("Waqas");
// greetUser("Arman");
// greetUser("Farhan");

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Inavlid operator";
  }
}
// const result1 = calculator(6, 9, "+");
// console.log(result1);
// const result2 = calculator(6, 9, "*");
// console.log(result2);

function printResult() {
  const result = calculator(6, 9, "*");
  console.log(result);
}

printResult();

console.log(calculator(6, 9, "+"));

var resultPlus1 = calculator(6, 9, "+") + 1;
console.log(resultPlus1);

var something = "something";

function changeSomething() {
  something = "Hello";
}
console.log(something);
changeSomething();
console.log(something);
