import { app, db } from "../firebase-init.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const auth = getAuth(app);
const todoList = document.querySelector("#todoList ul");

let userId;

const getTodos = async () => {
  const q = query(collection(db, "todo"), where("createdBy", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const { des, isDone } = doc.data();
    const li = `
    ${isDone ? `<s> <li> ${des} </li> </s> ` : `<li> ${des} </li> `}
    `;
    todoList.innerHTML += li;
  });
};

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // userId
    location.href = "login.html";
    return;
  }
  userId = user.uid;
  getTodos();
});

const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
});

const todoForm = document.querySelector("#todoForm");

todoForm.addEventListener("submit", async (ev) => {
  try {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const des = formData.get("des");
    const docRef = await addDoc(collection(db, "todo"), {
      des,
      createdAt: serverTimestamp(),
      isDone: false,
      createdBy: userId,
    });
    const li = `
    <li> ${des}</li>
    `;
    todoList.innerHTML += li;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
