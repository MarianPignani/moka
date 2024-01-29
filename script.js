
const EMAIL = prompt ("ingrese su email:");
const CONTRASENA = prompt ("ingrese una contraseña que contenga 8 caracteres:");


function registrarse(EMAIL, CONTRASENA){
    
    if (CONTRASENA.length >=8) {
        console.log ("Bienvenido.");
    } else {
        alert ("La contraseña debe tener al menos 8 caracteres.");
      }

}

registrarse(EMAIL, CONTRASENA); 




let precio = parseFloat(prompt("Ingresa el precio del producto:"))
        while(precio <= 0){
            alert("Ingrese un precio mayor que cero:")
            precio = Number(prompt("Ingresa el precio del producto"))
        }
let cantCuotas = parseFloat(prompt("Ingresa la cantidad de cuotas a pagar:"))
        while(cantCuotas != 1 && cantCuotas !=3 && cantCuotas !=6 ){
            alert("Ingrese un número de cuotas igual a 1, 3 o 6:")
            cantCuotas = Number(prompt("Ingresa la cantidad de cuotas a pagar"))
        }