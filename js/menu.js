let abrir = document.getElementById("abrir");
let enlacesheader = document.getElementById("enlacesheader");
let link = document.querySelectorAll(".nav-link");
let semaforo = true;

document.getElementById("abrir").addEventListener("click", function () {
  enlacesheader.classList.toggle("menudos");
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    enlacesheader.classList.remove("menudos");
  });
}
