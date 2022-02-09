const productos = [
    {
      id: 1,
      url: 'width="250" height="250" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de automaquillaje",
      precio: 80,
      descripcion:
        "En este curso descubriras como lograr un maquillaje excelente para tu día a día."
    },
    {
      id: 2,
      url: 'width="250" height="250" src="https://www.youtube.com/embed/v2DJvu3gpfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de pieles",
      precio: 150,
      descripcion:
        "Aprendré a cuidar, preparar y tratar tu piel con todo el amor que se merece."
    },
    {
      id: 3,
      url: 'width="250" height="250" src="https://www.youtube.com/embed/JrR0KDukTHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de tecnicas de noche",
      precio: 250,
      descripcion:
        "Consigué un resulado impactante y reflejá todo eso que queres lograr en eventos nocturnos."
    }
  ];

const carrito = []

// Cursos
let cursos = document.getElementById("products-section").innerHTML = productos.map(
    (productos) =>
      `
        <div data-aos="fade-right" class='flex flex-col justify-center items-center py-5'>
            <iframe ${productos.url}></iframe>
            <div class='pt-3 flex flex-col items-start justify-center'>
              <h2 data-aos="fade-up-right" class='font-bold text-xl'>${productos.serviceName}</h2>
              <p data-aos="fade-up-right" class='w-[250px]'>${productos.descripcion}</p>
              <button id="addToCart"  onclick="agregarCarro(${productos.id}); productoAgregado()" class='p-3 mt-5 font-bold bg-pink-200 transition duration-500 hover:bg-pink-300 rounded-md'></button>
            </div>
        </div>`
  ).join('');

  // Variables Agregar € ${productos.precio}
  let item = ''

  // Cart Counter

  function agregarCarro(id) {
    item = productos.find( (productos) => productos.id === id );

    carrito.push(item)
    console.log(carrito)

    if (carrito.length > 0) {
      document.getElementById('cart-count').innerHTML = 
      `
        <p>${carrito.length}</p>
      `
    }
  }

  // Text depend if I have the item in to cart

  function productoAgregado() {
    if (carrito.includes(item)) {
      document.getElementById('addToCart').innerHTML = 'Agregado'
    } else {
      document.getElementById('addToCart').innerHTML = `Agregar € 300`
    }
  }
  productoAgregado() //

  let prueba = ''