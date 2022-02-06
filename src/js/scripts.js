// /* Funciones helpers */

// let encontrado;

// const comprar = () => {
//   let agregarProducto = ''

//    encontrado = productos.find(productos => productos.serviceName == agregarProducto); //callback

// if (encontrado) {
//   carrito.push(agregarProducto)
// }
// }
// /* Global variables */
// const carrito = [];

  // // Carrito
  // document.getElementById('footer').innerHTML = `<p>Tienes: ${carrito} listo para pagar</p>`

  // Menu responsive
  function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }