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

let horaSalida3 = new Date(2022, 03, 18, 11, 15, 0);
let horaSalida3Str = horaSalida3.getHours().toString() + ":" + horaSalida3.getMinutes().toString();

let horaLlegada3 = new Date(2022, 03, 18, 01, 10, 0);
let horaLlegada3Str = horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

let destino1 = "ADZ";
let destino2= "CRG";
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
        "valor": "900.000"
    }];

 function recorrerVuelos(){
     for (let i=0; i<vuelo.length; i++){
         let horaSalidaObj = vuelo[i].horaSalida;
         let horaLlegadaObj = vuelo[i].horaLlegada;
         let destinoObj = vuelo[i].destino;
         let duracionObj = vuelo[i].duracion;
         let valorObj = vuelo[i].valor;
         mostrarInfo(horaSalidaObj, horaLlegadaObj, destinoObj, duracionObj, valorObj);
     }
 }

function mostrarInfo(horaSalida, horaLlegada, destino, duracion, valor){
    let contenedorPrincipal = document.getElementById("content-main");
    let contenedor = document.createElement("div");
    contenedorPrincipal.appendChild(contenedor);
    contenedor.setAttribute("class", "style-contenedor");

    let encabezado = document.createElement("label");
    contenedor.appendChild(encabezado);
    let textoEncabezado = document.createTextNode("Más Económico");
    encabezado.appendChild(textoEncabezado);
    encabezado.setAttribute("class", "style-encabezado");

    let salidaObjElem = document.createElement("label");
    contenedor.appendChild(salidaObjElem);
    let textoSalida = document.createTextNode(horaSalida + " a.m");
    salidaObjElem.appendChild(textoSalida);
    salidaObjElem.setAttribute("class", "style-salida");

    let llegadaObjElem = document.createElement("label");
    contenedor.appendChild(llegadaObjElem);
    let textoLlegada = document.createTextNode(horaLlegada + " p.m");
    llegadaObjElem.appendChild(textoLlegada);
    llegadaObjElem.setAttribute("class", "style-llegada");

    let destinoObjElem = document.createElement("label");
    contenedor.appendChild(destinoObjElem);
    let textoDestino = document.createTextNode(destino);
    destinoObjElem.appendChild(textoDestino);
    destinoObjElem.setAttribute("class", "style-destino");
  
    let duracionObjElem = document.createElement("label");
    contenedor.appendChild(duracionObjElem);
    let textoDuracion = document.createTextNode("Duración " + duracion);
    duracionObjElem.appendChild(textoDuracion);
    duracionObjElem.setAttribute("class", "style-duracion");

    let textoInfoValorObjElem = document.createElement("label")
    contenedor.appendChild(textoInfoValorObjElem);
    let infoValor = document.createTextNode("Adultos desde ");
    textoInfoValorObjElem.appendChild(infoValor);
    textoInfoValorObjElem.setAttribute("class", "style-infoValor")

    let valorObjElem = document.createElement("label");
    contenedor.appendChild(valorObjElem);
    let textvalor = document.createTextNode("COP " + valor);
    valorObjElem.appendChild(textvalor);
    valorObjElem.setAttribute("class", "style-valor");

    // let ciudadSalida = document.createElement("label");
    // contenedor.appendChild(ciudadSalida);
    // let textoCiudad = document.createTextNode("BOG");
    // ciudadSalida.appendChild(textoCiudad);
    // valor.setAttribute("class", "style-ciudadSalida");

    let tipoVueloObjElem = document.createElement("label");
    contenedor.appendChild(tipoVueloObjElem);
    let textTipoVuelo = document.createTextNode("Directo");
    tipoVueloObjElem.appendChild(textTipoVuelo);
    tipoVueloObjElem.setAttribute("class", "style-tipoVuelo");
}