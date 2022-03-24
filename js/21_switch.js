//Ejemplo de Switch con enteros
var nota = 4;
switch(nota){
    case 5:
        console.log("Exelente");
        break
    case 4:
    case 3:
        console.log("Bien");
        break;
    case 2:
    case 1:
        console.log("Mal");
        break;
    default:
        console.log("Ingrese una calificación valida");
}

//Tipo texto
var ciudad = "Bogota";
switch(ciudad){
    case "Bogota":
        console.log("2600 m.s.n.m");
        break;
    case "Cali":
        console.log("1018 m.s.n.m");
        break;
    case "Neiva":
        console.log("442 m.s.n.m");
        break;
    case "Pitalito":
        console.log("1318 m.s.n.m");
        break;
    default:
        console.log("Ingrese una ciudad validad")
}