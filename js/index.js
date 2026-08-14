// Archivo principal de JavaScript para la ejercitación de Consumo de APIs

/* -------------------------------- CONSIGNA 1 -------------------------------- */
// 1. Realizar una petición a la API de usuarios utilizando fetch().
//    URL: http://localhost:3000/api/user  (iniciar antes con npm start)
// 2. Al recibir la respuesta, convertirla a JSON con response.json().
// 3. Invocar renderizarDatosUsuario() pasándole el objeto JSON completo.

// 4. Desarrollar renderizarDatosUsuario(datos):
//    - Obtener el usuario desde datos.results[0].
//    - Seleccionar el contenedor con document.querySelector('.tarjeta').
//    - Insertar dentro de .tarjeta (con innerHTML o createElement) estos elementos:
//
//        <img>   → src = picture.large   (la foto circular del usuario)
//        <h2>    → title + first + last  (nombre completo, ej: "Mr John Doe")
//        <p>     → email                 (correo electrónico)
//
//    Estos elementos ya tienen estilos definidos en css/styles.css
//    (.tarjeta img, .tarjeta h2, .tarjeta p).

function renderizarDatosUsuario(datos) {
  // Escribe aquí tu código para mostrar la foto, nombre completo e email en div.tarjeta
  // 1. Extraer el primer usuario del arreglo de resultados
  const usuario = datos.results[0];

  // 2. Extraer las propiedades necesarias
  const foto = usuario.picture.large;
  const nombreCompleto = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
  const {email} = usuario;

  // 3. Seleccionar el contenedor en el DOM
  const tarjeta = document.querySelector('.tarjeta');

  // 4. Renderizar la tarjeta con los datos del usuario
  tarjeta.innerHTML = `
    <img src="${foto}" alt="${nombreCompleto}" />
    <h2>${nombreCompleto}</h2>
    <p>${email}</p>
  `;
}

/* -------------------------------- CONSIGNA 2 -------------------------------- */
// 1. Descomentar en index.html el contenedor .btnContainer con el botón #random.
// 2. Desarrollar la función cargarUsuario() o escuchar el evento clic en el botón #random.
// 3. Al hacer clic en el botón, se debe realizar un nuevo pedido a la API
//    y actualizar la tarjeta sin recargar la página.

function cargarUsuario() {
  // Escribe aquí tu código para realizar un nuevo pedido a la API y actualizar la tarjeta
  // Petición a la API local usando fetch
  fetch('http://localhost:3000/api/user')
    .then((response) => response.json())
    .then((datos) => {
      renderizarDatosUsuario(datos);
    })
    .catch((error) => console.error('Error al obtener el usuario:', error));
}
cargarUsuario();
