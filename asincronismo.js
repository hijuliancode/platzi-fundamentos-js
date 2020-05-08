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

var ids = [1, 2, 3, 4, 5, 6, 7];
// var promesas = ids.map((id) => {
//   return obtenerPersonaje(id);
// })
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)

// obtenerPersonaje(1) 
//   .then(personaje1 => {
//     console.log(`Hola yo soy ${personaje1.name}`)
//     return obtenerPersonaje(2) // Para devolver una nueva promesa,
//   })
//   .then(personaje2 => { // de esta manera .then va a estar devolviendo una promesa ya que el return (linea 25) nos devuelve una promesa
//     console.log(`Hola yo soy ${personaje2.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje3 => {
//     console.log(`Hola yo soy ${personaje3.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(personaje4 => {
//     console.log(`Hola yo soy ${personaje4.name}`)
//     return obtenerPersonaje(5)
//   })
//   .then(personaje5 => {
//     console.log(`Hola yo soy ${personaje5.name}`)
//     return obtenerPersonaje(6)
//   })
//   .then(personaje6 => {
//     console.log(`Hola yo soy ${personaje6.name}`)
//     return obtenerPersonaje(7)
//   })
//   .then(personaje7 => {
//     console.log(`Hola yo soy ${personaje7.name}`)
//   })
//   .catch(onError)

// Múltiples promesas en paralelo
/**
  Para hacer el llamado a múltiples promesas,
  nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas,
  que pasaremos como parámetro a Promise.all( arregloDePromesas ),
  con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.
 */
