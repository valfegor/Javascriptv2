//ejemplo de uso while.

let op = prompt("ingrese 1 para sumar y 2 para restar");

if(op !==1 && op!==2){

    alert("por favor ingrese los numeros");

}
else {
    alert("se piden los numeros y se hacen las operaciones");
}


//como repetir una ventana hasta que ingrese una opcion valida.

//si operacion 1 es diferente de operacion 2 va a repetir 

//el while sirve para repetir.
let opc = prompt("ingrese 1 para sumar y 2 para restar");
while (opc !==1 && opc!==2) {
    alert("por favor ingrese un numero entre 1 y 2");
    let opc = prompt("ingrese 1 para sumar y 2 para restar");
}
