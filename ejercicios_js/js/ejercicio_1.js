/*Imprimir en consola Hola Mundo */
console.log("Hola Mundo ");
/*Saludo especial*/ 
let nombre= "Daniela";
console.log("Bienvenida Srta " + nombre);
/*Declarar un costo de determinado producto y agregar impuesto y valor domicilio. 
Al final hallar el valor total*/
let nomProducto="zzz";
let costo = 20000;
let impuesto = costo*0.5;
let valorDomocilio= 50;
let valorTotal= costo+impuesto+valorDomocilio;
console.log("El valor total de "+ nomProducto + " es de " + valorTotal);

/*Declarar el costo de una compra y determinar el descuento dependiendo del monto
1. Si el costo es menor o igual a 30.000, el descuento es del 5% sobre el total de la cuenta
2. Si el costo es superior a 30.000 e inferior a 100.000, el descuento es del 10% sobre el total de la compra
3. Si el costo es igual o superior a 100.000 el descuento es del 15% */

let costoCompra=200000;
let costoTotal= 0;
// let descuento= costo*0.5;

    if(costoCompra <= 30000){
        costoTotal= costoCompra -(costoCompra * 0.05);
        console.log("El costo total de la compra es "+ costoTotal);
    }
    else if (costoCompra >= 30000 && 100000){
        costoTotal =costoCompra - (costoCompra * 0.10);
        console.log("El costo total de la compra es "+ costoTotal);
    }
    else if (costoCompra >= 100000){
        costoTotal =costoCompra - (costoCompra * 0.15);
        console.log("El costo total de la compra es "+ costoTotal);
    };

/*Crear un arreglo que contengan los nombre de cada uno y recorrer dicho arreglo con un for para mostrar en pantalla cada uno de los elementos */
nombre = ["David", "Francisco", "Daniela", "Karen","Evelin"];
for(i =0; i <= 4; i++){
    console.log("Aprendiz "+ (i + 1) + ": " + nombre[i]);
}
/*Declarar una cadena de texto y convertir todo el texto a minúscula y la primera en mayúscula */
let palabra = "pitalito";
palabra= palabra.toLowerCase();
palabra = palabra[0].toUpperCase() + palabra.slice(1);
console.log(palabra);
