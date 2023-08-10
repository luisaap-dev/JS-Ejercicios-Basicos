# Ejercicios básicos de programación en Javascript

1. Número mayor: Escribe una función que tome dos números como parámetros y devuelva el número mayor de los dos.
2. Suma de elementos: Escribe una función que tome una matriz de números como parámetro y devuelva la suma de todos los elementos.
3. Número primo: Escribe una función que determine si un número dado es primo o no.
4. Palíndromo: Escribe una función que determine si una palabra o frase dada es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), ignorando los espacios y los caracteres no alfabéticos.
5. Factorial: Escribe una función que calcule el factorial de un número dado. El factorial de un número entero positivo "n" se define como el producto de todos los enteros positivos de 1 a "n".
6. Números primos de un rango: Escribe una función que tome dos números como parámetros y devuelva todos los números primos de ese rango.
7. Ordenar matriz: Escribe una función que tome una matriz de números como parámetro y devuelva una nueva matriz con los mismos elementos, pero ordenados de forma ascendente.
8. Recuento de palabras: Escribe una función que tome una cadena como parámetro y devuelva el número de palabras de esa cadena.
9. Palabras más largas: Escribe una función que tome una cadena de texto como parámetro y devuelva una matriz con las palabras más largas de esa cadena.
10. Cadena inversa: Escribe una función que tome una cadena como parámetro y devuelva una nueva cadena con los caracteres en orden inverso.

## Preparativos

Para ejecutar las pruebas de las funciones, es necesario instalar el paquete `mocha`. Desde una terminal, escriba el siguiente comando:

```sh
npm install
```

## Organización de las carpetas

En este proyecto hay dos carpetas: `src` y `test`. En la primera, guardará los diferentes archivos con el código fuente de sus funciones; en la segunda se encuentran las pruebas.

Cree nuevos archivos con los nombres `ejercicio1.js`, `ejercicio2.js`, `ejercicio3.js`, ... dentro de la carpeta `src` y agregue nuevas pruebas en la carpeta `test` (con los nombres correspondientes: `ejercicio1.test.js`, `ejercicio2.test.js`, `ejercicio3.test.js`, ...).

## Ejecución de las pruebas

Para ejecutar todas las pruebas, escriba el siguiente comando en la terminal:

```sh
npx mocha
```

Si dispone de una versión reciente de Visual Studio Code, puede resultarle útil la extensión [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter).
