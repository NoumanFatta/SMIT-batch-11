function Person(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
}
Person.prototype.walk = function () {
  console.log(
    `${this.fName} ${this.lName} is walking and he is ${this.age} years old`
  );
};
Person.prototype.numOfHearts = 1;
var person1 = new Person("Hassan", "Hussain", 20);
var specialPerson = new Person(null, null, 0);
console.log(person1);
specialPerson.numOfHearts = 0;
console.log(specialPerson);
person1.walk();

var propExits = "agse" in person1;
console.log(propExits);

for (var prop in person1) {
  if (typeof person1[prop] === "function") {
    person1[prop]();
  } else {
    console.log(person1[prop]);
  }
}
var abc = "lName"
console.log(person1[abc], "==========");
