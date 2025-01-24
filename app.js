// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

// Fucionalidades:
// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


let listaNombreIngresados = [];

// Asigna texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(`#${elemento}`);
    elementoHTML.innerHTML = texto;
}

// Limpia el campo de entrada de texto
function limpiarAreaTexto() {
    document.getElementById('amigo').value = '';
}

// Actualiza la lista visible en la página
function actualizarListaNombres() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ''; // Limpiar contenido previo
    // Crear elementos <li> para cada nombre en la lista
    listaNombreIngresados.forEach((nombre) => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.append(li);
    });
}

// Agrega un nombre a la lista
function agregarAmigo() {
    // trim para quitar espacios innecesarios
    let nombrePorTeclado = document.getElementById('amigo').value.trim();
    // Validar entrada
    if (nombrePorTeclado === '') {
        alert('Debe ingresar un nombre válido.');
        return;
    }
    // Agregar el nombre a la lista y actualizarla en pantalla
    listaNombreIngresados.push(nombrePorTeclado);
    actualizarListaNombres();
    limpiarAreaTexto();
}

// Sortea un amigo aleatorio de la lista
function sortearAmigo() {
    // verificación que la lista de amigos no esté vacía
    if (listaNombreIngresados.length === 0) {
        alert('La lista está vacía. Agregue amigos antes de sortear.');
        return;
    }
    // Generar un índice aleatorio y seleccionar un nombre
    let indiceAleatorio = Math.floor(Math.random() * listaNombreIngresados.length);
    let amigoSorteado = listaNombreIngresados[indiceAleatorio];
    // Mostrar el resultado
    asignarTextoElemento('resultado', `¡El amigo secreto es: ${amigoSorteado}!`);
    // Ocultar la lista de amigos
    document.querySelector('#listaAmigos').style.display = 'none';
}

// Agrega un listener para que se pueda usar "Enter" como alternativa al botón "Adicionar"
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // asegura que solo se ejecute la función agregarAmigo()
        agregarAmigo(); // Llama a la función para agregar el nombre
    }
});
