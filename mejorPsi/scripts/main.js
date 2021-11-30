window.addEventListener("load", function () {
  const btnMenu = document.querySelector("#btnMenu");
  const menu = document.querySelector(".navMenu");

  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
  });

  const btnSubMenu = document.querySelectorAll(".btnSubMenu-anchor");

  for (let i = 0; i < btnSubMenu.length; i++) {
    btnSubMenu[i].addEventListener("click", function () {
      if (window.innerWidth < 768) {
        const subMenu = this.nextElementSibling;
        const alturaSubMenu = subMenu.scrollHeight;
        if (subMenu.classList.contains("desplegar")) {
          subMenu.classList.remove("desplegar");
          subMenu.removeAttribute("style");
        } else {
          subMenu.classList.add("desplegar");
          subMenu.style.height = alturaSubMenu + "px";
        }
      }
    });
  }

  const irAlCielo = document.querySelector(".irAlCielo");

  function llegoScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let alturaContenedor = irAlCielo.offsetTop;
    if (alturaContenedor + 300 < scrollTop) {
      irAlCielo.classList.remove("oculto");
    }
    if (alturaContenedor - 300 > scrollTop) {
      irAlCielo.classList.add("oculto");
    }
  }

  window.addEventListener("scroll", llegoScroll);
});
