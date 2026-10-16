/*Escribe un programa que determine si un número es par o impar y muestre el resultado por pantalla.*/

const readlinesync = require('readline-sync');

let numero = readlinesync.questionInt("Introduzca un numero: ");

let resultado = numero%2;

if(resultado==0){
    console.log("Es par: ",resultado);
} else {
    console.log("Es impar: ",resultado);
}