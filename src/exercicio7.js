function ordenar(matriz) {
    /*
     * Devuelve una nueva matriz con los mismos elementos que la matriz dada,
     * pero ordenada de forma ascendente.
     */
  
    // Ordenación mediante el método de la burbuja
    for (var i = 0; i < matriz.length; i++) {
      for (var j = 0; j < matriz.length - 1; j++) {
        if (matriz[j] > matriz[j + 1]) {
          var aux = matriz[j];
          matriz[j] = matriz[j + 1];
          matriz[j + 1] = aux;
        }
      }
    }
  
    return matriz;
  }
  
  module.exports = {
    ordenar
  };
  