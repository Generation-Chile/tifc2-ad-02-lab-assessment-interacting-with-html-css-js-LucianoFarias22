

const titulo = document.querySelector('#red');
titulo.innerHTML = 'Adios';

const colorNaranja = document.querySelector('.blue');
colorNaranja.style.color = 'orange';

const nuevoEncabezado = document.createElement('h1');
nuevoEncabezado.innerHTML = 'Haga Clic aqui para cambiar las letras a marrón';
const encabezado1 = document.querySelector('h1');
const encabezado2 = document.querySelector('h2');
const encabezado3 = document.querySelector('h3');
const encabezado4 = document.querySelector('h4');
const encabezado5 = document.querySelector('h5');
nuevoEncabezado.addEventListener('click', () =>{
    encabezado1.style.color = 'brown';
    encabezado2.style.color = 'brown';
    encabezado3.style.color = 'brown';
    encabezado4.style.color = 'brown';
    encabezado5.style.color = 'brown';
});
document.body.appendChild(nuevoEncabezado);