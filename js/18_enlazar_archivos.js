"use strict"
mostrarHora();

    var fechaActual = new Date;
    var anyoActual = fechaActual.getFullYear();
    var diaActual = fechaActual.getDay();
    var mesActual = fechaActual.getMonth();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();

mostrarHora();

function mostrarHora(){

    var cambioHora = "";

    if(horaActual > 12){
        cambioHora = "p.m";
        horaActual = horaActual -12;
    }
    else{
        cambioHora = "a.m";
    }
    if(minutosActual < 10){
        minutosActual = "0" + minutosActual.toString();
    }
    if(horaActual < 10){
        horaActual = "0" + horaActual.toString();
    }
    alert("Hora actual: "+ horaActual+ ":" + minutosActual);
    
}

function mostrarFecha(){

    var diaActual = fechaActual.getDate();
    var mesActual = fechaActual.getMonth();
    var anyoActual = fechaActual.getFullYear();
    var meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    alert("Hoy es "+ diaActual + " de " + meses[mesActual] + " del año " + anyoActual);
}

//Función con parametros


function saludo(saludoNavidad){
    var saludoSencillo = "Bienvenido...!!"
   if(mesActual === 11){
       alert(saludoSencillo + " " + saludoNavidad);
   }
   else{
       alert(saludoSencillo);
   }
 
}

function presentacion(nombre, titulado){
   alert("Mi nombre es "+ nombre + " y soy del titulado "+ titulado);
}

//Función con retorno
//Si la compra es superior a 10000 tiene 10% de descuento
//Si la compra esta entre 5000 y 9999 tiene 5% de descuento
function validarDescuento(compra){
    var total = 0;
    if(compra >= 10000){
        total = compra * .9;
    }
    else if(compra >= 5000 && compra < 9999){
        total = compra * .95;
    }
    else if(compra < 5000){
        total = compra;
    }
    else{
        total = -1;
    }
    return total;
}
function calcularDescuento(costo){
    if(costo === -1){
        alert("Ha surgido un problema");
    }
    else if(costo >=1){
        alert("Costo total: "+ validarDescuento(costo));
    }
    
}