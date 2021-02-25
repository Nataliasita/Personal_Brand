import validator from './validator.js';

cambio_paginas();

function cambio_paginas(){

let comprar = document.getElementById("comprar"); 
comprar.onclick= function(){
  document.querySelector(".header").style.display = "none";
  document.querySelector(".seleccion").style.display = "block"; 
}

let valor_pagar;
let carrito1 = document.getElementById("carrito1"); 
carrito1.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Paleta Sombras";
  document.getElementById("valor").textContent = "$350.000";
  document.getElementById("image1").style.display = "block";
  document.getElementById("final").textContent = "$350.000"; 
  valor_pagar="$350.000";
}

let carrito2 = document.getElementById("carrito2");  carrito2.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Set Brochas";
  document.getElementById("valor").textContent = "$200.000";
  document.getElementById("image2").style.display = "block"; 
  document.getElementById("final").textContent = "$200.000";
  valor_pagar="$200.000";
}

let carrito3 = document.getElementById("carrito3");  
carrito3.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Set Labiales";
  document.getElementById("valor").textContent = "$125.000";
  document.getElementById("image3").style.display = "block";
  document.getElementById("final").textContent = "$125.000"; 
  valor_pagar="$125.000";
}

let validar = document.getElementById("validar"); 
validar.onclick= function(){
  document.querySelector(".tarjeta").style.display = "none";
  document.querySelector(".verificacion").style.display = "block"; 
 
  let nombre_usuario = document.getElementById("titular").value;
  let tipo_identificacion = document.getElementById("tipo_identificacion").value;
  let numero_identificacion = document.getElementById("numero_identificacion").value;
  let fecha_expiracion = document.getElementById("fecha_expiracion").value;
  let numerosIsValid = document.getElementById("numero_tarjeta").value.split("");   
  let numerosMaskify = document.getElementById("numero_tarjeta").value.split(""); 
  
  console.log("funcion isvalid",validator.isValid(numerosIsValid));
  console.log("funcion maskify",validator.maskify(numerosMaskify));
 
  let validado = validator.isValid(numerosIsValid);
  let enmascarado = validator.maskify(numerosMaskify);

  if (validado === true)
  { 
    document.getElementById("confirmacion_nombre").textContent = nombre_usuario; 
    document.getElementById("confirmacion_tipo_documento").textContent = tipo_identificacion; 
    document.getElementById("confirmacion_numero_documento").textContent = numero_identificacion; 
    document.getElementById("confirmacion_numero_tarjeta").textContent = enmascarado; 
    document.getElementById("confirmacion_fecha_expiracion").textContent = fecha_expiracion; 
    document.getElementById("confirmacion_valor_producto").textContent = valor_pagar;
  }
  else{
    document.getElementById("confirmacion_nombre").textContent = "TRANSACCION DENEGADA";
  }  
}
}
