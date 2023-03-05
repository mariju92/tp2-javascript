/*Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

let texto = prompt("Introduce una cadena de texto:");
let numerodeletras = texto.length;
let letra;
let i;
for (i = 0; i < numerodeletras; i++) {
letra = texto.charAt(i);
if (i == numerodeletras - 1) {
    document.write(letra);
}
else {
    document.write(letra + "-");
}
}