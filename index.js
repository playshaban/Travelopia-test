const nav = document.querySelector("nav");
const alertBox = document.querySelector(".alert__box");

function openNav() {
  nav.classList.add("active");
}
function closeNav() {
  nav.classList.remove("active");
}

function showAlert() {
  alertBox.style.display = "flex";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}
