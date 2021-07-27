//foreach.


//foreach
let animales = ['perro','gato','serpiente','lobo','escorpion','conejo'];


//el metodo foreach es un for 

//manera tradicional.

//solo se utiliza para recorrer un array , sin limites 
//Devuelve la posicion
//si quiero ver la palabra que tiene este item
//en animales muestreme el animal

for(let animal in animales){

        console.log(animales[animal]);

}

//for IN es un foreach.

//automaticamente ya muestra el item.
animales.forEach(animal =>{

    console.log(animal);
});