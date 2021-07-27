
departamento = document.getElementById('mos_punt');
url = document.getElementById('tiempito');
capital = document.getElementById('capital');




let opcion = prompt("Bienvenido por favor escriba un departamento");
opcion = opcion.toLocaleLowerCase();




while (opcion!="cundinamarca" && opcion!="amazonas" && opcion!="antioquia" && opcion!="arauca" && opcion!="atlantico" && opcion!="bolivar" && opcion!="boyaca" && opcion!="caldas" && opcion!="caqueta" && opcion!="casanare" && opcion!="cauca" && opcion!="cesar" && opcion!="choco" && opcion!="cordoba" && opcion!="guainia" && opcion!="guaviare" && opcion!="huila" && opcion!="guajira" && opcion!="magdalena" && opcion!="meta" && opcion!="nariño" && opcion!="norte de santander" && opcion!="putumayo" && opcion!="quindio" && opcion!="risaralda" && opcion!="san andres" && opcion!="santander" && opcion!="sucre" && opcion!="tolima" && opcion!="valle del cauca" && opcion!="vaupes" && opcion!="vichada"){
    alert("seleccione una opcion valida");
    opcion = prompt("Bienvenido por favor escriba un departamento");
    opcion = opcion.toLocaleLowerCase();
    
    if(opcion=="cundinamarca"){
        departamento.innerHTML ="Cundinamarca";
        url.innerHTML = 'https://bogota.gov.co/'
        capital.innerHTML = "Bogota";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        return location.href="https://bogota.gov.co/";
        },1000 * 5)
        console.log(capital);
    }
    else if(opcion=="amazonas"){
        departamento.innerHTML ="Amazonas";
        url.innerHTML = 'http://www.leticia-amazonas.gov.co/'
        capital.innerHTML = "Leticia";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="http://www.leticia-amazonas.gov.co/";
        },1000 * 5)
    }else if(opcion=="antioquia"){
        departamento.innerHTML ="Antioquia";
        url.innerHTML = 'https://www.medellin.gov.co'
        capital.innerHTML = "Medellín";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://d6a716b127e5d19177b1413bd803e3d9";
        },1000 * 5)
    }else if(opcion=="arauca"){
        departamento.innerHTML ="Arauca";
        url.innerHTML = 'https://www.arauca-arauca.gov.co/Paginas/default.aspx'
        capital.innerHTML = "Arauca";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="https://www.arauca-arauca.gov.co/Paginas/default.aspx";
        },1000 * 5)  
    }else if(opcion=="atlantico"){
        departamento.innerHTML ="Atlántico";
        url.innerHTML = 'https://www.barranquilla.gov.co/'
        capital.innerHTML = "Barranquilla";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="https://www.barranquilla.gov.co/";
        },1000 * 5)  
    }else if(opcion=="bolivar"){
        departamento.innerHTML ="Bolívar";
        url.innerHTML = 'https://www.cartagena.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Cartagena de Indias";
        setTimeout(function(){
        location.href="https://www.cartagena.gov.co/";
        },1000 * 5)  
    }else if(opcion=="boyaca"){
        departamento.innerHTML ="Boyacá";
        url.innerHTML = 'https://www.tunja-boyaca.gov.co/'
        capital.innerHTML = "Tunja";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="https://www.tunja-boyaca.gov.co/";
        },1000 * 5)  
    }else if(opcion=="caldas"){
        departamento.innerHTML ="Caldas";
        url.innerHTML = 'https://manizales.gov.co/'
        capital.innerHTML = "Manizales";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="https://manizales.gov.co/";
        },1000 * 5)  
    }else if(opcion=="caqueta"){
        departamento.innerHTML ="Caquetá";
        url.innerHTML = 'http://www.florencia-caqueta.gov.co/'
        capital.innerHTML = "Florencia";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="http://www.florencia-caqueta.gov.co/";
        },1000 * 5)  
    }else if(opcion=="casanare"){
        departamento.innerHTML ="Casanare";
        url.innerHTML = 'http://www.yopal-casanare.gov.co/'
        capital.innerHTML = "Yopal";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="http://www.yopal-casanare.gov.co/";
        },1000 * 5)   
    }else if(opcion=="cauca"){
        departamento.innerHTML ="Cauca";
        url.innerHTML = 'http://www.popayan.gov.co/'
        capital.innerHTML = "Popayán";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        setTimeout(function(){
        location.href="http://www.popayan.gov.co/";
        },1000 * 5)   
    }else if(opcion=="cesar"){
        departamento.innerHTML ="Cesar";
        url.innerHTML = 'http://valledupar-cesar.gov.co'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Valledupar";
        setTimeout(function(){
        location.href="http://valledupar-cesar.gov.co/Paginas/default.aspx";
        },1000 * 5)   
    }else if(opcion=="choco"){
        departamento.innerHTML ="Chocó";
        url.innerHTML = 'http://www.quibdo-choco.gov.co'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Quibdó";
        setTimeout(function(){
        location.href="http://www.quibdo-choco.gov.co/Paginas/default.aspx";
        },1000 * 5)   
    }else if(opcion=="cordoba"){
        departamento.innerHTML ="Córdoba";
        url.innerHTML = 'https://www.monteria.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Montería";
        setTimeout(function(){
        location.href="https://www.monteria.gov.co/";
        },1000 * 5)   
    }else if(opcion=="guainia"){
        departamento.innerHTML ="Guainía";
        url.innerHTML = 'http://www.inirida-guainia.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Inírida";
        setTimeout(function(){
        location.href="http://www.inirida-guainia.gov.co/Paginas/default.aspx";
        },1000 * 5)   
    }else if(opcion=="guaviare"){
        departamento.innerHTML ="Guaviare";
        url.innerHTML = 'https://www.sanjosedelguaviare-guaviare.gov.co'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "San José del Guaviare";
        setTimeout(function(){
        location.href="https://www.sanjosedelguaviare-guaviare.gov.co/Paginas/default.aspx";
        },1000 * 5) 
    }else if(opcion=="huila"){
        departamento.innerHTML ="Huila";
        url.innerHTML = 'https://www.alcaldianeiva.gov.co/Paginas/Inicio.aspx'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Neiva";
        setTimeout(function(){
        location.href="https://www.alcaldianeiva.gov.co/Paginas/Inicio.aspx";
        },1000 * 5) 
    }else if(opcion=="guajira"){
        departamento.innerHTML ="La Guajira";
        url.innerHTML = 'https://laguajira.gov.co/web/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Riohacha";
        setTimeout(function(){
        location.href="https://laguajira.gov.co/web/";
        },1000 * 5) 
    }else if(opcion=="magdalena"){
        departamento.innerHTML ="Magdalena";
        url.innerHTML = 'http://www.magdalena.gov.co'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Santa Marta";
        setTimeout(function(){
        location.href="http://www.magdalena.gov.co/departamento/nuestro-departamento";
        },1000 * 5) 
    }else if(opcion=="meta"){
        departamento.innerHTML ="Meta";
        url.innerHTML = 'https://www.meta.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Villavicencio";
        setTimeout(function(){
        location.href="https://www.meta.gov.co/";
        },1000 * 5) 
    }else if(opcion=="nariño"){
        departamento.innerHTML ="Nariño";
        url.innerHTML = 'https://sitio.narino.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "San Juan de Pasto";
        setTimeout(function(){
        location.href="https://sitio.narino.gov.co/";
        },1000 * 5) 
    }else if(opcion=="norte de santander"){
        departamento.innerHTML ="Norte de Santander";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        url.innerHTML = 'http://www.nortedesantander.gov.co/'
        capital.innerHTML = "San José de Cúcuta";
        setTimeout(function(){
        location.href="http://www.nortedesantander.gov.co/";
        },1000 * 5) 
    }else if(opcion=="putumayo"){
        departamento.innerHTML ="Putumayo";
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        url.innerHTML = 'https://www.putumayo.gov.co/'
        capital.innerHTML = "Mocoa";
        setTimeout(function(){
        location.href="https://www.putumayo.gov.co/";
        },1000 * 5) 
    }else if(opcion=="quindio"){
        departamento.innerHTML ="Quindío";
        url.innerHTML = 'https://www.quindio.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Armenia";
        setTimeout(function(){
        location.href="https://www.quindio.gov.co/";
        },1000 * 5) 
    }else if(opcion=="risaralda"){
        departamento.innerHTML ="Risaralda";
        url.innerHTML = 'https://www.risaralda.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Pereira";
        setTimeout(function(){
        location.href="https://www.risaralda.gov.co/";
        },1000 * 5) 
    }
    else if(opcion=="san andres"){
        departamento.innerHTML ="San Andrés y Providencia";
        url.innerHTML = 'https://www.sanandres.gov.co'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "San Andrés";
        setTimeout(function(){
        location.href="https://www.sanandres.gov.co/index.php?option=com_content&view=article&id=116";
        },1000 * 5) 
    }else if(opcion=="santander"){
        departamento.innerHTML ="Santander";
        url.innerHTML = 'https://www.santander.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Bucaramanga";
        setTimeout(function(){
        location.href="https://www.santander.gov.co/";
        },1000 * 5) 
    }
    else if(opcion=="sucre"){
        departamento.innerHTML ="Sucre";
        url.innerHTML = 'https://www.santander.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Sincelejo";
        setTimeout(function(){
        location.href="https://www.santander.gov.co/";
        },1000 * 5) 
    }else if(opcion=="tolima"){
        departamento.innerHTML ="Tolima";
        url.innerHTML = 'https://www.tolima.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Ibagué";
        setTimeout(function(){
        location.href="https://www.tolima.gov.co/";
        },1000 * 5) 
    }else if(opcion=="valle del cauca"){
        departamento.innerHTML ="Valle del Cauca";
        url.innerHTML = 'https://www.valledelcauca.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Cali";
        setTimeout(function(){
        location.href="https://www.valledelcauca.gov.co/";
        },1000 * 5) 
    }else if(opcion=="vaupes"){
        departamento.innerHTML ="Vaupés";
        url.innerHTML = 'https://www.vaupes.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Mitú";
        setTimeout(function(){
        location.href="https://www.vaupes.gov.co/";
        },1000 * 5) 
    }else if(opcion=="vichada"){
        departamento.innerHTML ="Vichada";
        url.innerHTML = 'http://www.vichada.gov.co/'
        alert("Por favor espere mientras lo redirigimos a la pagina WEB");
        capital.innerHTML = "Puerto Carreño";
        setTimeout(function(){
        location.href="http://www.vichada.gov.co/";
        },1000 * 5) 
    }
}

if(opcion=="cundinamarca"){
    departamento.innerHTML ="Cundinamarca";
    url.innerHTML = 'https://bogota.gov.co/'
    capital.innerHTML = "Bogota";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    return location.href="https://bogota.gov.co/";
    },1000 * 5)
    console.log(capital);
}
else if(opcion=="amazonas"){
    departamento.innerHTML ="Amazonas";
    url.innerHTML = 'http://www.leticia-amazonas.gov.co/'
    capital.innerHTML = "Leticia";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="http://www.leticia-amazonas.gov.co/";
    },1000 * 5)
}else if(opcion=="antioquia"){
    departamento.innerHTML ="Antioquia";
    url.innerHTML = 'https://www.medellin.gov.co'
    capital.innerHTML = "Medellín";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://d6a716b127e5d19177b1413bd803e3d9";
    },1000 * 5)
}else if(opcion=="arauca"){
    departamento.innerHTML ="Arauca";
    url.innerHTML = 'https://www.arauca-arauca.gov.co/Paginas/default.aspx'
    capital.innerHTML = "Arauca";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="https://www.arauca-arauca.gov.co/Paginas/default.aspx";
    },1000 * 5)  
}else if(opcion=="atlantico"){
    departamento.innerHTML ="Atlántico";
    url.innerHTML = 'https://www.barranquilla.gov.co/'
    capital.innerHTML = "Barranquilla";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="https://www.barranquilla.gov.co/";
    },1000 * 5)  
}else if(opcion=="bolivar"){
    departamento.innerHTML ="Bolívar";
    url.innerHTML = 'https://www.cartagena.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Cartagena de Indias";
    setTimeout(function(){
    location.href="https://www.cartagena.gov.co/";
    },1000 * 5)  
}else if(opcion=="boyaca"){
    departamento.innerHTML ="Boyacá";
    url.innerHTML = 'https://www.tunja-boyaca.gov.co/'
    capital.innerHTML = "Tunja";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="https://www.tunja-boyaca.gov.co/";
    },1000 * 5)  
}else if(opcion=="caldas"){
    departamento.innerHTML ="Caldas";
    url.innerHTML = 'https://manizales.gov.co/'
    capital.innerHTML = "Manizales";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="https://manizales.gov.co/";
    },1000 * 5)  
}else if(opcion=="caqueta"){
    departamento.innerHTML ="Caquetá";
    url.innerHTML = 'http://www.florencia-caqueta.gov.co/'
    capital.innerHTML = "Florencia";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="http://www.florencia-caqueta.gov.co/";
    },1000 * 5)  
}else if(opcion=="casanare"){
    departamento.innerHTML ="Casanare";
    url.innerHTML = 'http://www.yopal-casanare.gov.co/'
    capital.innerHTML = "Yopal";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="http://www.yopal-casanare.gov.co/";
    },1000 * 5)   
}else if(opcion=="cauca"){
    departamento.innerHTML ="Cauca";
    url.innerHTML = 'http://www.popayan.gov.co/'
    capital.innerHTML = "Popayán";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    setTimeout(function(){
    location.href="http://www.popayan.gov.co/";
    },1000 * 5)   
}else if(opcion=="cesar"){
    departamento.innerHTML ="Cesar";
    url.innerHTML = 'http://valledupar-cesar.gov.co'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Valledupar";
    setTimeout(function(){
    location.href="http://valledupar-cesar.gov.co/Paginas/default.aspx";
    },1000 * 5)   
}else if(opcion=="choco"){
    departamento.innerHTML ="Chocó";
    url.innerHTML = 'http://www.quibdo-choco.gov.co'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Quibdó";
    setTimeout(function(){
    location.href="http://www.quibdo-choco.gov.co/Paginas/default.aspx";
    },1000 * 5)   
}else if(opcion=="cordoba"){
    departamento.innerHTML ="Córdoba";
    url.innerHTML = 'https://www.monteria.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Montería";
    setTimeout(function(){
    location.href="https://www.monteria.gov.co/";
    },1000 * 5)   
}else if(opcion=="guainia"){
    departamento.innerHTML ="Guainía";
    url.innerHTML = 'http://www.inirida-guainia.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Inírida";
    setTimeout(function(){
    location.href="http://www.inirida-guainia.gov.co/Paginas/default.aspx";
    },1000 * 5)   
}else if(opcion=="guaviare"){
    departamento.innerHTML ="Guaviare";
    url.innerHTML = 'https://www.sanjosedelguaviare-guaviare.gov.co'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "San José del Guaviare";
    setTimeout(function(){
    location.href="https://www.sanjosedelguaviare-guaviare.gov.co/Paginas/default.aspx";
    },1000 * 5) 
}else if(opcion=="huila"){
    departamento.innerHTML ="Huila";
    url.innerHTML = 'https://www.alcaldianeiva.gov.co/Paginas/Inicio.aspx'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Neiva";
    setTimeout(function(){
    location.href="https://www.alcaldianeiva.gov.co/Paginas/Inicio.aspx";
    },1000 * 5) 
}else if(opcion=="guajira"){
    departamento.innerHTML ="La Guajira";
    url.innerHTML = 'https://laguajira.gov.co/web/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Riohacha";
    setTimeout(function(){
    location.href="https://laguajira.gov.co/web/";
    },1000 * 5) 
}else if(opcion=="magdalena"){
    departamento.innerHTML ="Magdalena";
    url.innerHTML = 'http://www.magdalena.gov.co'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Santa Marta";
    setTimeout(function(){
    location.href="http://www.magdalena.gov.co/departamento/nuestro-departamento";
    },1000 * 5) 
}else if(opcion=="meta"){
    departamento.innerHTML ="Meta";
    url.innerHTML = 'https://www.meta.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Villavicencio";
    setTimeout(function(){
    location.href="https://www.meta.gov.co/";
    },1000 * 5) 
}else if(opcion=="nariño"){
    departamento.innerHTML ="Nariño";
    url.innerHTML = 'https://sitio.narino.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "San Juan de Pasto";
    setTimeout(function(){
    location.href="https://sitio.narino.gov.co/";
    },1000 * 5) 
}else if(opcion=="norte de santander"){
    departamento.innerHTML ="Norte de Santander";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    url.innerHTML = 'http://www.nortedesantander.gov.co/'
    capital.innerHTML = "San José de Cúcuta";
    setTimeout(function(){
    location.href="http://www.nortedesantander.gov.co/";
    },1000 * 5) 
}else if(opcion=="putumayo"){
    departamento.innerHTML ="Putumayo";
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    url.innerHTML = 'https://www.putumayo.gov.co/'
    capital.innerHTML = "Mocoa";
    setTimeout(function(){
    location.href="https://www.putumayo.gov.co/";
    },1000 * 5) 
}else if(opcion=="quindio"){
    departamento.innerHTML ="Quindío";
    url.innerHTML = 'https://www.quindio.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Armenia";
    setTimeout(function(){
    location.href="https://www.quindio.gov.co/";
    },1000 * 5) 
}else if(opcion=="risaralda"){
    departamento.innerHTML ="Risaralda";
    url.innerHTML = 'https://www.risaralda.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Pereira";
    setTimeout(function(){
    location.href="https://www.risaralda.gov.co/";
    },1000 * 5) 
}
else if(opcion=="san andres"){
    departamento.innerHTML ="San Andrés y Providencia";
    url.innerHTML = 'https://www.sanandres.gov.co'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "San Andrés";
    setTimeout(function(){
    location.href="https://www.sanandres.gov.co/index.php?option=com_content&view=article&id=116";
    },1000 * 5) 
}else if(opcion=="santander"){
    departamento.innerHTML ="Santander";
    url.innerHTML = 'https://www.santander.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Bucaramanga";
    setTimeout(function(){
    location.href="https://www.santander.gov.co/";
    },1000 * 5) 
}
else if(opcion=="sucre"){
    departamento.innerHTML ="Sucre";
    url.innerHTML = 'https://www.santander.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Sincelejo";
    setTimeout(function(){
    location.href="https://www.santander.gov.co/";
    },1000 * 5) 
}else if(opcion=="tolima"){
    departamento.innerHTML ="Tolima";
    url.innerHTML = 'https://www.tolima.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Ibagué";
    setTimeout(function(){
    location.href="https://www.tolima.gov.co/";
    },1000 * 5) 
}else if(opcion=="valle del cauca"){
    departamento.innerHTML ="Valle del Cauca";
    url.innerHTML = 'https://www.valledelcauca.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Cali";
    setTimeout(function(){
    location.href="https://www.valledelcauca.gov.co/";
    },1000 * 5) 
}else if(opcion=="vaupes"){
    departamento.innerHTML ="Vaupés";
    url.innerHTML = 'https://www.vaupes.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Mitú";
    setTimeout(function(){
    location.href="https://www.vaupes.gov.co/";
    },1000 * 5) 
}else if(opcion=="vichada"){
    departamento.innerHTML ="Vichada";
    url.innerHTML = 'http://www.vichada.gov.co/'
    alert("Por favor espere mientras lo redirigimos a la pagina WEB");
    capital.innerHTML = "Puerto Carreño";
    setTimeout(function(){
    location.href="http://www.vichada.gov.co/";
    },1000 * 5) 
}