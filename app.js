// Variables

let listaAmigos = []; //Array que almacena los nombres que se colocarán en la lista
let ganadorSorteo; //Almacena el nombre seleccionado del sorteo de la lista

//Funciones

//Función para añadir nombres de amigos a la lista
function añadirAmigos() {
    let amigoDigitado = document.getElementById('amigo').value.trim();
    
    if (amigoDigitado === '') { //Verifica que la lista no esté vacía
        alert('Por favor, inserte un nombre para agregar en la lista.');
        return;
    }

    listaAmigos.push(amigoDigitado); //Añade el nombre al array
    actualizarLista();
    limpiarCaja();

}
//Función para limpiar la caja dónde se escriben los nombres de amigos
function limpiarCaja () {
    document.getElementById('amigo').value = '';

}
//Función que actualiza la lista en la interfaz
function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos'); //Agarra el elemento HTML dónde se verán los nombres de los amigos
    listaHTML.innerHTML = ''; //Vacía el contenido antes de actualizarlo

    if (listaAmigos.length > 0) { //Si hay nombres en la lista, desbloquea la lista
        listaHTML.style.display = 'block';
        listaAmigos.forEach(amigo => { //Recorre cada nombre en el array creado
            let li = document.createElement('li'); //Crea un elemento <li>
            li.textContent = amigo; //Asigna el nombre a <li>
            listaHTML.appendChild(li); //Agrega <li> a la lista en el HTML
    })
      
    }
    
    else {
        listaHTML.style.display = 'none'; //Si la lista está vacía, la mantiene oculta
    }
}

//Función para realizar el sorteo entre los nombres colocados en la lista y obtener un ganador
function sortearAmigos() { 
    if (listaAmigos.length === 0) { //Verifica que haya nombres en la lista; si no hay, manda el alert.
        alert('No has introducido nombres en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length); //Genera un índice pseudoaleatorio basado en la cantidad de nombres colocados
    let amigoSorteado = listaAmigos[indiceAleatorio]; //Del sorteo aleatorio, selecciona un nombre
    let resultadoHTML = document.getElementById('resultado'); //Obtiene el elemento donde se muestra el resultado
    resultadoHTML.innerHTML = `<li>${amigoSorteado}</li>`; //Muestra el nombre del ganador dentro de un <li>
    resultadoHTML.style.display = 'block'; //Muestra la sección de resultados apenas se le de al botón de sortear amigos
    ganadorSorteo = amigoSorteado; //Guarda el nombre del ganador en la variable
}