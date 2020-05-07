function heredaDe(prototipoHijo, prototipoPadre) {
  // Lo que haremos aquí es decirle al prototipo hijo, quien será su prototipo padre
  // Básicmente asignaremos un prototipo al prototipo/'clase' hija (prototipoHijo)
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype;
  // A continuación le decimos al prototipo hijo que su prototype va a ser un nuevo objeto de fn
  prototipoHijo.prototype = new fn 
  // Además lo otro que tenemos que hacer, es asignar la función constructora
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
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

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`Hola me llamo ${this.nombre} ${(this.apellido).charAt(0)} y soy desarrollador/a`)
}

var julian = new Persona('Julian', 'Sosa', 1.80)
var carlos = new Persona('Carlos', 'Sosa', 1.82)
var valentina = new Persona('Valentina', 'Sosa', 1.22)
var ginna = new Desarrollador('Ginna', 'Mora', 1.67)
var pomodoro = new Desarrollador('Pomodoro', 'Time', 1.75)

julian.soyAlta()
carlos.soyAlta()
valentina.soyAlta()
ginna.soyAlta()

// La verdad oculta sobre las clases en JavaScript
/**
  Los objetos en JavaScript son “contenedores” dinámicos de propiedades.
  Estos objetos poseen un enlace a un objeto prototipo.
  Cuando intentamos acceder a la propiedad de un objeto,
  la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto,
  en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad
  que coincida con el nombre o se alcance el final de la cadena de prototipos.
 */
