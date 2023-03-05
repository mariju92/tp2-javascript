//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let strings = [];
let input;

do {
  input = prompt('Ingrese una cadena de texto:');
  if (input !== null) {
    strings.push(input);
  }
} while (input !== null);

if (strings.length > 0) {
  let concatenated = strings.join('-');
  alert('Cadenas concatenadas: ' + concatenated);
} else {
  alert('No se ingresaron cadenas de texto.');
}
