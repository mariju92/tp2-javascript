// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Por favor, ingrese su edad:");

if (!isNaN(edad)) {
  edad = parseInt(edad);
  if (edad >= 18) {
    alert("¡Ya puedes conducir!");
  } else {
    alert("Lo siento, todavía no puedes conducir.");
  }
} else {
  alert("La edad ingresada no es válida. Por favor, ingrese un número entero.");
}