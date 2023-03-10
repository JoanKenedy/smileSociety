const servicios = document.getElementById("servicios");
const modal = document.getElementById("modal");
const textoModal = document.getElementById("texto-modal");
const textoModal2 = document.getElementById("texto-modal-dos");
const textoModal3 = document.getElementById("texto-modal-tres");
const textoModal4 = document.getElementById("texto-modal-cuatro");
const close = document.getElementById("close");
const containerModal = document.getElementById("container-modal");

servicios.addEventListener("click", delegacion);
close.addEventListener("click", function () {
  modal.classList.remove("open");
  containerModal.classList.remove("container-modal");
  close.classList.add("close");
  textoModal.classList.add("close");
  textoModal2.classList.add("close");
  textoModal3.classList.add("close");
  textoModal4.classList.add("close");
});

function delegacion(e) {
  const ventana = e.target.classList[0];
  switch (ventana) {
    case "item-1":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";

      textoModal.innerHTML =
        "Nos comprometemos a diagnosticar y planear los tratamientos con los especialistas. Nos dedicamos a prevenir el avance de enfermedades como caries, gingitivis, desarrollo de maloclusiones, así como diagnosticar otras enfermedades orales. Mediante tus revisiones de control y profilaxis, cuidamos tu salud bucal y tu bienestar.";
      textoModal.classList = "texto-show";
      break;
    case "item-2":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Si estás interesado en renovar o transformar tu sonrisa, la ortodoncia es una de las especialidades que ayudan a lograr esto mediante el alineamiento de las piezas dentales. ";
      textoModal2.innerHTML =
        "Te brindamos distintas opciones de tratamiento de ortodoncia de acuerdo a tu condición y satisfacción. ";
      textoModal3.innerHTML =
        "Contamos con Brackets tradicionales (metálicos), brackets estéticos (zafiro), y alineadores invisibles, la última tecnología en ortodoncia.";
      textoModal4.innerHTML =
        "La Dra. Karla González, especialista en Ortodoncia, te atenderá con mucho gusto y te explicará la mejor opción de tratamiento para ti.";
      textoModal.classList = "texto-show";
      textoModal2.classList = "texto-show";
      textoModal3.classList = "texto-show";
      textoModal4.classList = "texto-show";
      break;
    case "item-3":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Cuidamos la salud bucal de tus peques, tratando de hacer de su de visita al dentista una buena experiencia y divertida. La Dra. Diana Gamboa especialista en odontopediatría y ortopedia maxilar, está está comprometida a cuidar y mantener los dientes de tus hijos sanos y fuertes. Así como diagnosticar y tratar cualquier alteración presente.";
      textoModal.classList = "texto-show";
      break;
    case "item-4":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Si presentas dolor en algún diente, o presentas algún proceso infeccioso se debe de valorar con un endodoncista. La Dra. Karen Reyes, con gusto te atenderá para valorar el caso y ofrecerte el tratamiento para eliminar tu molestia.";
      textoModal2.innerHTML =
        "Con el apoyo de la microscopía podemos observar detalles que no se ven a simple vista, nos ayuda a lograr mayor efectividad en nuestros tratamientos.";
      textoModal.classList = "texto-show";
      textoModal2.classList = "texto-show";
      break;
    case "item-5":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Si necesitas cirugía de terceras molares, extracciones, o cualquier tratamiento de cirugía bucal, El Dr. Patricio Fernández, con gusto te atenderá.";
      textoModal2.innerHTML =
        "Si sufres de dolor en la articulación temporomandibular, él te puede valorar y ofrecerte la mejor opción de tratamiento de acuerdo a tu caso, desde guardas oclusales, miorelajantes, entre otros.";
      textoModal.classList = "texto-show";
      textoModal2.classList = "texto-show";
      break;
    case "item-6":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Si te sangran las encías, sientes tus dientes flojos, o padeces de mal aliento, se debe de valorar con un periodoncista. La Dra. Fernanda Orozco, con gusto atenderá tus inquietudes sobre enfermedad de encías, cuidando tu salud bucal.";
      textoModal2.innerHTML =
        "Si has perdido un diente, es importante sustituirlo para poder devolverle la función y estética a tu boca. La Dra Fernanda, por medio de implantes dentales,  trabaja en conjunto con la Dra Estefany para solucionar tu condición.";
      textoModal.classList = "texto-show";
      textoModal2.classList = "texto-show";
      break;
    case "item-7":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Si presentas caries, fracturas, o hace falta un diente, podemos solucionarlo por medio de resinas, incrustaciones, coronas, o puentes. La Dra. Estefany Vargas valorará tu caso y te ofrecerà la mejor opción para devolver la función y estética a tu sonrisa manteniendo su salud bucal.";
      textoModal.classList = "texto-show";
      break;
    case "item-8":
      modal.classList = "open";
      containerModal.classList = "container-modal";
      close.classList = "btn-cerrar";
      textoModal.innerHTML =
        "Sabemos lo importante que es sonreír y que te sientas seguro de tu sonrisa para poderte expresar ampliamente con quienes te rodean. Si lo que buscas es renovar tu sonrisa o cambiar detalles estéticos, con gusto valoraremos tu condición para ofrecerte la mejor opción y verte sonreír feliz.";
      textoModal.classList = "texto-show";
      break;
  }
}
