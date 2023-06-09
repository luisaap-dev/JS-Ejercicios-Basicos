function suma(numeros) {
    // Devuelve la suma de todos los elementos en una matriz de números.
    var suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  module.exports = {
    suma
  };
  