const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id';

const idPersona = prompt('A quien quieres llamar?, Dígita un número mayor a 1');

const personaUrl = `${API_URL}${PEOPLE_URL.replace(':id', idPersona)}`;
const opts = { crossDomain: true }

const onPeopleResponse = function (persona, status) { // Esta función solo se va a ejecutar si el request es exitoso y la va a ejecutar $.get
  console.log(arguments); // arguments Es una variable que tienen todas las funciones que nos da un array con los parametros que recibe la función
  console.log(`Hola yo soy ${persona.name}`)
}

$.get(personaUrl, opts, onPeopleResponse);


// Dígita
/**
  En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

  Un callback es una función que se pasa a otra función como un argumento.
  Esta función se invoca, después, dentro de la función externa para completar alguna acción.
  
 */
