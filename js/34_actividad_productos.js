//   let nuevoNombre = "Evelin";
//   let nombreAntiguo = "Daniela";


//   function mostrarNuevoNombre(){
//     /*Set */
//     document.getElementById("mostrarNombre").innerHTML = nuevoNombre;
//     alert("El nombre ha sido cambiado con éxito...");
// }
//   function mostrarNombreAntiguo(){  
//     /*Get */
//    let nombreInterfaz = document.getElementById("mostrarNombre").innerHTML;
//    if (nombreInterfaz === nombreAntiguo){
//        alert("El nombre actual es el nombre inicial...");
//    }
//    else{
//        document.getElementById("mostrarNombre").innerHTML= nombreAntiguo;
//    }

// }

     var inicio=0;
     var cantidad="";
     var valorTotal  = 35000;
     var formatear = new Intl.NumberFormat('es-Es');

    function aumentar(){
   if (inicio <= 9){
       cantidad = document.getElementById('cantidad').value = ++inicio;
       document.getElementById("total").innerHTML = cantidad;
   }
   calcularTotal();
    }

    function disminuir(){
        if(inicio >= 1){
            cantidad = document.getElementById('cantidad').value= --inicio;
            document.getElementById("total").innerHTML = cantidad;
            document.getElementById("multiplicar").innerHTML = formatear.format(parseInt(cantidad * valorTotal));
        }
    }
    function calcularTotal(){
    let valorUnidad = document.getElementById("valorUnitario").innerHTML;
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra= valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
    }
