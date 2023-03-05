// Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Introduce una cadena de texto:");
let letra = texto.length; 
texto = texto.toUpperCase();
let vocal;
let contador = 0;
let i;
for (i = 0; i < letra; i++) {
    vocal = texto.charAt(i);    //recupera el caracter i del string.
    if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");