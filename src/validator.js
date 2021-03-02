const validator = {
  // ...
  isValid: function isValid(numerosIsValid) {
    let reversa = numerosIsValid.reverse().map(function (item) {
      return parseInt(item, 10);
    });
    //let x =typeof(nuevo[3]);
    //console.log(reversa);

    for (let i = 1; i < reversa.length; i = i + 2) {
      reversa[i] = reversa[i] * 2;
    }
    //console.log(reversa);

    let string_array = reversa.toString().split(",");
    //console.log(string_array);

    for (let i = 0; i < string_array.length; i++) {
      if (string_array[i] > 9) {
        let numeros_dobles = string_array[i].split("").map(function (item) {
          return parseInt(item, 10);
        });
        // console.log(numeros_dobles);
        string_array[i] = numeros_dobles[0] + numeros_dobles[1];
      }
    }
    let number_array = string_array.map(function (item) {
      return parseInt(item, 10);
    });
    //console.log(number_array);

    let suma_final = 0;
    for (let i = 0; i < number_array.length; i++) {
      suma_final = suma_final + number_array[i];
    }
    //console.log(suma_final);
    suma_final = suma_final % 10;
    //console.log(suma_final);
    // suma_final=0 ? (return true) : (return false) 
    if (suma_final === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function maskify(numerosMaskify) {
    //console.log(numerosMaskify);
    //let borrar = numerosMaskify.slice(-4).join("");
    //console.log(borrar);
    let mascara = numerosMaskify;
    for (let i = 0; i < (mascara.length - 4); i++) {
      mascara[i] = "*";
    }
    let enviar_mascara = mascara.join("");
    //console.log(enviar_mascara);
    return enviar_mascara;
  },
};
export default validator;
