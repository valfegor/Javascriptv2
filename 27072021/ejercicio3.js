//el ciclo FOR.


//la funcion del for es repetir hasta que la condicion se cumpla.

//estructura basica del for

//consta de un indice desde donde inicia.

//a la variable generalmente se le llama i , generalmente inicia desde 0 let i = 0;
    
//hasta donde va a trabajar un for el segundo parametro  i<3

//el tercer valor es el incremento i++


//for(let i ; i<3;i++);


//ejemplo de alerts en un for.


let boton = document.getElementById("for");

boton.onclick = ()=> {

emergente();
ventanas();

}


const emergente = () => {

for(let i= 0 ; i<3;i++){
    if(i=1){
        alert("soy el primer alert");
    }
    if(i=2){
        alert("soy el segundo alert");
    }
    if(i=3){
        alert("soy el tercer alert");
    }
}

};


//como abrir ventanas emergentes.
//tambien puede abrir ventanas emergentes mas pequeñas


const ventana = () => {

    for(let j = 0 ; j<2 ; j++){

        window.open("https://zoom.us/postattendee?id=4");
    
    }
}

