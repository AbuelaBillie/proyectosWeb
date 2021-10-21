// const pedido = {};
// fetch("./biblio.json")
// .then(response =>response.json())
// .then(data =>{
//     pedido = response;
// })

// const FS = require("fs");
// const arrayBicicletas = JSON.parse(FS.readFileSync("bicicletas.json"));

var arrayLibros = JSON.parse(biblio);
console.log(arrayLibros);

const libro = document.querySelector(".contenedorLibros");
const renderizarLibros = () => {
  arrayLibros.forEach((obj) => {
    const cardHTML = 
        `<div class="libro">
        <div class="tituloAutor">
            <h3>${obj.titulo}</h3>
            <h4>${obj.autores}</h4>
          </div>
          <div class="editorialTemas">
            <p>Editorial: ${obj.editorial}</p>
            <p>
              Temas: ${obj.temas}
            </p>
          </div>
          </div>`;
    libro.innerHTML += cardHTML;
    });
};
renderizarLibros()
