//arrays.

//es un tipo de variable que permite obtener una lista.

//array vacio.

let personas = [];

//tambien se pueden declarar con datos.


//animales se vuelve una lista de palabras.
//los arrays empiezan desde la posicion 0;
let animales = ['perro','gato','serpiente','lobo','escorpion','conejo'];

//si deseo saber la cantidad del array , puedo utilizar .length


//se puede utilizar un for para recorrer el arreglo.

//se puede tener una coleccion de varios tipos de variables ejemplo 2 , true.
//recomendacion siempre tener una lista del mismo tipo de dato.

let acumulador = "";
for(let i = 0 ; i<animales.length;i++){
    acumulador = acumulador + animales[i];
    console.log(acumulador);
}

