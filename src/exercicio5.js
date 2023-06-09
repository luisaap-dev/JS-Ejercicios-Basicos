function factorial(n) {
    /*
     * Calcula el factorial de un número dado.
     * El factorial de un número entero positivo n se define como el producto de todos los enteros positivos desde 1 hasta n.
     */
  
    var producto = 1;
  
    if (n < 0) {
      return false; // El factorial no está definido para números negativos.
    } else {
      for (let i = n; i > 0; i--) {
        producto *= i;
      }
      return producto;
    }
  }
  
  module.exports = {
    factorial
  };
  