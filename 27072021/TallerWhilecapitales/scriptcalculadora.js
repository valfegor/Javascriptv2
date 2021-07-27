let boton = document.getElementById("boton");
let operacion = document.getElementById("operacion");
console.log(operacion);


boton.addEventListener("click" , () =>{

    let operacion = parseInt(prompt("Bienvenido por favor seleccione 1. suma 2.resta 3.multiplicacion 4.division"));
    let numero1 = 0;
    let numero2 = 0;
    let resultado =0;


    while (operacion!==1 && operacion!==2 && operacion!==3 && operacion!==4 && operacion!==5){
        operacion = parseInt(prompt("ha seleccionado erroneamente por favor vuelva a digitar 1. suma 2.resta 3.multiplicacion 4.division 5.salir"));
        if(operacion===5){
            alert("ha salido");
            break;
        }
    }

    while(operacion==1){
        if(operacion==1){
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            
            while(isNaN(numero1) || isNaN(numero2)){
                alert("No selecciono un numero correctamente o no corresponde a un numero");
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            while(isNaN(resultado)){
                numero1 = parseFloat(prompt("Digite por favor el primer numero"));
                numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            resultado=numero1 + numero2;
            alert(`el resultado de ambos numeros es ${resultado}`);
        
            operacion = parseInt(prompt("5.salir"));
            
           
            while(operacion!=1 && operacion !=5){
                operacion = parseInt(prompt("1.continuar 5.salir"));
            }
            
            if(operacion==5){
                alert("ha salido");
                break;
                }
            
    }
    

   

    

    
    }

    while(operacion==2){
        if(operacion==2){
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            
            while(isNaN(numero1) || isNaN(numero2)){
                alert("No selecciono un numero correctamente o no corresponde a un numero");
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            while(isNaN(resultado)){
                numero1 = parseFloat(prompt("Digite por favor el primer numero"));
                numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            resultado=numero1 - numero2;
            alert(`el resultado de ambos numeros es ${resultado}`);
        
            operacion = parseInt(prompt("2.continuar 5.salir"));
            
           
            while(operacion!=2 && operacion !=5){
                operacion = parseInt(prompt("2.continuar 5.salir"));
            }
            
            if(operacion==5){
                alert("ha salido");
                break;
                }
            
    }
    

   

    

    
    }


    while(operacion==3){
        if(operacion==3){
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            
            while(isNaN(numero1) || isNaN(numero2)){
                alert("No selecciono un numero correctamente o no corresponde a un numero");
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            while(isNaN(resultado)){
                numero1 = parseFloat(prompt("Digite por favor el primer numero"));
                numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            resultado=numero1 * numero2;
            alert(`el resultado de ambos numeros es ${resultado}`);
        
            operacion = parseInt(prompt("3.continuar 5.salir"));
            
            
            while(operacion!=3 && operacion !=5){
                operacion = parseInt(prompt("3.continuar 5.salir"));
            }
            if(operacion==5){
                alert("ha salido");
                break;
                }
            
    }
    

   

    

    
    }

    while(operacion==4){
        if(operacion==4){
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            
            while(isNaN(numero1) || isNaN(numero2) || numero1 == 0 || numero2 == 0){
                alert("No selecciono un numero correctamente o no corresponde a un numero");
            numero1 = parseFloat(prompt("Digite por favor el primer numero"));
            numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            while(isNaN(resultado)){
                numero1 = parseFloat(prompt("Digite por favor el primer numero"));
                numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
            }
            resultado=numero1 * numero2;
            alert(`el resultado de ambos numeros es ${resultado}`);
        
            operacion = parseInt(prompt("4.continuar 5.salir"));
            
            

            while(operacion!=4 && operacion !=5){
                operacion = parseInt(prompt("4.continuar 5.salir"));
            }

            if(operacion==5){
                alert("ha salido");
                break;
                }
            
            
    }
    

   

    

    
    }



});


