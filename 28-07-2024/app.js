import * as all from "./vars.js";
import { global, callDataFromServer } from "./vars.js";
// // console.log(global);

// console.log(dataFromServer());
// console.log(all.global);
// let g = global;
// g = "hello";
// console.log(g, "=========");
// console.log(all.callDataFromServer());
// console.log(all.default.push("hello"));
// console.log(all.default);

// console.log(global);
// console.log(callDataFromServer());

const fruits = new Map();

fruits.set("orange", 200);
fruits.set("apple", 500);
fruits.set("bananana", 600);
console.log(fruits);
console.log(fruits.size);
fruits.delete("bananana");
console.log(fruits.size);

for (const [key, value] of fruits) {
  console.log(key, value);
}

const obj = {
  b: "b",
  a: "a",
};

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key);
  }
}

console.log(obj);

const vegetables = ["🍅", "🥔", "🍆", "🥒"];
const users = [
  { id: 1, name: "Writer op", age: 28 },
  { id: 2, name: "Rider op", age: 30 },
  { id: 3, name: "Shayar op", age: 35 },
  { id: 4, name: "Developer op", age: 25 },
  { id: 5, name: "Hacker op", age: 12 },
  { id: 6, name: "Designer op", age: 15 },
];
const foundVeg = vegetables.find((e) => e === "🍅");
const foundUser = users.find((e) => e.id === 3);
console.log(foundUser);
console.log(foundVeg);
const filteredUsers = users.filter((e) => e.age >= 30);
console.log(filteredUsers);

const modifiedUsers = users.map((elem) => {
  //   let isAdult = false;
  //   if (elem.age >= 18) {
  //     isAdult = true;
  //   }
  const newObj = { ...elem };
  newObj.isAdult = elem.age >= 18 ? true : false;
  return newObj;
});
console.log(users);
console.log(modifiedUsers);

const age = 17;
const name = "john";

const msg = `My name is ${name}. I am ${age} years old. I am ${
  age >= 18 ? "" : "not"
} eligible for casting vote`;

console.log(msg)
