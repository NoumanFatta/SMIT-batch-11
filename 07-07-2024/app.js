import outerObj, { outer2, outer as outerRen } from "./app2.js";

// import * as all from "./app2.js";

const user = {
  id: 1,
  age: 18,
  fullName: {
    firstName: "foo",
    lastName: "bar",
  },
};

// const name = user.name
// const age = user.age
// const id = user.id
const age = 20;
const {
  age: userAge,
  id,
  fullName: { firstName, lastName },
} = user;
console.log(userAge, id, firstName, lastName);

const fruits = ["apple", "banana", "guava", "mango"];

const [, b, , m] = fruits;
console.log(m, b);

// const temp = y;

// y = x;
// x = temp;

// console.log(x, y);

let x = "1";
let y = "2";
[y, x] = [x, y]; // [1, 2]
console.log(x, y);

// spread operator

const arr1 = ["1", "2", "3", ["4", "5"]];
const arr2 = [...arr1.slice(0, 3), ...arr1[3]];
// let array2 = ["4", "5", "6"];

console.log(arr2);

const countries = ["pak", "ind", ["iran", "iraq"], "usa"];
const countries2 = [...countries];
countries[0] = "china";
countries[2] = [...countries[2], "china"];
console.log(countries);
console.log(countries2);

const walk = () => {
  console.log(`${this} is walking`);
};
const fullName = {
  fName: "foo",
  lName: "bar",
};
const usr1 = {
  name: "foo",
  age,
  id: 1,
  fullName,
  walk: function () {
    const inner = () => {
      console.log(`${this.name} is walking`);
    };
    inner();
  },
};

const usr2 = { ...usr1, fullName: { ...usr1.fullName } };

// const usr2 = JSON.parse(JSON.stringify(usr1));

usr1.name = "bar";
usr1.fullName.fName = "test";
console.log(usr1);
console.log(usr2);
usr1.walk();

const handleClick = () => {
  console.log(this);
};
document.querySelector("button").onclick = handleClick;

// abc()
console.log(outer2);
outerRen();
outer2();
console.log(outerObj);

