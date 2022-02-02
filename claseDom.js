let a = Number(prompt("ingrese a"));
let b = Number(prompt("ingrese b"));
let result = a + b;

document.getElementById("resultado").innerHTML = result;

document.getElementById("resultado").style.backgroundColor = #ff0000

// DOM
const nodo = document.getElementById('remera');
nodo.innerHTML = '<div>Producto</div>';

// Obtener datos de Inputs
// Puedo obtener o modificar datos de un formulario desde JS podemos hacerlo mediante el DOM. Accediendo al value de cada input:
<input id = 'nombre' type='text' value='marcelo'/>;
<input id = 'edad' type='number' value='dni' />;

resultado:
<div id='resultado'>Acá muestro la info del input</div>

// ¿Como lo hago?
let nombre = document.getElementById('nombre').value;
let dni = document.getElementById('dni').value;

document.getElementById('resultado').innerHTML = nombre + ' ' + apellido;

// ByClassName('clase')
// Cuando quiero tomar varios elementos
<div class='clase'>
    hola
</div>;
<div class='clase'>
    hola
</div>

let hola = document.getElementsByClassName('clase');

// getElementByTagName('tag');

// className
let contenedor = document.getElementById('contenedor');
contenedor.className = 'darkMode';

// Creación de elementos
let parrafo = document.createElement('p');
parrafo.innerHTML = '<h2>Hola</h2>';
document.body.append(parrafo);

// Eliminar elementos
parrafo.remove();
parrafo.innerHTML = '';
parrafo.outerHTML = '';

const productos = [{id: 1, nombre: 'arroz', precio: 125}, {id: 2, nombre: 'fideo', precio: 70}];

for (const producto of productos) {
    let contenedor = document.createElement('div');
    // Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3> <p> Producto: ${producto.nombre}</p> <b> $ ${producto.precio}</b>`;

    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3> <p> Producto: ${producto.nombre}</p> <b> $ ${producto.precio}</b>`;

    document.body.appendChild(contenedor);
}

// Profe tendria un 
<div id='resultado'></div>

// Código
for (const producto of productos) {
    let contenedor = document.createElement('div');
    // Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3> <p> Producto: ${producto.nombre}</p> <b> $ ${producto.precio}</b>`;

    document.body.appendChild(contenedor);
}

