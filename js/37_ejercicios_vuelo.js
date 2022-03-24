class Vuelos{
    constructor(horaSalida, horaLlegada, destino){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
    }
}
 window.onload = function(){
    recorrerVuelos();
}
let horaSalida1 = new Date(2022, 03, 18, 10, 15, 0);
let horaSalida1Str = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022, 03, 18, 12, 25, 0);
let horaLlegada1Str = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date(2022, 03, 18, 11, 30, 0);
let horaSalida2Str = horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date(2022, 03, 18, 11, 8, 0);
let horaLlegada2Str = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let destino1 = "ADZ";
let duracion = "2h-8 min"

let vuelo = [{
    "horaSalida" : horaSalida1Str,
    "horaLlegada" : horaLlegada1Str,
    "destino" : destino1,
    "duracion": duracion
     },
    {
     "horaSalida" : horaSalida2Str,
     "horaLlegada" : horaLlegada2Str,
     "destino" : destino1,
     "duracion": duracion
     }];

 function recorrerVuelos(){
     for (let i=0; i<vuelo.length; i++){
         let horaSalida = vuelo[i].horaSalida;
         let horaLlegada = vuelo[i].horaLlegada;
         let destino = vuelo[i].destino;
         let duracion = vuelo[i].duracion;
         mostrarInfo(horaSalida, horaLlegada, destino, duracion);
     }
 }

function mostrarInfo(){
    let contenedorPrincipal = document.getElementById("content-main");
    let contenedor = document.createElement("div");
    contenedorPrincipal.appendChild(contenedor);
    contenedor.setAttribute("class", "style-contenedor");

    let encabezado = document.createElement("label");
    contenedor.appendChild(encabezado);
    let textoEncabezado = document.createTextNode("Más Económico");
    encabezado.appendChild(textoEncabezado);
    encabezado.setAttribute("class", "style-encabezado");

    let salida = document.createElement("label");
    contenedor.appendChild(salida);
    let textoSalida = document.createTextNode(vuelo[0].horaSalida + " a.m");
    salida.appendChild(textoSalida);
    salida.setAttribute("class", "style-salida");

    let llegada = document.createElement("label");
    contenedor.appendChild(llegada);
    let textoLlegada = document.createTextNode(vuelo[0].horaLlegada + " a.m");
    llegada.appendChild(textoLlegada);
    llegada.setAttribute("class", "style-llegada");

    let destino = document.createElement("label");
    contenedor.appendChild(destino);
    let textoDestino = document.createTextNode(vuelo[0].destino);
    destino.appendChild(textoDestino);
    destino.setAttribute("class", "style-destino");
  
    let duracion = document.createElement("label");
    contenedor.appendChild(duracion);
    let textoDuracion = document.createTextNode("Duración " + vuelo[0].duracion);
    duracion.appendChild(textoDuracion);
    duracion.setAttribute("class", "style-duracion");
}