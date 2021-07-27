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

//como agregar un item a un arreglo.

//solo si se en que posicion.

animales[6] = "dragon";

//si se ubica un nuevo valor en una posicion ya existente se modifica el arreglo original.

//para agregar otro elemento se puede utilizar el metodo de array .push
//este metodo ingresa directamente a la ultima posicion del arreglo.
//estructura interna del push animales[animales.length] = "Dragon";


animales.push("Ardilla");


//para agregar al inicio del array.

animales.unshift = ("chester");


//en un array se pueden eliminar items.

//'chester','perro','gato','serpiente','lobo','escorpion','conejo','dragon','ardilla'

//mala practica
delete animales[5];

//manera optima de eliminar es con splice.

//posicion 5 y eliminar hacia adelante
animales.splice(5,1);
//esto lo quita se reorganiza el array.

