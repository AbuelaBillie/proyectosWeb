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
