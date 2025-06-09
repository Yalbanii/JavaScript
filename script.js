/* 
Este es un comentario multilinea
*/
//* Comentario mini y que se ilumine//
//*Strings */
let nombre = "Yalbani"; //? Declaracion de una variable de tipo cadena de texto/
console.log(nombre);
/* En JS se usa para imprimir mensajes en la consola del navegador */
//*Booleanos */
/* Declaracion de variables de tipo booleanos*/
let esMayorDeEdad = true; 
let esMenorDeEdad = false;
//* Mostramos en consola las variables declaradas */
console.log (esMayorDeEdad); //? Salida TRUE */
console.log (esMenorDeEdad); //? Salida FALSE */
//*Arrays */
/* Declaracion de array y uso de numeros*/
let frutas  = ["Guayaba", "Mango", "Manzana", "Uvas"]; //? Un array es una estructura de datos que permite almacenar una coleccion ordenada de elementos. Se almacenan en una variable */
//* Mostramos en consola el arreglo de frutas */
console.log(frutas);
/* Acceder a los elementos del array de acuerdo a su posicionamiento*/
console.log(frutas [0]); //? Salida Guayaba */
console.log(frutas [3]); //? Salida Uvas */
//*Numeros */
/* Declaracion una variable de tipo numero*/
const decimal = 9.5;
//* Mostramos en consola */
console.log(decimal);
//*Objetos */
let  gato = { 
    nombre: "Artemis",
    edad: 3,
    raza: "mestizo",
    panzon: true,
};     /* Es usado para guardar una coleccion de datos definidos y entidades mas complejas*/
//* Mostramos en consola el objeto gato*/
console.log(gato); //? Mostramos todo el contenido y su contenido */
console.log(gato.nombre); //? Salida Artemis */
console.log(gato.panzon);//? Salida TRUE */
//*Indefinido (undefined) y Nulo (null)*/
/* Declaracion una variable de indefinido*/
let indefinido;
let valorNulo = null; /* Asignamos el valor null.
Mostramos en consola variable indefinida y nula */
console.log(indefinido);
console.log(valorNulo);
//* Convenciones de variables: usa nombres descriptivos, notacion camelcase, evita palabras reservadas y manten un estilo consistente. */
//! Encasillamiento. Es el proceso de convertir un tipo de datoa otro, importante para manipular datos de maneras diferentes segun lo necesites.*/
//* Convertir un tipo de dato a otro */
/* Tipo numerico: Convertimos una variable de tipo numero, a una tipo string*/
let cadena = "123";
let numero = Number(cadena);
console.log(numero);
console.log(typeof numero);
//* Explciacion: La funcion Number (le indicamos cadena) convierte el valor de la variable cadena a un numero. Si la cadena no puede ser convertida a numero, devolvera un NaN (NotANumber). */
/* Tipo cadena: Para convertir una variable de tipo numero a cadena usamos la funcion String*/
let numero2 = 123;
let cadena2 = String (numero2);
console.log(cadena2);
console.log(typeof cadena2); /* Dime que se hizo*/
//* Tipo Booleano : para convertir una variable de tipo booleando, usamos la funcion boolean*/ /* Casi todos los booleanos se meten true a menos que lo cambiemos*/
let num = 8; //! Si no hay nada o hay null o algo que no sea numero, marca false.*/
let Booleano = Boolean(num);
console.log(!!num);
console.log(Booleano);
console.log(typeof  Booleano);
console.log(typeof booleano);
/*Explicación: La función Boolean(numero) convierte el valor de la variable numero a un booleano. Cualquier valor distinto de 0, null, undefined, NaN, o una cadena vacía se convierte en true.*/
//* Convertir a Numero : Number(variable) o +variable. */
//* Convertir a cadena : String(variable) o variable.toString() */
//* Convertir a booleano : Boolean(variable) o !!variable. */
/*Se convierten los datos con datos que no hay que meterle mano porque son sensibles.*/