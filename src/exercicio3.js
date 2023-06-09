function primo(n) {
  // Determina si un número dado es primo o no.

  // Comprobamos si el número es menor que 2, ya que el primer número primo es 2.
  if (n < 2) {
    return false;
  } else {
    // Recorremos desde la iteración=2 hasta la raíz cuadrada del número (como máximo).
    for (var i = 2; i <= Math.sqrt(n); i++) {
      // Comprobamos que el resto del número al dividirlo por i sea igual a 0.
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  primo
};
