//JSON - OBJETOS.


//anteriormente se creaba algo llamado MVC = modelo vista controlador.

//los usuarios estan en la vista la parte front (lo que el usuario ve) , views formularios.

//DATABASE , BACKEND  ,FRONT.

//api = aplication programming interface , el web service es un servicio , se divide todo
//se divide la vista del backend 


//postman = permite ver esos json , la informacion que se envia y que trae las Apis , las apis de momento son URL.


//Esto es un usuario

let usuario = {
    nombre:"Anthony",
    edad:25,
    documento:"1010228596",
    casado:false,
    user:"Valfegor",
    password:"821996as"
}

//objeto dentro de otro objeto.

let usuario = {
    nombre:"Anthony",
    edad:25,
    documento:"1010228596",
    casado:false,
    user:"Valfegor",
    password:"821996as",
    rol:{
        admin : true,
        superadmin:false
    }
    
}


//tambien se pueden enviar funciones

let usuario = {
    nombre:"Anthony",
    edad:25,
    documento:"1010228596",
    casado:false,
    user:"Valfegor",
    password:"821996as",
    rol:{
        admin : true,
        superadmin:false
    },
    toString(){
        alert("Hola amigo")
    }

    
}

//es mala practica tener funciones en el JSON.

