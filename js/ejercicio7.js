/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numerorepetido = prompt("Introduce numero de repeticiones");
if (Number(numerorepetido) == numerorepetido) {
    if (numerorepetido > 0 && numerorepetido <= 50) {
        var rep,i;
        for (i = numerorepetido; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
}
