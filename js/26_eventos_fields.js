function validarInfo(numeroDocumento){
    var texto = document.getElementById(numeroDocumento).value;
    if(texto === ""){
        alert("Ingrese el número del documento");
    }
}
function buscarCiudad(){
    var nombreCiudad;
    var codigoPostal = document.getElementById("codigo").value;
    switch(codigoPostal){
        case "41551":
            nombreCiudad = "Pitalito";
            break;
        case "41001":
            nombreCiudad = "Neiva";
            break;
        case "41668":
            nombreCiudad = "San Agustín";
            break;
        case "41530":
            nombreCiudad = "Palestina";
    }
    document.getElementById("ciudad").value = nombreCiudad;
}