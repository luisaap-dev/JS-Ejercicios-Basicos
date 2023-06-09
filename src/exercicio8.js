function contarPalabras(palabra) {
    /*
     * Devuelve el número de palabras en una cadena dada.
     * Toma una cadena como parámetro.
     */
  
    if (palabra.length > 0) {
      // Corta el string entrante en cada espacio y devuelve la longitud del array resultante.
      return palabra.trim().split(/\s+/).length;
    } else {
      return false;
    }
  }
  
  module.exports = {
    contarPalabras
  };
  