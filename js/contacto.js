const btnContacto = document.getElementById("contacto");
const containerBtn = document.getElementById("contacto-show");

btnContacto.addEventListener("click", function () {
  containerBtn.classList.toggle("show-btn");
});
