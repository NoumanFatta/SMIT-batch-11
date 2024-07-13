window.addEventListener("load", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    location.pathname = "/index.html";
  }
});
