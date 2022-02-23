let menu = document.getElementById('menu');
let nav = document.getElementById('nav-list')
let cerrar = document.getElementById('close');

menu.addEventListener('click', show);
cerrar.addEventListener('click', show);

function show() {
    nav.classList.toggle('-translate-x-[0]')
}

// Sweet Alert

let tramitar = document.getElementById('tramitar-pedido');

tramitar.addEventListener('click', agregado);

function agregado() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra se ha efectuado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
}