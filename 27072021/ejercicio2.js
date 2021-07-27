//insertar variables en texto.

let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours()+":" + fecha.getMinutes();


//genero una nueva variable.

//opcion 1
let formatoFecha = año + "/" + mes + "/" + mes + "la hora es " + " " + hora


//opcion 2 :

let formatoFecha2 = `el año es ${año} y el mes ${mes} con el dia ${dia} y la fecha actual es ${hora} `;


console.log(formatoFecha2);



