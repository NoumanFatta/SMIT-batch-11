const fn = () => {
  const a = "1";
  console.log(`value of a = ${a}`);
  function inner() {
    // a = "2";
    return a;
  }
  return inner;
};
const closure = fn();
const result = closure();
console.log(result);

const fName = "John";
const lName = "Doe";
const profession = "Software Engineer";
const fullName = () => {
  return `${fName} ${lName}`;
};

// const msg = "My name is " + fName + " " + lName + ". I am a " + profession;
// const msg = `My name is ${fName} ${lName}. I am a ${profession}`
const msg = `My name is ${fullName()}. I am a ${profession}`;
console.log(msg);
const sum = `Sum of 5 and 6 is ${5 + 6}`;
console.log(sum);

const userDetails = {
  firstName: "John",
  lastName: "Ducket",
  age: 20,
  familyDetails: {
    siblings: 2,
    children: 0,
    wife: 4,
  },
};
// const firstName = userDetails.firstName;
// const lastName = userDetails.lastName;
// const age = userDetails.age;

const {
  firstName: fiName,
  age,
  familyDetails,
  familyDetails: { siblings },
} = userDetails;
console.log(fiName, age, familyDetails, siblings);

const arr = [2, 4, 6, 8, 10];
const [, , a] = arr;
console.log(a);

const sumFun = (a = 0, b = 0) => {
  return a + b;
};


const greetUser = (userName = "Test") => {
    console.log(`Hello ${userName}`)
}

const resultSum = sumFun(undefined, undefined);

console.log(resultSum);
greetUser("John")
