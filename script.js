function calcularPrecioFinal() {
    // en cantEnt almaceno la cantidad de entradas que ingreso el usuario
    let cantEnt=document.getElementById("cantEntradas").value;  
    console.log("Cantidad de entradas: " + cantEnt);
    
    // en desc almaceno el tipo de usuario y el descuento que elijió el usuario
    let desc=document.getElementById("porcDescuento").value;
    console.log("Descuento: " + desc + "%");

    // obtento el descuento que hay que realizar
    let descTotal= (cantEnt*200) * desc/100;
    //10 *1000 * 10/ 100=1000
    console.log("Descuento Total: "  + descTotal + "%");

    // resto el descuento total del precio total
    let precioFin=(cantEnt*200) - descTotal;
    console.log("Precio final: $" + precioFin);

    formulario.addEventListener('submit', function() {
        event.preventDefault();
        let total = document.getElementById("precio");
        total.innerHTML=precioFin;
    })
    
}
let formulario = document.getElementById("formulario");
let total = document.getElementById("precio");

formulario.addEventListener('reset', function() {
    formulario.reset();
    total.innerHTML="";
})
