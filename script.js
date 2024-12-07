let buttonContador = document.getElementById('boton');
let mostrarH1 = document.getElementById('mostrar');

let numero = 1;

buttonContador.addEventListener( 'click', () => {
    mostrarH1.innerHTML = numero++
})