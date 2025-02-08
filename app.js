// Variables

let listaAmigos = []; 
let ganadorSorteo;

//Funciones

function añadirAmigos() {
    let amigoDigitado = document.getElementById('amigo').value.trim();
    
    if (amigoDigitado === '') {
        alert('Por favor, inserte un nombre para agregar en la lista.');
        return;
    }

    listaAmigos.push(amigoDigitado);
    actualizarLista();
    limpiarCaja();

}

function limpiarCaja () {
    document.getElementById('amigo').value = '';

}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    })
}

function sortearAmigos() {
    if (listaAmigos.length === 0) {
        alert('No has introducido nombres en la lista para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);

    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML= `<li>${amigoSorteado}</li>`;

    ganadorSorteo = amigoSorteado;
}

// Consola (eliminar cuando se termine el proyecto)

console.log(`Ver lista de amigos:`, listaAmigos);
console.log(`Ver ganador del sorteo:`, ganadorSorteo);