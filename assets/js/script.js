let precio = 400000
let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad")
let valorTotalSpan = document.querySelector(".valor-total")
let cantidad = 0
precioSpan.innerHTML = precio



document.getElementById("botonMas").onclick = function(){
    cantidad += 1	
    cantidadSpan.innerHTML = cantidad 
    valorTotalSpan.innerHTML = precio * cantidad

} 
document.getElementById("botonMenos").onclick = function(){
   if (cantidad > 0) {
    cantidad -= 1}
   cantidadSpan.innerHTML = cantidad
   valorTotalSpan.innerHTML = precio * cantidad
} 

