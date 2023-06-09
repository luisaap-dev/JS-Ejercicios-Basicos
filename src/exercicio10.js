function cadeaInversa(palabra) {
    /*
     * Devuelve una nueva cadena con los caracteres en orden inverso.
     * Toma una cadena como parámetro.
     */
    return palabra.split('').reverse().join('');
  }
  
  module.exports = {
    cadeaInversa
  };
  