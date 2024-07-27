// const fn = () => {
//   const a = "1";
//   console.log(`value of a = ${a}`);
//   function inner() {
//     // a = "2";
//     return a;
//   }
//   return inner;
// };
// const closure = fn();
// const result = closure();
// console.log(result);

// const fName = "John";
// const lName = "Doe";
// const profession = "Software Engineer";
// const fullName = () => {
//   return `${fName} ${lName}`;
// };

// // const msg = "My name is " + fName + " " + lName + ". I am a " + profession;
// // const msg = `My name is ${fName} ${lName}. I am a ${profession}`
// const msg = `My name is ${fullName()}. I am a ${profession}`;
// console.log(msg);
// const sum = `Sum of 5 and 6 is ${5 + 6}`;
// console.log(sum);

// const userDetails = {
//   firstName: "John",
//   lastName: "Ducket",
//   age: 20,
//   familyDetails: {
//     siblings: 2,
//     children: 0,
//     wife: 4,
//   },
// };
// // const firstName = userDetails.firstName;
// // const lastName = userDetails.lastName;
// // const age = userDetails.age;

// const {
//   firstName: fiName,
//   age,
//   familyDetails,
//   familyDetails: { siblings },
// } = userDetails;
// console.log(fiName, age, familyDetails, siblings);

// const arr = [2, 4, 6, 8, 10];
// const [, , a] = arr;
// console.log(a);

// const sumFun = (a = 0, b = 0) => {
//   return a + b;
// };

// const greetUser = (userName = "Test") => {
//   console.log(`Hello ${userName}`);
// };

// const resultSum = sumFun(undefined, undefined);

// console.log(resultSum);
// greetUser("John");

// console.log("========================");

// const claculateSum = (...rest) => {
//   let sum = 0;
//   rest.forEach((elem, ind) => {
//     if (elem) {
//       sum += elem;
//     }
//   });
//   return sum;
// };

// console.log(claculateSum(2, 5, 8, undefined, 10));

// // const fruits2 = ["Watermelon", "Grapes", "Cherry"];

// const fruits1 = ["Apple", ["Orange", "Guava"], "Mango", "Sapodilla"];
// // const copyFruit = [...fruits1, ...fruits1[1]];
// const copyFruit = fruits1.slice(0);
// copyFruit[1][0] = "Saib";
// console.log(copyFruit);
// console.log(fruits1);
// copyFruit[copyFruit.length - 1] = "Chikoo";
// copyFruit[1][0] = "Malta";
// console.log(copyFruit);
// console.log(fruits1);

// console.log("==================================");

// const user = {
//   name: "John Doe",
//   age: 20,
// };

// const user2 = { ...user };
// user2.name = "John Ducket";
// console.log(user);
// console.log(user2);

// const months = ["jan", "feb", "march"];

// const newMmonths = ["apr", "may", "june"];

// let string = "Hello";
// string.toLowerCase();
// console.log(string);

// // const foundElem = [1, 5, 10, 15].find((e) => e === 15);
// // console.log(foundElem);

// // const greetUser = (userName) => `Hello, ${userName}`;

// // console.log(greetUser("John"));

// // const filter = [
// //   { id: 1, name: "john" },
// //   { id: 2, name: "john" },
// //   { id: 3, name: "dukcet" },
// // ].filter(ele => ele.name === "john");

// // console.log(filter);

// const fullName = "Muavia";
// const age = 20;

// const userDetails = {
//   fullName,
//   age,
//   walk: function () {
//     const inner = () => {
//       console.log(`${this.fullName} is walking and his age is ${this.age}`);
//     };
//     inner();
//   },
// };
// userDetails.walk();

// const arr = [2, 4, 6];
// // for (const index in arr) {
// //   console.log(arr[index]);
// // }
// // const obj = {
// //   a: "a",
// //   b: "b",
// // };
// for (const [index, value] of arr.entries()) {
//   console.log(`index = ${index}`, `value = ${value}`);
// }

// const index = 0;
// const value = 2;
// const array = [index, value];

// const [] = array;

// const fn = () => {
//   console.log(">>>>>", 1);
//   console.log(">>>>>", 2);
//   console.log(">>>>>", 3);
// };
// fn();

function* fn() {
  console.log(">>>>>", 1);
  yield "A";
  console.log(">>>>>", 2);
  yield "B";
  console.log(">>>>>", 3);
  yield "C";
}

// console.log(fn());
const gen = fn();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* loop() {
  let id = 0;
  while (true) {
    id++;
    yield id;
  }
}
const result = loop();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
const array = ["a", "b", "c"];
const it = array[Symbol.iterator]();
// for(const a of it){
//   console.log(a)
// }
console.log("=====================");

// For of loop me agar normal array ko iterate krenge tou element return hoga.
// For in loop // / / / / // / / / // / / / / / / / // /  index
// For in loop object me keys return hongi.

// For of object pe nhi chlega

const obj = { a: "A" };
for (const a in [2, 5, 10]) {
  console.log(a);
}

function* makeRangeIterator(start = 0, end = 10, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
console.log("--------------------------");
const iterator = makeRangeIterator(5, 10, 3);
// for (const a of iterator) {
//   console.log(a);
// }
console.log("----------------------------end ", iterator.next());
console.log("----------------------------end ", iterator.next());
console.log("----------------------------end ", iterator.next());
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//     next() {
//       let result;
//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };
//   return rangeIterator;
// }

// const
// for (let a of makeRangeIterator(1, 10).next()) {
//   console.log(a);
// }

function* makeArrayIterator(arr) {
  for (let index = 0; index < arr.length; index++) {
    yield [index, arr[index]];
  }
}
const arr = [10, 20, 30]
const iter = makeArrayIterator([10, 20, 30]);
for (const iterator of iter) {
  console.log(iterator)
}
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
