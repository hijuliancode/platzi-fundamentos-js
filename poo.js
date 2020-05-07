function Persona(nombre, apellido) {
  // Esta función se va a ejecutar cuando creemos una nueva persona
  // Implicitamente retorna this cuando llamamos esta función con la palabra 'new'
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var julian = new Persona('Julian', 'Sosa')
var carlos = new Persona('Carlos', 'Sosa')
var valentina = new Persona('Valentina', 'Sosa')
var ginna = new Persona('Ginna', 'Mora')

julian.saludar()
carlos.saludar()
valentina.saludar()
ginna.saludar()



// Cómo funcionan las clases en JavaScript
/**
  Las clases son funciones cuya sintaxis tiene dos componentes:

  - expresiones
  - declaraciones
  
  Reto: agrega el atributo altura y la función soyAlto.

 */
