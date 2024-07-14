window.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    location.pathname = "/index.html";
  } else if (currentUser !== "admin@admin.com") {
    location.pathname = "/index.html";
  }
});
const allQuiz = JSON.parse(localStorage.getItem("quiz")) || [];
const question = document.querySelector("#question");
const submitBtn = document.querySelector("#submit");
const options = [];
submitBtn.addEventListener("click", () => {
  const qVal = question.value;
  console.log(qVal);
  const newQuestion = {
    question: qVal,
    options,
    corAnswer: "Programming Langauge",
  };
  allQuiz.push(newQuestion);
  localStorage.setItem("quiz", JSON.stringify(allQuiz));
});

const addBbtn = document.querySelector("#add");
addBbtn.addEventListener("click",() =>{
    options.push()
})
