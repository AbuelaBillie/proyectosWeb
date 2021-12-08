//////////////////////DRAGGEO DE VENTANAS////////////////////////
const ventana = document.querySelectorAll(".ventanaActiva");

for (let i = 0; i < ventana.length; i++) {
  ventana[i].addEventListener("mousedown", mousedown);

  function mousedown(vent) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    ventana[i].style.zIndex = 99;

    let Xactual = vent.clientX;
    let Yactual = vent.clientY;

    function mousemove(vent) {
      let nuevoX = Xactual - vent.clientX;
      let nuevoY = Yactual - vent.clientY;

      const rect = ventana[i].getBoundingClientRect();

      ventana[i].style.left = rect.left - nuevoX + "px";
      ventana[i].style.top = rect.top - nuevoY + "px";

      Xactual = vent.clientX;
      Yactual = vent.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    }
  }
}
/////////////////////////////////////////////////////////////////


/////////////////////BOTÓN CERRAR VENTANAS///////////////////////
const btnCerrar = document.querySelectorAll("#cerrarVentana");

for (let i = 0; i < btnCerrar.length; i++) {
  btnCerrar[i].addEventListener("click", () => {
    const ventanaAbierta = btnCerrar[i].parentNode.parentNode;
    ventanaAbierta.classList.add("oculto");
    ventanaAbierta.classList.remove("ventanaActiva");
  });
}
/////////////////////////////////////////////////////////////////


//////////////////////////BOTÓN MIS_DATOS////////////////////////
const btnMisDatos = document.querySelector(".btnMisDatos");

btnMisDatos.addEventListener("click", () => {
  const ventMisDatos = document.querySelector("#ventMisDatos");

  ventMisDatos.classList.add("ventanaActiva");
  ventMisDatos.classList.remove("oculto");
})
/////////////////////////////////////////////////////////////////


////////////////////////BOTÓN CONOCIMIENTOS//////////////////////
const btnConocimientos = document.querySelector(".btnConocimientos");

btnConocimientos.addEventListener("click", () => {
  const ventConocimientos = document.querySelector("#ventConocimientos");

  ventConocimientos.classList.add("ventanaActiva");
  ventConocimientos.classList.remove("oculto");
})
/////////////////////////////////////////////////////////////////


//////////////////////////BOTÓN PROYECTOS////////////////////////
const btnProyectos = document.querySelector(".btnProyectos");

btnProyectos.addEventListener("click", () => {
  const ventProyectos = document.querySelector("#ventProyectos");

  ventProyectos.classList.add("ventanaActiva");
  ventProyectos.classList.remove("oculto");
})
/////////////////////////////////////////////////////////////////


///////////////////////////BOTÓN INICIO//////////////////////////
const btnInicio = document.querySelector(".botonInicio");

btnInicio.addEventListener("click", () => {
  const ventInicio = document.querySelector(".inicio");

  ventInicio.classList.toggle("oculto");
  btnInicio.classList.toggle("inicioSeleccionado");
})
/////////////////////////////////////////////////////////////////


///////////////////////////BOTÓN SALUDOS/////////////////////////
const btnSaludos = document.querySelector(".btnSaludos");

btnSaludos.addEventListener("click", () => {
  const ventSaludos = document.querySelector("#ventSaludos");

  ventSaludos.classList.add("ventanaActiva");
  ventSaludos.classList.remove("oculto");
})
/////////////////////////////////////////////////////////////////


////////////////////////VENTANAS AL FRENTE///////////////////////
let indexVentana = 0;
for (let i = 0; i < ventana.length; i++) {
  ventana[i].addEventListener("click", () =>{
  indexVentana ++;
  ventana[i].style.zIndex = indexVentana;
  });
}
/////////////////////////////////////////////////////////////////




