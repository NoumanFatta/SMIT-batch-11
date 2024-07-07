const greet = (userName, age = 18) => {
  console.log(`Hello, ${userName}. Your age is ${age}`);
};
const userName = undefined;
greet("userName", 20);

const sum = (...rest) => {
  let num = 0;
  rest.forEach((elem) => {
    num += elem;
  });
  return num;
};

const result = sum(5, 2, 3, 8);
console.log(result);

const fruits = ["Apple", "Banana", "Guava"];
const users = [
  {
    userId: 1,
    userName: "foo",
    isAdult: false,
  },
  {
    userId: 2,
    userName: "bar",
    isAdult: true,
  },
  {
    userId: 3,
    userName: "foo",
    isAdult: true,
  },
];
const idx = fruits.findIndex((elem, index) => {
  return elem === "Guavas";
});
console.log(idx);

const foundUser = users.find((elem) => {
  return elem.userName === "foo";
});

const numbers = [1, 2, 3, 4];

const n = numbers.map((elem) => {
  return elem + 3;
});

console.log(n);

// const b = users.forEach((elem, index) => {
//   console.log(elem,index);
// });

// console.log(b)

// console.log(foundUser);

const filt = users.filter((elem) => {
  return elem.userName !== "foo";
});
const eve = users.every((elem) => {
  return elem.isAdult === true;
});
