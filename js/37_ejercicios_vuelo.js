class Vuelos{
    constructor(horaSalida, horaLlegada, destino, valor){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
        this.valor = valor;
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

let horaLlegada2 = new Date(2022, 03, 18, 01, 15, 0);
let horaLlegada2Str = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let horaSalida3 = new Date(2022, 03, 18, 09, 30, 0);
let horaSalida3Str = horaSalida3.getHours().toString() + ":" + horaSalida3.getMinutes().toString();

let horaLlegada3 = new Date(2022, 03, 18, 11, 15, 0);
let horaLlegada3Str = horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

let destino1 = "ADZ";
let destino2= "OOO";
let destino3= "MMM";
let duracion = "2h-8 min"

let vuelo = [{
    "horaSalida" : horaSalida1Str,
    "horaLlegada" : horaLlegada1Str,
    "destino" : destino1,
    "duracion": duracion,
    "valor": "1.000.000"
     },
    {
     "horaSalida" : horaSalida2Str,
     "horaLlegada" : horaLlegada2Str,
     "destino" : destino2,
     "duracion": duracion,
     "valor": "2.000.000"
     },
     {
        "horaSalida" : horaSalida3Str,
        "horaLlegada" : horaLlegada3Str,
        "destino" : destino3,
        "duracion": duracion,
        "valor": "300.000"
    }];

 function recorrerVuelos(){
     for (let i=0; i<vuelo.length; i++){
         let horaSalida = vuelo[i].horaSalida;
         let horaLlegada = vuelo[i].horaLlegada;
         let destino = vuelo[i].destino;
         let duracion = vuelo[i].duracion;
         let valor = vuelo[i].valor;
         mostrarInfo(horaSalida, horaLlegada, destino, duracion, valor);
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

    let textoInfoValor = document.createElement("label")
    contenedor.appendChild(textoInfoValor);
    let infoValor = document.createTextNode("Adultos desde ");
    textoInfoValor.appendChild(infoValor);
    textoInfoValor.setAttribute("class", "style-infoValor")

    let valor = document.createElement("label");
    contenedor.appendChild(valor);
    let textvalor = document.createTextNode("COP " + vuelo[0].valor);
    valor.appendChild(textvalor);
    valor.setAttribute("class", "style-valor");

    // let ciudadSalida = document.createElement("label");
    // contenedor.appendChild(ciudadSalida);
    // let textoCiudad = document.createTextNode("BOG");
    // ciudadSalida.appendChild(textoCiudad);
    // valor.setAttribute("class", "style-ciudadSalida");

    let tipoVuelo = document.createElement("label");
    contenedor.appendChild(tipoVuelo);
    let textTipoVuelo = document.createTextNode("Directo");
    tipoVuelo.appendChild(textTipoVuelo);
    tipoVuelo.setAttribute("class", "style-tipoVuelo");
}