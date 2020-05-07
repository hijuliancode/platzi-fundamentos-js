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

var julian = new Persona('Julian', 'Sosa', 1.80)
var carlos = new Persona('Carlos', 'Sosa', 1.82)
var valentina = new Persona('Valentina', 'Sosa', 1.22)
var ginna = new Persona('Ginna', 'Mora', 1.67)
var pomodoro = new Persona('Pomodoro', 'Time', 1.75)

julian.soyAlta()
carlos.soyAlta()
valentina.soyAlta()
ginna.soyAlta()

// Modificando un prototipo
/**
  En esta clase veremos cómo se modifican las clases de herencias.
  JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.
 */
