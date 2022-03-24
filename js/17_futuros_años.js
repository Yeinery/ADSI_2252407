var fechaNacimiento = new Date("November 12, 2003");
var fechaFutura = new Date("September 17, 2028")

var anyoFechaNacimiento = fechaNacimiento.getFullYear();
var anyoFechaFutura = fechaFutura.getFullYear();
var mesFechaNacimiento = fechaFutura.getMonth();
var mesFechaFutura = fechaFutura.getMonth();
var diaFechaNacimiento = fechaNacimiento.getDate();
var diaFechaFutura = fechaFutura.getDate();
var edad = 0;

calcular();
function calcular(){

    edad = anyoFechaFutura - anyoFechaNacimiento;

    if(anyoFechaNacimiento < anyoFechaFutura){
        if(mesFechaNacimiento < mesFechaFutura){
            edad = anyoFechaFutura - anyoFechaNacimiento;
            
        }
        else if(mesFechaNacimiento === mesFechaFutura){
            if(diaFechaNacimiento <= diaFechaFutura){
                edad = anyoFechaFutura - anyoFechaNacimiento;
            }
           
        }
        else {
            edad = edad -1
        }
   
    }
    else if(anyoFechaNacimiento === anyoFechaFutura){
        console.log("Edad: 0 años");
    }
    else{
        console.log("Los datos ingresados son incorrectos. Verifique por favor...")
    }
    console.log("Edad: "+ edad + " años")
};