import validator from './validator.js';

cambio_paginas();
function cambio_paginas(){
let comprar = document.getElementById("comprar"); 
comprar.onclick= function(){
  document.querySelector(".header").style.display = "none";
  document.querySelector(".seleccion").style.display = "block"; 
}

let carrito1 = document.getElementById("carrito1"); 
carrito1.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Paleta Sombras";
  document.getElementById("valor").textContent = "$350.000";
  document.getElementById("image1").style.display = "block";
  document.getElementById("final").textContent = "$350.000"; 
}

let carrito2 = document.getElementById("carrito2");  carrito2.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Set Brochas";
  document.getElementById("valor").textContent = "$200.000";
  document.getElementById("image2").style.display = "block"; 
  document.getElementById("final").textContent = "$200.000";
}

let carrito3 = document.getElementById("carrito3");  
carrito3.onclick= function(){
  document.querySelector(".seleccion").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block"; 
  document.getElementById("detalle").textContent = "Set Labiales";
  document.getElementById("valor").textContent = "$125.000";
  document.getElementById("image3").style.display = "block";
  document.getElementById("final").textContent = "$125.000"; 
}
let validar = document.getElementById("validar"); 
validar.onclick= function(){
  document.querySelector(".tarjeta").style.display = "none";
  document.querySelector(".verificacion").style.display = "block"; 
  let numerosIsValid = document.getElementById("numerotc").value.split("");   

 let numerosMaskify = document.getElementById("numerotc").value.split(""); 
  validator.isValid(numerosIsValid);
  validator.maskify(numerosMaskify);
/*console.log(validator.resultado);
  if (validator.resultado === true)
  {
     document.getElementById("ver1").textContent = "aceptado";
  }
  else{
    document.getElementById("ver1").textContent = "rechazado";
  }*/
}
}
