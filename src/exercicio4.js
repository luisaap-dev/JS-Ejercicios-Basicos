function palindromo(n) {
    /*
     * Determina si una palabra o frase dada es un palíndromo
     * (se lee igual de izquierda a derecha que de derecha a izquierda),
     * ignorando espacios y caracteres no alfabéticos.
     */
  
    // Convertimos la frase inicial a minúsculas y eliminamos espacios y caracteres no alfabéticos.
    var fraseInicial = n.toLowerCase().replace(/[^a-z]/g, '');
  
    // Invertimos la frase inicial.
    var fraseInvertida = fraseInicial.split('').reverse().join('');
  
    // Comprobamos si ambas frases son iguales.
    return fraseInicial === fraseInvertida;
  }
  
  module.exports = {
    palindromo
  };
  