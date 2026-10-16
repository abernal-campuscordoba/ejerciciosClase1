/* Escribe un programa que intercambie los valores de dos variables numéricas sin usar una variable auxiliar. Muestra los valores antes y después del intercambio. */

let numero1 = 0;
let numero2 = 1;

console.log("ANTES DEL INTERCAMBIO");
console.log("Numero 1: ", numero1, " , Numero 2: ", numero2);

[numero1, numero2] = [numero2, numero1];

console.log("DESPUÉS DEL INTERCAMBIO");
console.log("Numero 1: ", numero1, " , Numero 2: ", numero2);