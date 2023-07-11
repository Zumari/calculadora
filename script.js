// Esta función agrega a la pantalla el valor del botón presionado.
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Esta función vacía la pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}

// Esta función calcula lo que este en la pantalla
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}