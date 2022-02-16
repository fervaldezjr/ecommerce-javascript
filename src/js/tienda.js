function agregarCarro(id) {
    item = cursos.find( (cursos) => cursos.id === id);
    // agrego producto al carrito
    carrito.push(item);
    // muestro el numero de productos dentro del carrito
    carrito.length > 0 && (contador.innerHTML = `<p>${carrito.length}</p>`)
    
    localStorage.setItem('Carrito', JSON.stringify(carrito));
    let carroR = JSON.parse(localStorage.getItem('Carrito'));
    
    document.getElementById('mostrarStorage').innerHTML = `${JSON.stringify(carroR)}`
}

function state() {
    let state = btn.innerHTML

    cursos.map( (cursos) => state == `Valor € ${cursos.precio}` ? state = 'Add' : state = `Valor € ${cursos.precio}`)

    let e = btn
    e.innerHTML = state
}

const cursos = [
    {
        id: 1,
        titulo: 'Curso de automaquillaje',
        plazasDisponibles: 10,
        precio: 195,
        portada: 'https://dummyimage.com/250x250/000/fff',
        descripcion: 'El curso de Automaquillaje Colors-Up es un curso completamente personalizado, donde dispondrás de un profesor exclusivamente para ti. En este curso aprenderás a potenciar tu imagen, basándonos en tu gusto, tu estilo, tu forma de vida o aquello que desees aprender. También te enseñaremos a que conozcas los productos para que saques partido de todo tu neceser. Durante el curso te facilitamos un dossier con FaceChart para que puedas tomar nota de lo que realizas y así consultarlo una vez finalizado el curso',
        temario: ["Cuidado y preparación de la piel","Diseño y perfilado de cejas","Técnicas en visagismo y en contouring/strobing","Uso y cuidado de las brochas","Maquillaje express","Maquillaje correctivo nude","Maquillaje correctivo sofisticado","Maquillaje smokey eyes","Asesoramiento personal de tu maletín"]
    },
    {
        id: 2,
        titulo: 'Curso de pieles',
        plazasDisponibles: 15,
        precio: 95,
        portada: 'https://dummyimage.com/250x250/000/fff',
        descripcion: 'El curso de Automaquillaje Colors-Up es un curso completamente personalizado, donde dispondrás de un profesor exclusivamente para ti. En este curso aprenderás a potenciar tu imagen, basándonos en tu gusto, tu estilo, tu forma de vida o aquello que desees aprender. También te enseñaremos a que conozcas los productos para que saques partido de todo tu neceser.',
        temario: ["Cuidado y preparación de la piel","Diseño y perfilado de cejas","Técnicas en visagismo y en contouring/strobing","Uso y cuidado de las brochas","Maquillaje express","Maquillaje correctivo nude","Maquillaje correctivo sofisticado","Maquillaje smokey eyes","Asesoramiento personal de tu maletín"]
    },
    {
        id: 3,
        titulo: 'Curso de noche',
        plazasDisponibles: 15,
        precio: 15,
        portada: 'https://dummyimage.com/250x250/000/fff',
        descripcion: 'El curso de Automaquillaje Colors-Up es un curso completamente personalizado, donde dispondrás de un profesor exclusivamente para ti. También te enseñaremos a que conozcas los productos para que saques partido de todo tu neceser. Durante el curso te facilitamos un dossier con FaceChart para que puedas tomar nota de lo que realizas y así consultarlo una vez finalizado el curso',
        temario: ["Cuidado y preparación de la piel","Diseño y perfilado de cejas","Técnicas en visagismo y en contouring/strobing","Uso y cuidado de las brochas","Maquillaje express","Maquillaje correctivo nude","Maquillaje correctivo sofisticado","Maquillaje smokey eyes","Asesoramiento personal de tu maletín"]
    }
];

const carrito = [];

let item = '';
let contador = document.getElementById('cart-contador');
let cursosDisponibles = document.getElementById('cursos');
let btn = document.getElementById('btn');

cursosDisponibles.innerHTML = cursos.map( (cursos) => `
    <div class='flex justify-between items-center p-5'>
        <img src=${cursos.portada} />
        <div class='flex-col justify-between items-center p-2'>
            <h2 class='font-extrabold text-2xl'> ${cursos.titulo} </h2>
            <p class='text-md'> Plazas disponibles: ${cursos.plazasDisponibles} </p>
            <p class='text-md'> Valor € ${cursos.precio} </p>
        </div>
    </div>
    <div class='p-5 pt-0'>
        <div>
            <p class='mb-3 font-semibold text-sm'>Descripción: ${cursos.descripcion}</p>
        </div>
        <div>
            <button id='btn' onclick='agregarCarro(${cursos.id})' class='btn p-2 bg-neutral-900 hover:bg-neutral-700 transition duration-500 text-zinc-100 font-semibold text-sm rounded-md'> 
                Agregar € ${cursos.precio}
            </button>
        </div>
    </div>
` ).join('');

/* 
si hago click, agrego al carro ese producto y muestro la cantidad.

*/

btn.addEventListener('click', agregarCarro);
btn.addEventListener('click', state);