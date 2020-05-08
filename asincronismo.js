const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

// const idPersona = prompt('A quien quieres llamar?, Dígita un número mayor a 1');

const onPeopleResponse = function (persona, status) { // Esta función solo se va a ejecutar si el request es exitoso y la va a ejecutar $.get
  // console.log(arguments); // arguments Es una variable que tienen todas las funciones que nos da un array con los parametros que recibe la función
  console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)

// Callbacks
/**
  En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi  
 */
