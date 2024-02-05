// script.js

// Función para cargar y procesar datos desde un archivo JSON
function cargarDatosJson() {
    return fetch('estudiantes.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error al cargar los datos JSON:', error);
        });
}
//Propósito: Esta función, cargarDatosJson, utiliza la API Fetch para obtener el contenido del archivo estudiantes.json.
//Fetch (significa = buscar) devuelve una promesa que resuelve la respuesta del servidor.
//Luego, se utiliza el método json() para extraer los datos del cuerpo de la respuesta como formato JSON.
//El método .then se utiliza para manejar el resultado exitoso (resolución) de una promesa.
//Es decir, cuando la operación asíncrona se completa correctamente, el código dentro del bloque then se ejecuta.
//El método .catch se utiliza para manejar cualquier error que ocurra durante la ejecución de la promesa.
//Si algo sale mal y la promesa se rechaza, el código dentro del bloque catch se ejecuta.
//
//Cómo: La función usa la palabra clave fetch para realizar la solicitud HTTP.
//El método json() devuelve una nueva promesa que resuelve con los datos en formato JSON.
//
//Por qué: Fetch permite realizar solicitudes HTTP de manera asincrónica, y response.json() facilita la obtención de datos JSON.

// Función para agregar tarjetas de estudiantes al HTML
function agregarTarjetas(estudiantes) {
    let contenidoHTML = '';
    for (const alumno in estudiantes) {
        contenidoHTML += `<div class="col-lg-4 col-md-6 col-sm-12 mb-4">`;
        contenidoHTML += `<div class="card estudiante-card color-morado">`;
        contenidoHTML += `<div class="card-body">`;
        contenidoHTML += `<h5 class="card-title">${estudiantes[alumno].nombre}</h5>`;
        contenidoHTML += `<p class="card-text"><strong>Edad:</strong> ${estudiantes[alumno].edad}</p>`;
        contenidoHTML += `<p class="card-text"><strong>Materias:</strong> ${estudiantes[alumno].materias.join(', ')}</p>`;
        contenidoHTML += `</div>`;
        contenidoHTML += `</div>`;
        contenidoHTML += `</div>`;
    }
    document.getElementById('informacion-estudiantes').innerHTML = contenidoHTML;
}
//Propósito: La función agregarTarjetas toma un objeto de estudiantes y genera HTML dinámico para mostrar tarjetas de estudiantes en una página web.
//Cómo: Utiliza un bucle for...in para iterar sobre los estudiantes en el objeto.
//Luego, construye cadenas de HTML que representan las tarjetas de Bootstrap con la información de cada estudiante.
//Por qué: Esto permite actualizar dinámicamente el contenido de la página con la información de los estudiantes obtenida del archivo JSON.

// Cargar datos desde estudiantes.json
cargarDatosJson()
    .then(estudiantes => {
        // Agregar tarjetas al HTML
        agregarTarjetas(estudiantes);
    });
//Propósito: Esta parte del código ejecuta las funciones anteriores para cargar datos desde el archivo JSON y luego agregar tarjetas al HTML.
//Cómo: Llama a la función cargarDatosJson, y cuando se resuelve la promesa, llama a la función agregarTarjetas con los datos cargados.
//Por qué: Esta estructura de promesas asegura que el código se ejecute de manera asincrónica,
//evitando bloquear la interfaz de usuario mientras se espera la carga de datos.
