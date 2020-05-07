function Persona(nombre, apellido, altura) {
  // Buena practiva definir los prototipos al inicio del documento para que siempre esten accesibles hacia todos los objetos que vayamos creando
  // Esta función se va a ejecutar cuando creemos una nueva persona
  // Implicitamente retorna this cuando llamamos esta función con la palabra 'new'
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlta = function() {
  console.log(this.altura >= 1.80);
  return this.altura >= 1.80;
}
// No se puede ejecutar la anterior función con () => debido a que
// This en arrow function no hace referencia a su entorno sino al superior de donde su función ha sido definida,
// En eesta caso windows, this===window = true
// Es mejor si este prototipo no usa arrow function sino function


var julian = new Persona('Julian', 'Sosa', 1.80)
var carlos = new Persona('Carlos', 'Sosa', 1.82)
var valentina = new Persona('Valentina', 'Sosa', 1.22)
var ginna = new Persona('Ginna', 'Mora', 1.67)
var pomodoro = new Persona('Pomodoro', 'Time', 1.75)

julian.soyAlta()
carlos.soyAlta()
valentina.soyAlta()
ginna.soyAlta()

// El contexto de las funciones: quién es this
/**
  En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.
  Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

 */
