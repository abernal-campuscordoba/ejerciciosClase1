/* Escribe un programa que determine si un número dado es primo. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Muestra el resultado por pantalla. */

let numeroPrimo = 5;
let esPrimo = true;

if (numeroPrimo <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
        if (numeroPrimo % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numeroPrimo + " es un número primo.");
} else {
    console.log(numeroPrimo + " no es un número primo.");
}