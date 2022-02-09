let input = prompt('ingrese su nombre')

localStorage.setItem('nombre', input)

let nombre = localStorage.getItem('nombre')
console.log('Nombre: ' + nombre)

// parte 2
let objeto1 = {peso: 'argentino', dolar: 'eeuu'} // creamos un obj

objetostring = JSON.stringify(objeto1) // lo pasamos a JSONstring

console.log(objetostring) // muestro JSON string

objetoparse = JSON.parce(objetostring) // devolvemos el JSON

console.log(objetostring) // lo mostramos como objeto otra vez


// con constructor
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

let rectangulo = new Rectangulo (4, 2)

console.log(rectangulo)

let obj1 = {peso: 'argentino', dolar: 'eeuu'}

objetostring = JSON.stringify(objeto1)

console.log(objetostring)

objetoparse = JSON.parse(objetostring)

console.log(objetoparse)