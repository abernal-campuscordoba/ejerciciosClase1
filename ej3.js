// Escribe un programa que solicite el nombre de una persona y luego muestre por pantalla un saludo personalizado 

const readlinesync = require('readline-sync');

let nombre = readlinesync.question('Introduzca su nombre: ');

console.log("Hola",nombre,"bienvenido al sistema.");