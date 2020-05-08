const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url, opts, function (persona) {
    console.log(`Hola yo soy ${persona.name}`)
    if (callback) {
      callback()
    }
  });

}

// obtenerPersonaje(1, obtenerPersonaje(2)) // Al colocarlo así, el callback se va a ejecutar inmediatamente, incluso antes de obtener el personaje 1
// Es importante que la función que se vaya a llamar, no se este ejecutando, que sea el declarar o la referencía a una función pero no su ejecución

// CALL BACK HELL
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4, function() {
        obtenerPersonaje(5, function() {
          obtenerPersonaje(6, function() {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
})

// Manejando el Orden y el Asincronismo en JavaScript
/**
  Una manera de asegurar que se respete la secuencia en que hemos
  realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada.
  
  Lo importante es que el llamado al callback se haga a través de una función anónima.
  Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.
 */
