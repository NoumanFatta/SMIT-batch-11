window.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    location.pathname = "/index.html";
  }
});
const quiz = JSON.parse(localStorage.getItem("quiz")) || [];
let currQues = 0;
let score = 0;
const renderQuestion = (qIndex) => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const curQuizQ = quiz[qIndex];
  if (qIndex !== 0) {
    if (!selectedOption?.value) {
      alert("Please select an option");
      return;
    } else {
      if (quiz[qIndex - 1].corAns === selectedOption.value) {
        score++;
      }
    }
  }
  if (!curQuizQ) {
    endQuiz();
    return;
  }
  const quesDiv = document.querySelector("#quesDiv");
  quesDiv.innerHTML = curQuizQ.question;
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  curQuizQ.options.forEach((option) => {
    const li = document.createElement("li");
    li.innerHTML = `<label> <input id = ${option} type = "radio" name = "option" value = '${option}' />  ${option}  </label>`;
    ul.append(li);
  });
  if (currQues !== quiz.length) {
    currQues++;
  }
};

renderQuestion(currQues);

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
  renderQuestion(currQues);
});

const endQuiz = () => {
  const root = document.querySelector("#root");
  root.innerHTML = `<h1> Quiz has been finished! ${score} </h1>`;
};
