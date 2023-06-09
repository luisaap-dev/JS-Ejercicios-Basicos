function palabrasMaisLongas(palabra) {
  /*
   * Devuelve un array con las palabras más largas de un texto dado.
   * Toma una cadena de texto como parámetro.
   * Si la cadena está vacía, devuelve un array vacío.
   */

  if (palabra === "") {
    return [];
  }

  var dividir_palabras = palabra.split(' ');
  var longitud_palabra = 0;
  var resultado = [];
  var palabra;

  for (var i = 0; i < dividir_palabras.length; i++) {
    palabra = dividir_palabras[i];
    if (palabra.length > longitud_palabra) {
      longitud_palabra = palabra.length;
      resultado = [palabra]; // Si la longitud de la palabra es mayor, reemplaza el resultado con una nueva matriz que contiene solo esa palabra.
    } else if (palabra.length === longitud_palabra) {
      resultado.push(palabra); // Si la longitud de la palabra es igual, agrega la palabra al resultado existente.
    }
  }

  return resultado;
}

module.exports = {
  palabrasMaisLongas
};
