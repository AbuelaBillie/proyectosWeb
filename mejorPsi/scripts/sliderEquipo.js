window.addEventListener("load", function () {
  const iL1 = document.querySelector("#iconLleno1");
  const iL2 = document.querySelector("#iconLleno2");
  const iL3 = document.querySelector("#iconLleno3");
  const iV1 = document.querySelector("#iconVacio1");
  const iV2 = document.querySelector("#iconVacio2");
  const iV3 = document.querySelector("#iconVacio3");

  const contenedorEspecialistas = document.querySelector(".contenedorEspecialistas");
  const slider = document.querySelector("#slide1");

  function llegoScroll(){
    let scrollTop = document.documentElement.scrollTop;
    let alturaContenedor = contenedorEspecialistas.offsetTop;
    if(alturaContenedor - 500 < scrollTop){
      slider.style.opacity = 1;
    }
  }

  window.addEventListener("scroll", llegoScroll);

  iV1.addEventListener("click", () => {
    iV1.classList.add("oculto");
    iL1.classList.remove("oculto");
    iV2.classList.remove("oculto");
    iL2.classList.add("oculto");
    iV3.classList.remove("oculto");
    iL3.classList.add("oculto");
  });
  iV2.addEventListener("click", () => {
    iV2.classList.add("oculto");
    iL2.classList.remove("oculto");
    iV1.classList.remove("oculto");
    iL1.classList.add("oculto");
    iV3.classList.remove("oculto");
    iL3.classList.add("oculto");
  });
  iV3.addEventListener("click", () => {
    iV3.classList.add("oculto");
    iL3.classList.remove("oculto");
    iV1.classList.remove("oculto");
    iL1.classList.add("oculto");
    iV2.classList.remove("oculto");
    iL2.classList.add("oculto");
  });
});
