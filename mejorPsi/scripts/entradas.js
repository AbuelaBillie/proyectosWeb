const entradas = [
    {
      id: 0,
      titulo: "El agua con gas puede ser buena para la salud",
      autor: "Homero J. Simpson",
      imagen: "homeroSimpson.jpg",
      altImagen: "homero simpson",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda",
      texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!"
    },
    {
      id: 1,
      titulo: "Entrada 2",
      autor: "Lisa Simpson",
      imagen: "lisaSimpson.jpg",
      altImagen: "homero simpson",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda",
      texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!"
    },
    {
      id: 2,
      titulo: "Desde el espacio se le ve lo put@",
      autor: "Astronauta",
      imagen: "astronauta.jpg",
      altImagen: "homero simpson",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda",
      texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!"
    },
    {
      id: 3,
      titulo: "Entrada 4",
      autor: "Homero J. Simpson",
      imagen: "homeroSimpson.jpg",
      altImagen: "homero simpson",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda",
      texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!"
    },
    {
      id: 4,
      titulo: "Entrada 5",
      autor: "Homero J. Simpson",
      imagen: "homeroSimpson.jpg",
      altImagen: "homero simpson",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda",
      texto: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam error commodi, numquam deserunt expedita unde vero nostrum sequi modi. Assumenda accusamus autem sapiente nulla aliquid veritatis tempore amet consectetur!"
    },
  ];
  