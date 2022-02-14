let menu = document.getElementById('menu');
let nav = document.getElementById('nav-list')

menu.addEventListener('click', show);

function show() {
    nav.classList.toggle('-translate-x-[0]')
}