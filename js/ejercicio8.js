/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/
let numerorepetido = prompt("Introduce numero de repeticiones");
if (Number(numerorepetido) == numerorepetido) {
    if (numerorepetido > 0 && numerorepetido <= 50) {
        let rep,i;
        for (i = 0; i <=numerorepetido; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
}
