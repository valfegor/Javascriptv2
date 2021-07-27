//Fechas.

//declaamos una nueva variable.

//al declarar una variable flecha
//se crea una nueva instancia del objeto clase.


let fecha = new Date();

//obtener el año


let año = fecha.getFullYear();

//obtener el mes.

//siempre al trabajar con el mes se agrega +1

let mes = fecha.getMonth() + 1;


//obtener el dia
let dia = fecha.getUTCDay();


console.log(fecha);


console.log(año + "/" + mes + "/" + mes);