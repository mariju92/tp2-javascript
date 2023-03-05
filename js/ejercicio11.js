/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre1 = prompt("Nombre 1:");
    let edad1 = Number(prompt("Edad 1:"));

    let nombre2 = prompt("Nombre 2:");
    let edad2 = Number(prompt("Edad 2:"));

    let nombre3 = prompt("Nombre 3:");
    let edad3 = Number(prompt("Edad 3:"));

    let maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
        document.write("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
        document.write("El mayor es: " + nombre3);
    }