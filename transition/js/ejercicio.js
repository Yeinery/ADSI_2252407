const Busqueda = document.getElementById("botonBuscar");
// const barraBusqueda = document.getElementById("busqueda");
Busqueda.addEventListener("click", mostrar);
    function mostrar(){
        document.getElementById("encabezado").innerHTML = "";
        llamarnuevaVentana();
    }
    function llamarnuevaVentana(){
        let icono = document.createElement("i");
        let contenedor = document.getElementById("encabezado");
        contenedor.appendChild(icono);
        icono.setAttribute("class", "fa fa-search");
    }
// function mostrar(){
//     let contenedor = document.getElementById("content-main")
//     let contenedor2 = document.createElement("input");
//     contenedor.appendChild(contenedor2);
// }