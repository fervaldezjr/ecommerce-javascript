const productos = [
    {
      url: 'width="250" height="250" src="https://www.youtube.com/embed/BSTyuQV2nBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de automaquillaje",
      precio: 80,
      descripcion:
        "En este curso descubriras como lograr un maquillaje excelente para tu día a día."
    },
    {
      url: 'width="250" height="250" src="https://www.youtube.com/embed/v2DJvu3gpfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de pieles",
      precio: 150,
      descripcion:
        "Aprendré a cuidar, preparar y tratar tu piel con todo el amor que se merece."
    },
    {
      url: 'width="250" height="250" src="https://www.youtube.com/embed/JrR0KDukTHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
      serviceName: "Curso de tecnicas de noche",
      precio: 250,
      descripcion:
        "Consigué un resulado impactante y reflejá todo eso que queres lograr en eventos nocturnos."
    }
  ];

// Cursos
document.getElementById("products-section").innerHTML = productos.map(
    (productos) =>
      `
        <div data-aos="fade-right" class='flex flex-col justify-center items-center py-5'>
            <iframe ${productos.url}></iframe>
            <div class='pt-3 flex flex-col items-start justify-center'>
              <h2 data-aos="fade-up-right" class='font-bold text-xl'>${productos.serviceName}</h2>
              <p data-aos="fade-up-right" class='w-[250px]'>${productos.descripcion}</p>
              <button id="addToCart" class='p-3 mt-5 font-bold bg-pink-200 transition duration-500 hover:bg-pink-300 rounded-md'>Agregar € ${productos.precio}</button>
            </div>
        </div>`
  ).join('');

  // Cart Counter

  let boton = document.getElementById('addToCart')
  boton.addEventListener('click', respuestaClick)

  function respuestaClick() {
    document.getElementById('cart-count').innerHTML = `<p>1</p>`
  }