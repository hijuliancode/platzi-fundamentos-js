// ¿Cómo ejecuta javascript algo de manera asincrona?

  console.log('a')
  setTimeout(() => { console.log('b') }, 0)  // Lo que hace esta linea es decirle al navegador, ejecutame esta función en 0 segundos
  // Entonces responde, Ok, voy a tomar esta función y la voy a poner en la cola de tareas, que es una cola de ejecución aparte
  // Javascript sigue ejecutando su código normalmente,
  // A pesar de que esta listo para ejecutarse, JS no lo va a hacer hasta que termine de ejecutar su programa principal
  console.log('c')

  // OTRO EJEMPLO (otro gato, dijo el chavo => https://youtu.be/428CjpkNnQE)

  setTimeout(() => {
    console.log('d')
  }, 2000); // Este es un tiempo de ejecución minimo, porque nada garantiza que no estemos bloqueando el event loop (la siguiente linea)

  for (let i = 0; i < 10000; i++) {
    console.log('Ejecutando ...')
  }

// Cómo funciona el tiempo en JavaScript
/**
  En principio, cualquier tarea que se haya delegado al navegador a través de un callback,
  deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado.
  
  Por esta razón el tiempo de espera definido en funciones como setTimeout,
  no garantizan que el callback se ejecute en ese tiempo exactamente,
  sino en cualquier momento a partir de allí,
  sólo cuando la cola de tareas se haya vaciado
 */
