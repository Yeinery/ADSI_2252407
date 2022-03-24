class Libros {
    constructor(Nombre, anyo, precio, edicion,imagen) {
        this.Nombre = Nombre;
        this.anyo = anyo;
        this.precio = precio;
        this.edicion = edicion;
        this.imagen = imagen;
    }
}

let libro1 = new Libros("Evelyn Hugo", "Taylor Jenkins Reid", 62180,"Lanzamiento: ", "img/7Maridos.jpg");
let libro2 = new Libros("Asfixia", "Alex Mírez", 112600,"Lanzamiento: ", "img/Asfixiia.jpg");
let libro3 = new Libros("Boulevard", "Flor M Salvador", 55000,"Lanzamiento: ", "img/Boulevard.jpg");
let libro4 = new Libros("Un cuento perfecto", "Elisabet Benavent", 103000, "Lanzamiento: ","img/UnCuentoPerfecto.jpg");


function mostrarLibro(libro) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    let portada = document.createElement("img");
    let PrecioLibro = document.createElement("label");

    let ValorLibro = new Intl.NumberFormat('es-ES', {}).format(libro.precio);
    let Valor = document.createTextNode("$" + ValorLibro);

    let presentacion = document.createElement("label");
    let textoDescripcion = document.createTextNode(libro.Nombre);
    let anyoPublicacion = document.createElement("label");
    // let textoAnyo = document.createTextNode(libro.edicion);
    let fechaPublicación = document.createElement("label");
    let apartado = document.createTextNode(libro.anyo );

    
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.appendChild(portada);
    contenedorImg.appendChild(PrecioLibro);
    contenedorImg.appendChild(presentacion);
    presentacion.appendChild(textoDescripcion);
    PrecioLibro.appendChild(Valor);
    // anyoPublicacion.appendChild(textoAnyo);
    fechaPublicación.appendChild(apartado);
    contenedorImg.appendChild(fechaPublicación);


    contenedorImg.setAttribute("class", "style-contentImg");
    portada.setAttribute("src", libro.imagen);
    portada.setAttribute("class", "img-style");
    PrecioLibro.setAttribute("class", "style-precio");
    presentacion.setAttribute("class", "style-presentacion");
    fechaPublicación.setAttribute("class", "style-fechaPublicación");
    // anyoPublicacion.setAttribute("class", "style-anyo");
}

 window.addEventListener("keydown", function(event) {
     let busqueda = document.getElementById("Buscar").value;
     if(event.key == "Enter","Ir") {1
        if (busqueda == "Libros") {
            mostrarLibro(libro1);
            mostrarLibro(libro2);
            mostrarLibro(libro3);
            mostrarLibro(libro4);
        }
        else if (busqueda == "Libro 4") {
            mostrarLibro(libro4);
        }
        else {
        // alert("No se han encontrado coincidencias.");
        }
     }
 });
