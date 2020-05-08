const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url, opts, callback)
   .fail((error) => {
    console.log(`error =>`, error)
    console.log(`Sucedio un error no se pudo obtener el personaje ${id}`);
  })
}

// obtenerPersonaje(1, obtenerPersonaje(2)) // Al colocarlo así, el callback se va a ejecutar inmediatamente, incluso antes de obtener el personaje 1
// Es importante que la función que se vaya a llamar, no se este ejecutando, que sea el declarar o la referencía a una función pero no su ejecución

// CALL BACK HELL
obtenerPersonaje(1, function(personaje) {
  console.log(`Hola yo soy ${personaje.name}`)

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola yo soy ${personaje.name}`)

    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola yo soy ${personaje.name}`)

      obtenerPersonaje(4, function(personaje) {
        console.log(`Hola yo soy ${personaje.name}`)

        obtenerPersonaje(5, function(personaje) {
          console.log(`Hola yo soy ${personaje.name}`)

          obtenerPersonaje(6, function(personaje) {
            console.log(`Hola yo soy ${personaje.name}`)

            obtenerPersonaje(7, function(personaje) {
              console.log(`Hola yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})

// Manejo de errores con callbacks
/**
  Para solucionar el problema de quedarnos sin conexión, u otro error similar,
  en medio de una sucesión de callbacks utilizamos el método fail().
 */
