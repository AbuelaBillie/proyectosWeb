window.addEventListener("load", function () {
  const servicio = document.querySelector(".contenedorServicios");
  const renderizarServicios = () => {
    servicios.forEach((obj) => {
      const cardHTML = `<div class="servicio">
            <img src="./img/iconMejorPsi.png" alt="Icono Mejor.psi">
          <div class="nombreServicio">
              <h3>${obj.servicio}</h3>
            </div>
            <div class="comentarioServicio">
              <p>${obj.descripcion}</p>
            </div>
            </div>`;
      servicio.innerHTML += cardHTML;
    });
  };
  renderizarServicios();
});
