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
//day envia lunes 1 martes 2 miercoles 3
//el dia actual es con date.
let dia = fecha.getDate();


console.log(fecha);


console.log(año + "/" + mes + "/" + mes);



//manejo de la hora.


let hora = fecha.getHours()+":" + fecha.getMinutes();

console.log("la hora es " + " " + hora);