const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    
    $.get(url, opts, function(data) {
      resolve(data); // esta función no se va a ejecutar hasta que la function se ejecute, es decir el $.get sea exitoso
    })
    .fail(() => reject(id))

  });

}

function onError(id) {
  console.log(`Error al obtener la información del personaje ${id}`)
}

obtenerPersonaje(1) 
  .then(function(personaje) {
    console.log(`Hola yo soy ${personaje.name}`)
  })
  .catch(onError)

// Promesas
/**
  En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

  - pending
  - fullfilled
  - rejected
  
  Las promesas se invocan de la siguiente forma:

  new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
      // -- se ejecutó el llamado exitosamente
      resolve()
    } else {
      // -- hubo un error en el llamado
      reject()
    }
  } )

  No olvides ver el material adjunto de esta clase. (PDF Promesas en repositorio)

 */
