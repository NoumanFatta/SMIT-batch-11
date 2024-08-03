// import * as all from "./vars.js";
// import { global, callDataFromServer } from "./vars.js";
// // // console.log(global);

// // console.log(dataFromServer());
// // console.log(all.global);
// // let g = global;
// // g = "hello";
// // console.log(g, "=========");
// // console.log(all.callDataFromServer());
// // console.log(all.default.push("hello"));
// // console.log(all.default);

// // console.log(global);
// // console.log(callDataFromServer());

// const fruits = new Map();

// fruits.set("orange", 200);
// fruits.set("apple", 500);
// fruits.set("bananana", 600);
// console.log(fruits);
// console.log(fruits.size);
// fruits.delete("bananana");
// console.log(fruits.size);

// for (const [key, value] of fruits) {
//   console.log(key, value);
// }

// const obj = {
//   b: "b",
//   a: "a",
// };

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     console.log(key);
//   }
// }

// console.log(obj);

// const vegetables = ["🍅", "🥔", "🍆", "🥒"];
// const users = [
//   { id: 1, name: "Writer op", age: 28 },
//   { id: 2, name: "Rider op", age: 30 },
//   { id: 3, name: "Shayar op", age: 35 },
//   { id: 4, name: "Developer op", age: 25 },
//   { id: 5, name: "Hacker op", age: 12 },
//   { id: 6, name: "Designer op", age: 15 },
// ];
// const foundVeg = vegetables.find((e) => e === "🍅");
// const foundUser = users.find((e) => e.id === 3);
// console.log(foundUser);
// console.log(foundVeg);
// const filteredUsers = users.filter((e) => e.age >= 30);
// console.log(filteredUsers);

// const modifiedUsers = users.map((elem) => {
//   //   let isAdult = false;
//   //   if (elem.age >= 18) {
//   //     isAdult = true;
//   //   }
//   const newObj = { ...elem };
//   newObj.isAdult = elem.age >= 18 ? true : false;
//   return newObj;
// });
// console.log(users);
// console.log(modifiedUsers);

// const age = 18;
// const name = "john";
// const isZinda = false;

// let msg = `My name is ${name}. I am ${age} years old. I am${
//   age >= 18 ? (isZinda === true ? "" : " not") : " not"
// } eligible for casting vote`;

// const isAdult = age >= 18 || false;
// console.log(isAdult);
// console.log(msg);

// const temp = 25;
// const isGarmi = temp >= 25 || false;
// const serverVal = "Hello, Pakistan";
// let val = "hello, world!";
// if (serverVal !== undefined && serverVal !== null) {
//   val = serverVal;
// }

// console.log(val, "+=====");

// // if (temp >= 25) {
// //   isGarmi = true;
// // }
// console.log(isGarmi);
// console.log(val);
// const fruits = ["banana", "apple", "cherry"];
// const nums = [10, 50, 5, 2];
// console.log(fruits.every((e) => e === "apple"));

// fruits.reverse();
// nums.sort((a, b) => a - b);
// console.log(fruits);
// console.log(nums);

// const firstArray = [{ id: "1" }, { id: "2" }, { id: "3" }];
// const secondArray = [{ id: "4" }, { id: "5" }, { id: "6" }];

// // const concat = [...firstArray, ...secondArray];
// const concat = firstArray.concat(secondArray);
// secondArray[0].id = "10";
// console.log(concat);

// const arr = [10, 20, 30, 40];
// const sum = arr.reduce((prev, cur) => {
//   console.log({ prev }, { cur });
//   return prev + cur;
// }, 50);
// console.log(sum);

// console.log("===== Start =====");

// setTimeout(() => {
//   console.log("timer running");
// }, 0);

// console.log("===== End =====");

const retObj = () => {
  return { id: 1, name: "nouman" };
};
// console.log(retObj())
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => {
//   r.json().then((data) => {
//     console.log(data);
//   });
// });
const ul = document.querySelector("#ul");

const renderList = (listData) => {
  listData.forEach((element) => {
    ul.innerHTML += `<li>${element.title}</>`;
  });
};

console.log("START");
let arr = [];
fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
  response.json().then((data) => {
    document.querySelector("h1").style.display = "none";
    setTimeout(() => {
      arr = data;
    }, 5000);
  });
});
document.querySelector("button").addEventListener("click", () => {
  if (arr.length) {
    renderList(arr);
  } else {
    console.log("Data is empty");
  }
});
console.log("END");
