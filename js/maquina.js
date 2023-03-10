let maquina = document.getElementById("texto");

let writing = (str) => {
  let arrFromStr = str.split("");
  let i = 0;
  let printStr = setInterval(function () {
    maquina.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      clearInterval(printStr);
    }
  }, 200);
};

writing("Bienvenidos a Nuestros Servicios");
