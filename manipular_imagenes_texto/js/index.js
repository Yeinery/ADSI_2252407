// function movimiento(){
//     alert('Holaa :3');
// }
// function volverInvisible(){
//     document.getElementById("imagen2").className = "img_invisible";
// }
// function cambiarImagen(){
//     document.getElementById("imagen_principal").src = "img/grande2.jpg";
// }
// function retornarImagen(){
//     document.getElementById("imagen_principal").src="img/grande2.jpg";
// }

function intercambiar(){
    document.getElementById("imagen_principal").scr= "img/grande.jpg";
}
function interConArg(id, ruta){
    document.getElementById(id).src = ruta;
}
function interConArg(idPic, ruta){
    let newPic = document.getElementById(idPic);
    newPic.src = ruta;
}
