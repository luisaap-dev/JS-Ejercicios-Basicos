function primosEnRango(inicio, fin) {
    /*
     * Devuelve todos los números primos en un rango dado.
     * Toma dos números como parámetros: inicio y fin.
     */
  
    var primos = [];
  
    // Iteramos por cada número en el rango
    for (var n = inicio; n <= fin; n++) {
  
      var esPrimo = true;
  
      // Comprobamos si el número es primo
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          esPrimo = false;
          break;
        }
      }
  
      // Si el número es primo, lo añadimos al array
      if (esPrimo && n > 1) {
        primos.push(n);
      }
    }
  
    return primos;
  }
  
  module.exports = {
    primosEnRango
  };
  