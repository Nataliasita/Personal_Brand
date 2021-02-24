const validator = {
  // ...
  isValid,
  maskify,
};
export default validator;

function isValid(numerosIsValid) {
  let reversa = numerosIsValid.reverse().map(function (item) { return parseInt(item, 10); });
  //let x =typeof(nuevo[3]);
  console.log(reversa);

  for (let i = 1; i < reversa.length; i = i + 2) {
    reversa[i] = reversa[i] * 2;
  }
  console.log(reversa);

  let string_array = reversa.toString().split(",");
  console.log(string_array);

  for (let i = 0; i < string_array.length; i++) {
    if (string_array[i] > 9) {
      let numeros_dobles = string_array[i].split("").map(function (item) { return parseInt(item, 10); });
      console.log(numeros_dobles);
      string_array[i] = numeros_dobles[0] + numeros_dobles[1];
    }
  }
  let number_array = string_array.map(function (item) { return parseInt(item, 10); });
  console.log(number_array);

  let suma_final = 0;
  for (let i = 0; i < number_array.length; i++) {
    suma_final = suma_final + number_array[i];
  }
  console.log(suma_final);
  suma_final = suma_final % 10;
  console.log(suma_final);
  let resultado;
  if (suma_final === 0) { return true; }
  else { return false; }
  console.log(resultado);
}

function maskify(numerosMaskify) {
  console.log(numerosMaskify);
  //let borrar = numerosMaskify.slice(-4).join("");
  //console.log(borrar);
  let mascara = numerosMaskify;
  for (let i = 0; i < (mascara.length - 4); i++) {
    mascara[i] = "#";
  }
  console.log(mascara.join(""));
}

/*
// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it.skip('Debería retornar "############5616" para "4556364607935616"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "1" para "1"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    });
  });
});
*/
