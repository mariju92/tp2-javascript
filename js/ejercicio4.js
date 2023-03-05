// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sum = 0;
let input;

do {
  input = prompt('Ingrese un número:');
  if (input !== null) {
    if (!isNaN(input)) {
      sum += parseFloat(input);
    } else {
      alert('El valor ingresado no es un número.');
    }
  }
} while (input !== null);

alert('La suma total de los números ingresados es: ' + sum);