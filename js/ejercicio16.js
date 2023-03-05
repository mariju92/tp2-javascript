/*Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let texto = prompt("Introduce un Texto:");
let numerodeletra = texto.length;
let reves;
let letra;
let entrega = "";
for (reves = 0; reves < numerodeletra; reves++) {
    letra = texto.charAt(reves); 
    entrega = letra + entrega;
}
document.write(entrega);