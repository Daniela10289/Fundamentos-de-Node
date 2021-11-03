// NOMBRE=Daniela WEB=loquesea.com node conceptos/entorno.js  ejecutar los ejemplos en la consola
// nodemon se ejecuta una sola vez

let nombre = process.env.NOMBRE || 'sin nombre'; // el caracter || añade un valor por defecto
let web = process.env.WEB || 'ninguna';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);