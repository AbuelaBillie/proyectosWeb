const entrada = document.querySelector(".contenedorEntradas");
const verMas = document.querySelector(".verMas");
const cantEntradas = entradas.length;

const renderizarEntradas = () => {
  for (let i = 0; i < 3; i++) {
    const cardHTML =
       `<div class="separador"></div>
        <article class="entrada">
          <h2>${entradas[i].titulo}</h2>
          <h4>Escrito por: <a id="autor" href="">${entradas[i].autor}</a></h4>
          <img src="./img/${entradas[i].imagen}" alt="${entradas[i].altImagen}">
          <p>${entradas[i].texto}</p>    
          <a href="">Continuar leyendo...</a>
        </article>`;
    entrada.innerHTML += cardHTML; 
  }
};
renderizarEntradas();

let entradasVisibles = document.querySelectorAll(".entrada");
let cantEntradasVisibles = entradasVisibles.length;

const cargarMas = () => {
  if(cantEntradas > cantEntradasVisibles){
    const cardHTML =
       `<article class="entrada">
              <h2>${entradas[cantEntradasVisibles].titulo}</h2>
              <img src="./img/${entradas[cantEntradasVisibles].imagen}" alt="${entradas[cantEntradasVisibles].altImagen}">
              <p>${entradas[cantEntradasVisibles].texto}</p>  
              <a href="">Ver más...</a>  
          </article>`;
    entrada.innerHTML += cardHTML; 
    entradasVisibles = document.querySelectorAll(".entrada");
    cantEntradasVisibles = entradasVisibles.length;
  }else{
    verMas.classList.add("oculto");
  }
};

verMas.addEventListener('click',cargarMas);
