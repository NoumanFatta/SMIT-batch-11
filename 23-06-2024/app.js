// let a = 1;
// a = 2;
// const b = 2;
// b = 4;
// console.log(a);
// console.log(b);

// let a = 0;
// function test() {
//   let a = "hello";
//   a = 1;
// }
// test();
// console.log(a);

// let a = 0;

// {
//   a = 1;
//   console.log(a);
// }
// console.log(a);

// console.log(aaaaa);
// var aaaaa = "test";

let fName = "John";
let lName = "Elia";
let fullName = `${fName} ${lName}`;
console.log(`${fullName}`);

const user = {
  fName: "John",
  lName: "Elia",
  age: 70,
};

const { lName: customLName, age, fName: customFName } = user;
console.log(customLName, customFName);

const arr = [1, 2, 3, 4];

const [, b, , c] = arr;
console.log(b, c);

let f = 1;
let s = 2;

let t = f;
f = s;
s = t;
console.log(`f = ${f} and s = ${s}`);

let one = 1;
let two = 2;
[two, one] = [one, two];
console.log(two)
console.log(one)

// const name = user.fName;
// const secondName = user.lName;
// console.log(name)
// console.log(secondName)

// {
//   var v = 1;
//   v = 2;
// }
// console.log(v);
