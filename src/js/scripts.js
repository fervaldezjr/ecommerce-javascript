const comprar = () => {
  let ingreso = "";
  let hiceBreak = false;

  // este metodo pasa a string cualquier objeto
  alert("Compra algo de eso " + JSON.stringify(productos.serviceName));

  while (ingreso != "basta") {
    ingreso = prompt("ingrese algo que quiera comprar");

    hiceBreak = false;

    for (let i = 0; i < (productos.serviceName).length; i++) {
      if (ingreso == productos.serviceName[i]) {
        carrito.push(productos.serviceName[i]);
        hiceBreak = true;
        break;
      }
    }
  }

  if (hiceBreak == false && ingreso != "basta") {
    alert("Producto invalido");
  }
};

const fotos = [
  {
    id: 1,
    url: "../images/makeup1.png",
    textAlt: "Makeup 1"
  },
  {
    id: 2,
    url: "../images/makeup2.png",
    textAlt: "Makeup 2"
  },
  {
    id: 3,
    url: "../images/makeup3.png",
    textAlt: "Makeup 3"
  },
  {
    id: 4,
    url: "../images/makeup2.png",
    textAlt: "Makeup 4"
  },
  {
    id: 3,
    url: "../images/makeup1.png",
    textAlt: "Makeup 3"
  },
  {
    id: 3,
    url: "../images/makeup3.png",
    textAlt: "Makeup 3"
  },
  {
    id: 2,
    url: "../images/makeup2.png",
    textAlt: "Makeup 2"
  },
  {
    id: 2,
    url: "../images/makeup1.png",
    textAlt: "Makeup 2"
  },
];


  document.getElementById("images-section").innerHTML = fotos.map((fotos) => `<img class='m-3 shadow-xl hover:grayscale transition duration-500 cursor-pointer' width='250px' src=${fotos.url} alt=${fotos.textAlt}/>`).join('')

// Agregar productos al carro
const productos = [
  {
    url: 'width="250" height="250" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    serviceName: "Curso de Automaquillaje",
    precio: 80,
    descripcion:
      "En este curso descubriras como lograr un maquillaje excelente para tu día a día."
  },
  {
    url: 'width="250" height="250" src="https://www.youtube.com/embed/v2DJvu3gpfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    serviceName: "Curso de Pieles",
    precio: 150,
    descripcion:
      "Aprendré a cuidar, preparar y tratar tu piel con todo el amor que se merece."
  },
  {
    url: 'width="250" height="250" src="https://www.youtube.com/embed/JrR0KDukTHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    serviceName: "Curso Tecnicas de noche",
    precio: 250,
    descripcion:
      "Consigué un resulado impactante y reflejá todo eso que queres lograr en eventos nocturnos."
  }
];

  document.getElementById("products-section").innerHTML = productos.map(
    (productos) =>
      `
        <div class='flex flex-col justify-center items-center py-5'>
            <iframe ${productos.url}></iframe>
            <div class='pt-3 flex flex-col items-start justify-center'>
              <h2 class='font-bold text-xl'>${productos.serviceName}</h2>
              <p class='w-[250px]'>${productos.descripcion}</p>
              <button class='p-3 mt-5 font-bold bg-pink-200 transition hover:bg-pink-300 rounded-md'>Agregar € ${productos.precio}</button>
            </div>
        </div>`
  ).join('');

const carrito = [];

while (ingreso != "basta") {
  ingreso = prompt("ingrese algo que quiera comprar");

  hiceBreak = false;

  for (let i = 0; i < productosEnVenta.length; i++) {
    if (ingreso == productosEnVenta[i]) {
      carrito.push(productosEnVenta[i]);
      hiceBreak = true;
      break;
    }
  }
}