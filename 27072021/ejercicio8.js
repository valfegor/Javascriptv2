//optimizaciones del if.

let edad = prompt("ingresa tu edad");
let terminos = prompt("Escriba Y para aceptar o N para rechazar");
let resultado = false;

//con un if normal

if(terminos === "Y"){
resultado = true;
}else{
resultado = false;
}

//en un switch.

switch(terminos){
    case "Y":
        resultado = true;
        break;
    case "N":
        resultado = false;
    default:
        break;
    }


//utilizando el operador ternario.

(terminos==="Y")?resultado=true:resultado=false;

(edad>=18 && terminos==="Y")?console.log("Si puede ver las peliculas"):console.log("no puede ver las pelis");