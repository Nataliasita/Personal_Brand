import validator from './validator.js';

cambio_paginas();

function cambio_paginas() {

  let boton_comprar = document.getElementById("boton_comprar");
  boton_comprar.onclick = function () {
    document.querySelector(".header").style.display = "none";
    document.querySelector(".seleccion_productos").style.display = "block";
  }

  let valor_pagar;
  let boton_carrito1 = document.getElementById("boton_carrito1");
  boton_carrito1.onclick = function () {
    document.querySelector(".seleccion_productos").style.display = "none";
    document.querySelector(".ingresar_informacion").style.display = "block";
    document.getElementById("detalle_compra").textContent = "Paleta Sombras";
    document.getElementById("detalle_valor").textContent = "$350.000";
    document.getElementById("image1").style.display = "block";
    document.getElementById("resena1").style.display = "block";
    document.getElementById("precio_final").textContent = "$350.000";
    valor_pagar = "$350.000";
  }

  let boton_carrito2 = document.getElementById("boton_carrito2");
  boton_carrito2.onclick = function () {
    document.querySelector(".seleccion_productos").style.display = "none";
    document.querySelector(".ingresar_informacion").style.display = "block";
    document.getElementById("detalle_compra").textContent = "Set Brochas";
    document.getElementById("detalle_valor").textContent = "$200.000";
    document.getElementById("image2").style.display = "block";
    document.getElementById("resena2").style.display = "block";
    document.getElementById("precio_final").textContent = "$200.000";
    valor_pagar = "$200.000";
  }

  let boton_carrito3 = document.getElementById("boton_carrito3");
  boton_carrito3.onclick = function () {
    document.querySelector(".seleccion_productos").style.display = "none";
    document.querySelector(".ingresar_informacion").style.display = "block";
    document.getElementById("detalle_compra").textContent = "Set Labiales";
    document.getElementById("detalle_valor").textContent = "$125.000";
    document.getElementById("image3").style.display = "block";
    document.getElementById("resena3").style.display = "block";
    document.getElementById("precio_final").textContent = "$125.000";
    valor_pagar = "$125.000";
  }
  var formulario = document.getElementById("form");
  formulario.addEventListener("focus", function (event) {
    event.target.style.background = "linear-gradient(to right,pink, white)";
  }, true);
  formulario.addEventListener("blur", function (event) {
    event.target.style.background = "";
  }, true);

  document.getElementById("numero_tarjeta").addEventListener('keyup', validacion_tarjeta, false);

  function validacion_tarjeta() {
    if (document.getElementById("numero_tarjeta").value.length > 10) {
      //console.log("entro variable intento")
      let numerosIsValid = document.getElementById("numero_tarjeta").value;
      //console.log (numerosIsValid);
      //console.log(validator.isValid("4083952015263"))
      if (validator.isValid(numerosIsValid)) {
        document.getElementById("confirmacion_tarjeta").textContent = "Tarjeta Valida";
        document.getElementById("confirmacion_tarjeta").style.color = "green";
      } else {
        document.getElementById("confirmacion_tarjeta").textContent = "Tarjeta Invalida";
        document.getElementById("confirmacion_tarjeta").style.color = "red";
      }
    }
  }
  let boton_validar = document.getElementById("boton_validar");
  boton_validar.onclick = function () {
    document.querySelector(".ingresar_informacion").style.display = "none";
    document.querySelector(".verificacion").style.display = "block";

    let nombre_usuario = document.getElementById("titular").value;
    let tipo_identificacion = document.getElementById("tipo_identificacion").value;
    let numero_identificacion = document.getElementById("numero_identificacion").value;
    let fecha_expiracion = document.getElementById("fecha_expiracion").value;
    let numerosIsValid = document.getElementById("numero_tarjeta").value;
    let numerosMaskify = document.getElementById("numero_tarjeta").value;

    //console.log("funcion isvalid",validator.isValid(numerosIsValid));
    //console.log("funcion maskify",validator.maskify(numerosMaskify));

    let enmascarado = validator.maskify(numerosMaskify);
    //console.log("PRUEBA!!!!!!!",fecha_expiracion);
    // 
    if (validator.isValid(numerosIsValid) === true && nombre_usuario.length > 0 &&
      numero_identificacion.length > 6 && numero_identificacion.length < 11) {
      //console.log("valido");
      document.getElementById("letrero_aprobacion").textContent = "TRANSACCION APROBADA";
      document.getElementById("imagen_denegado").style.display = "none";
      document.getElementById("imagen_aprobado").style.display = "block";
      document.getElementById("informacion_confirmacion").style.display = "block";
      document.getElementById("confirmacion_nombre").textContent = "Titular : " + nombre_usuario;
      document.getElementById("confirmacion_tipo_documento").textContent = "Tipo ID : " + tipo_identificacion;
      document.getElementById("confirmacion_numero_documento").textContent = "Numero ID : " + numero_identificacion;
      document.getElementById("confirmacion_numero_tarjeta").textContent = "Numero Tarjeta : " + enmascarado;
      document.getElementById("confirmacion_fecha_expiracion").textContent = "Fecha Expiracion : " + fecha_expiracion;
      document.getElementById("confirmacion_valor_producto").textContent = "Valor total aprobado : " + valor_pagar;
    } else {
      //console.log("invalido");
      document.getElementById("letrero_aprobacion").textContent = "TRANSACCION DENEGADA";
      document.getElementById("imagen_aprobado").style.display = "none";
      document.getElementById("imagen_denegado").style.display = "block";
      document.getElementById("informacion_confirmacion").style.display = "none";
    }
  }

  let boton_regreso = document.getElementById("boton_regreso");
  boton_regreso.onclick = function () {
    document.querySelector(".verificacion").style.display = "none";
    document.querySelector(".header").style.display = "block";
  }
}
