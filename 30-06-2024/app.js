// const func = () => {
//   let name = "Mozilla";
//   return () => {
//     name = "chrome";
//     return name;
//   };
// };
// const closure = func();
// const browser = closure();
// console.log(browser)

// let age = 20;
// const func = () => {
//     let age = 18;
// };

// console.log(age);

// Global, Local, and Block
let g = 10;
{
  let b = 5;
  //   console.log(g);
  //   console.log(b);
}
// var bool = true;
// var a = "1";
// (() => {
//   if (bool) {
//     var a = "2";
//   } else {
//     a = "3";
//   }
// })();

// console.log(a);
// (() => {
//   let l = 200;
//   console.log(l);
// })();

// for (let i = 0; i < 4; i++) {
//   console.log("start");
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
//   console.log("end");
// }
var i = 0;
const interval = setInterval(() => {
  i++;
  console.log(i);
  if(i === 5){
    clearInterval(interval)
  }
}, 1000);

console.log(interval)

console.log(i)