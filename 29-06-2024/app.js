// var x = 0;
// var x = 1;

let x = 3;
x = 5;
const y = 1;
console.log(y);
console.log(x);

let test = "hello";
console.log(test);

abc();

function abc() {
  console.log("Calling abc...");
}

// const fn = () => {
//   console.log("This is function", this);
// };
// fn();

const obj = {
  a: "a",
  b: "b",
  nest: {
    c: "c",
  },
};

const {
  nest: { c },
} = obj;

console.log(c);

const arr = [1, 23, 21, [0, 10, 2]];
const [, , , [, z]] = arr;
console.log(z);

// Initiate coun

// const add = (() => {
//   let counter = 0;
//   return () => {
//     counter += 1;
//     return counter;
//   };
// })();

// const add = () => {
//   let counter = 0;
//   counter++;
// };

// add();

// console.log(counter)

// let val = add();
// val = add()
// val = add()
// console.log(val);

// console.log(add());
// console.log(add()());

const outer = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const fn = outer();
console.log(fn());

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    name = "Chrome";
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

if (Math.random() > 0.5) {
  let hello = 1;
} else {
  let hello = 2;
}

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// console.log();

const ul = document.querySelector("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const formData = new FormData(ev.currentTarget);
  if (formData.get("des")) {
    const li = document.createElement("li");
    li.innerText = formData.get("des");
    ul.appendChild(li);
  }
});

const button = document.querySelector("button");
button.onclick = () => {
  const color = Math.random() * 255;
  document.body.style.backgroundColor = `rgb(${color},${color},${color})`;
};

const inc = document.querySelector("#inc");
inc.onclick = () => {
  const p = document.querySelector("p");
  p.innerHTML = +p.innerText + 1;
};

const input = document.querySelector("#txt");
const h3 = document.querySelector("h3");
input.addEventListener("input", () => {
  h3.innerHTML = input.value;
});
