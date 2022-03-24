function CrearTabla(){
    if(validarFormulario() == false) 
    return alert("Por favor inserte la información");
    
        if(!document.getElementById("body")) InsertarTabla(); 
        InsertarCeldas(validarFormulario());
}

let nodeAddTable = document.createElement("table");
let tabla = document.getElementById('table_js');

function InsertarTabla(){
    tabla.appendChild(nodeAddTable);

    let theAd = document.createElement("thead");
    nodeAddTable.appendChild(theAd);
    
    let toaddtr = document.createElement("tr");
    theAd.appendChild(toaddtr);

    let toAddTh = document.createElement("th");
    let contenidotext1 = document.createTextNode("Codigo");
    toaddtr.appendChild(toAddTh);
    toAddTh.appendChild(contenidotext1);

    let toAddTh2 = document.createElement("th");
    let contenidotext2 = document.createTextNode("Descripcion");
    toaddtr.appendChild(toAddTh2);
    toAddTh2.appendChild(contenidotext2);

    let toAddTh3 = document.createElement("th");
    let contenidotext3 = document.createTextNode("Valor Unitario");
    toaddtr.appendChild(toAddTh3);
    toAddTh3.appendChild(contenidotext3);
    
    let toAddTh4 = document.createElement("th");
    let contenidotext4 = document.createTextNode("Unidades");
    toaddtr.appendChild(toAddTh4);
    toAddTh4.appendChild(contenidotext4);

    // toaddtr.setAttribute("class","nombre_encabezado");
    nodeAddTable.setAttribute("class", "table-style");
      
}

function InsertarCeldas(){
    let ToAddBody = document.createElement("tbody");
    ToAddBody.setAttribute("id","body");

    let ToAddBodyTr = document.createElement("tr");
    nodeAddTable.appendChild(ToAddBody);
    ToAddBody.appendChild(ToAddBodyTr);

    let ToAddTd = document.createElement("td");
    let codigo = document.getElementById("codigo").value;
    let ToAddText = document.createTextNode(codigo);
    ToAddBodyTr.appendChild(ToAddTd);
    ToAddTd.appendChild(ToAddText);

    let ToAddTd2 = document.createElement("td");
    let descripcion = document.getElementById("descripcion").value;
    let ToAddText2 = document.createTextNode(descripcion);
    ToAddBodyTr.appendChild(ToAddTd2);
    ToAddTd2.appendChild(ToAddText2);

    let ToAddTd3 = document.createElement("td");
    let valorunidad = document.getElementById("valorUnitario").value;
    let ToAddText3 = document.createTextNode(valorunidad);
    ToAddBodyTr.appendChild(ToAddTd3);
    ToAddTd3.appendChild(ToAddText3);

    let ToAddTd4 = document.createElement("td");
    let Stock = document.getElementById("unidades").value;
    let ToAddText4 = document.createTextNode(Stock);
    ToAddBodyTr.appendChild(ToAddTd4);
    ToAddTd4.appendChild(ToAddText4);
 
    LimpiarFormulario();
}

function validarFormulario(){
    if(document.getElementById('codigo').value.trim() == ""){
        document.getElementById('codigo').focus();
        return false;
    }
    if(descripcion = document.getElementById('descripcion').value.trim() == ""){
        descripcion = document.getElementById('descripcion').focus;
        return false;
    }
    if(document.getElementById('valorUnitario').value.trim()  == ""){
        document.getElementById('valorUnitario').focus;
        return false;
    }
    if(document.getElementById('unidades').value.trim() == ""){
        document.getElementById('unidades').focus;
        return false;
    }
    return true;
}
function LimpiarFormulario(){
    var codigo = document.getElementById("codigo").value ="";
    var descripcion = document.getElementById("descripcion").value ="";
    var valorunitario = document.getElementById("valorUnitario").value ="";
    var Stock = document.getElementById("unidades").value ="";
}