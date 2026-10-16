/* Escribe un programa que verifique si una persona puede votar. La edad mínima para votar es 18 años. Declara una variable edad y muestra por pantalla true si puede votar o false en caso contrario. */

const readlinesync = require('readline-sync');
const edadMinimaDerechoVoto = 18;

console.log("Bienvenido al sistema electoral.");

let edadUsuario = readlinesync.questionInt("Verifique su edad: ");

if(edadMinimaDerechoVoto<=edadUsuario){
    console.log("Edad verificada con derecho a voto.")
} else {
    console.log("No tienes derecho a voto.")
}