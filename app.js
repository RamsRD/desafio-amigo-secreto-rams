// Variables

let listaAmigos = []; 
let ganadorSorteo;

//Funciones

function añadirAmigo() {
    let amigoDigitado = document.getElementById("amigo").value.trim();
    
    if (amigoDigitado === '') {
        alert('Por favor, inserte un nombre.');
        limpiarCaja();
        return;
    }

    listaAmigos.push(amigoDigitado);
    actualizarLista();
    limpiarCaja();

}

function limpiarCaja () {
    document.getElementById("amigo").value = '';
}
    
// Consola (eliminar cuando se termine el proyecto)

console.log(`Ver lista de amigos:`, listaAmigos);
console.log(`Ver ganador del sorteo:`, ganadorSorteo);