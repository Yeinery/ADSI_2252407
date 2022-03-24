function obtenerHermanos(){
    let hijosDiv= document.getElementById("hermanos");
    let elemento3= hijosDiv.childNodes[5];
    let previoushermano= elemento3.previousElementSibling.innerHTML;
    alert(previoushermano);
    let nexthermano= elemento3.nextElementSibling.innerHTML;
    alert(nexthermano);
    //Next
    //Previous
}