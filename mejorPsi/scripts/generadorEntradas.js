window.addEventListener("load", function () {
  const entrada = document.querySelector(".contenedorEntradas");
  const verMas = document.querySelector(".verMas");

  const renderizarEntradas = () => {
    for (let i = 0; i < 3; i++) {
      const cardHTML = `<div class="separador"></div>
          <article class="entrada">
            <h2>${entradas[i].titulo}</h2>
            <h4>Escrito por: <a id="autor" href="">${entradas[i].autor}</a></h4>
            <img src="./img/${entradas[i].imagen}" alt="${entradas[i].altImagen}">
            <p class="introEntrada">${entradas[i].intro}</p>
            <p class="textoEntrada oculto">${entradas[i].texto}</p>     
            <p class="continuar">Continuar leyendo...</p>
          </article>`;
      entrada.innerHTML += cardHTML;
    }
  };
  renderizarEntradas();

  let entradasVisibles = document.querySelectorAll(".entrada");

  const cargarMas = () => {
    if (entradas.length > entradasVisibles.length) {
      const cardHTML = `<div class="separador"></div>
      <article class="entrada">
        <h2>${entradas[entradasVisibles.length].titulo}</h2>
        <h4>Escrito por: <a id="autor" href="">${
          entradas[entradasVisibles.length].autor
        }</a></h4>
        <img src="./img/${entradas[entradasVisibles.length].imagen}" alt="${
        entradas[entradasVisibles.length].altImagen
      }">
        <p class="introEntrada">${entradas[entradasVisibles.length].intro}</p>
        <div class="textoEntrada oculto">${
          entradas[entradasVisibles.length].texto
        }</div>    
        <p class="continuar">Continuar leyendo...</p>
      </article>`;
      entrada.innerHTML += cardHTML;
      entradasVisibles = document.querySelectorAll(".entrada");
      continuarLeyendo = document.querySelectorAll(".continuar");
      textoEntrada = document.querySelectorAll(".textoEntrada");

      for (let i = 0; i < continuarLeyendo.length; i++) {
        continuarLeyendo[i].addEventListener("click", () => {
          if (continuarLeyendo[i].innerHTML == "Continuar leyendo...") {
            textoEntrada[i].classList.remove("oculto");
            continuarLeyendo[i].innerHTML = "Ver menos";
          } else {
            textoEntrada[i].classList.add("oculto");
            continuarLeyendo[i].innerHTML = "Continuar leyendo...";
          }
        });
      }
    } else {
      verMas.classList.add("oculto");
    }
  };

  verMas.addEventListener("click", cargarMas);

  let continuarLeyendo = document.querySelectorAll(".continuar");
  let textoEntrada = document.querySelectorAll(".textoEntrada");

  for (let i = 0; i < continuarLeyendo.length; i++) {
    continuarLeyendo[i].addEventListener("click", () => {
      if (continuarLeyendo[i].innerHTML == "Continuar leyendo...") {
        textoEntrada[i].classList.remove("oculto");
        continuarLeyendo[i].innerHTML = "Ver menos";
      } else {
        textoEntrada[i].classList.add("oculto");
        continuarLeyendo[i].innerHTML = "Continuar leyendo...";
      }
    });
  }
});
