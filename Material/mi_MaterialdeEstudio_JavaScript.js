//   OPERADORES DE ASIGNACION:
/*   | asignar = | asignar suma += | asignar sustraccion  -= | asignar multiplicacion *= | asignar division /= 
| asignación restante %= | asignar exponente **= |   */
let numero1 = 8; 
let numero2 = 3;

//   OPERADORES ARITMETICOS:
/*   | suma + | resta - | multiplicacion * | division / | incrementar 1 ++ | decrementar 1 -- 
| resto % | negativar (-x) | positivar (+x) |   */
let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadomultiplicacion = numero1 * numero2;
let resultadodivision = numero1 / numero2;
let resultadomodulo = numero1 % numero2;
let resultadoexponente = numero1 ** numero2;
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Resultado suma:",resultadosuma);
console.log("Resultado resta:",resultadoresta);
console.log("Resultado multiplicacion:",resultadomultiplicacion);
console.log("Resultado división:",resultadodivision);
console.log("Resultado módulo:",resultadomodulo);
console.log("Resultado exponente:",resultadoexponente);

//   OPERADORES DE COMPARACIÓN:  TRUE - FALSE:
/*    | igual == | no es igual != | profundamente iguales === | estricto sin igual !== 
| mayor que > | mayor o igual que >= | menor que < | menor o igual que <= |   */

//   OPERADORES LÓGICOS: | and - or - not |
/*  Los operadores lógicos se utilizan cuando se necesita comparar más de una condicional.
El operador && (AND) necesita que todos sus valores sean true para que la salida sea true.
El operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true.
El operador NOT necesita que ninguno de los anteriores se ejecute para dar resultado.  */
const fruit = ['apple', 'banana', 'grape']
//   AND
if (fruit.includes('apple') && fruit.includes('banana')) {
    console.log('both fruits exist');
}
//   OR
if (fruit.includes ('coconut') || fruit.includes('apple')) {
    console.log('atleast one fruit exists');
}
//   NOT
if (fruit.includes('cherry')) {
    console.log('cherry is missing');
}

//   OPERADORES CONDICIONALES:
/* true - false */
let isGameOver = true
if (isGameOver == true) {
    console.log('Sorry you lost')
}   else {
    console.log('Carry on playing')
}
/* escritura alternativa */
isGameOver ? console.log('Sorry you lost') : console.log('Carry on playing')

//   CADENAS DE TEXTO:
/*   escapar commilas (/"/")  */
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
myStr:
I am a "double quoted" string inside "double quotes".

//   ESCAPA SECUENCIAS EN CADENAS:
        /*   Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. 
\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\r	retorno de carro
\t	tabulación
\b	límite de palabra
\f	fuente de formulario   */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
myStr:
FirstLine
    \SecondLine
ThirdLine

//   CONCATENAR CADENAS CON OPERADOR "mas igual":
const myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//   CONSTRUYE CADENAS CON VARIABLES:
let saludo = "Bienvenidos";
let saludo2 = " a mi primer Javascript."
console.log(saludo + saludo2);

let name = "Daniel Pulido";
console.log(`Mi nombre es ${name}.`);

let texto1 = "Estoy aprendiendo";
let texto2 = "a escribir y mostrar texto en JavaScript" + ".";
console.log(texto1 + " " + texto2);

//   ENCUENTRA LA LONGITUD DE UNA CADENA:
/*   Puedes encontrar la longitud de un valor de cadena String escribiendo '.length'
después de la variable de cadena o literal de cadena.   */
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//   UTILIZA LA NOTACIÓN DE CORCHETES PARA ENCONTRAR EL PRIMER CARÁCTER EN UNA CADENA:
const firstName = "Charles";
const firstLetter = firstName[0];

//   UTILIZA LA NOTACIÓN DE CORCHETES PARA ENCONTRAR EL ÚLTIMO CARÁCTER EN UNA CADENA:
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

//   PALABRA EN BLANCO:
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

//   ALMACENA MÚLTIPLES VALORES EN UNA VARIABLE UTILIZANDO LOS ARRAY(arreglos) DE JavaScript:
let arreglo = {
    nombre: "Daniel Reynaldo Pulido Estrada.",
    edad: 28 + "años.",
    email: "dylpulido@gmail.com",
    numTel: 6675065709,
    estudio: "Mercadotecnia" + " " + "y" + " " + "Desarrollo Web" + ".",
    proyectos: ["HTML", "CSS", "JavaScript", "Python", "Node.js"]
}
console.log(arreglo.estudio);

//   ANIDA UN ARRAY DENTRO DE OTRO ARRAY:
const myArray = [
    ["Bulls", 23], ["White Sox", 45],
];

//   ACCEDE A LOS DATOS DE UN ARRAY CON ÍNDICES:
/*   Así como las cadenas de texto, los arreglos usan indexación empezando desde cero, 
en donde el primer elemento de un arreglo tiene como índice 0.   */
const array = [50, 60, 70];
array[0];
const data = array[1];

array[0] ahora es 50 y data tiene el valor 60.

//   MODIFICA LOS DATOS DE UN ARRAY CON ÍNDICES:
const ourArray = [50, 40, 30];
ourArray[0] = 15;

ourArray ahora tiene el valor [15, 40, 30].

//   ACCEDE A ARREGLOS MULTIDIMENSIONALES CON ÍNDICES:
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];

arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.

//   MANIPULA ARREGLOS CON PUSH:
/*   Una forma fácil de añadir datos al final de un arreglo es a través de la función push().   */
const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

//   MANIPULA ARREGLOS CON PULL:
/*   .pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable
Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.   */
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

El primer console.log mostrará el valor 6 y el segundo mostrará el valor [1, 4].

//   MANIPULA ARREGLOS CON SHIFT:
/* .shift() Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último. */
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

removedFromOurArray tendrá una cadena con valor Stimpson y ourArray tendrá ["J", ["cat"]].

//   MANIPULA ARREGLOS CON UNSHIFT:
/*   .unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo,
unshift() añade el elemento al principio del arreglo.   */
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

Después del shift, ourArray tendrá el valor ["J", "cat"]. Después del unshift, ourArray tendrá el valor ["Happy", "J", "cat"].

//   LISTA DE COMPRAS:
/*   Crea una lista de compras en la variable myList. 
La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos.
El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. 
El segundo elemento debe ser un número que represente la cantidad, por ejemplo.
Debe haber al menos 5 sub-arreglos en la lista.   */
const myList = [
    ["Chocolate Bar", 50],
    ["Ice Cream", 120],
    ["Cereal", 135],
    ["Milk", 250],
    ["Fruits", 150],
];

//   ESCRIBE JAVASCRIPT REUTILIZABLE UTILIZANDO FUNCIONES:
/*   En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones.
Puedes llamar o invocar esta función usando su nombre seguido por paréntesis, así: functionName();
Cada vez que se llame la función se imprimirá el mensaje Hello World en la consola de desarrollo.
Todo el código entre las llaves se ejecutará cada vez que se llame la función.   */
function functionName() {
    console.log("Hello World");
}
functionName();

//   PASA VALORES A LAS FINCIONES UTILIZANDO ARGUMENTOS:
/*   Cuando se define una función, se define típicamente junto con uno o más parámetros. 
Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos.   */
function functionWithArgs(param1, param2) {
    var suma = param1 + param2;
    console.log("El resultado de " + param1 + " + " + param2 + " es igual a " + suma + ".");
  }
functionWithArgs(1, 2);
functionWithArgs(7, 9);
functionWithArgs(10, 10);

//   DEVUELVE UN VALOR DE UNA FUNCIÓN UTILIZANDO "RETURN":
/*   Podemos pasar valores a una función con argumentos.
Puedes utilizar una declaración de devolución (return) para enviar un valor fuera de una función.   */
function timesFive(param1) {
    return param1 * 5;
  }
const answer = timesFive(5);

//   ÁMBITO GLOBAL Y FUNCIONES:
/*   Las variables definidas fuera de un bloque de función tienen un ámbito Global.
Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.
Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global.
Siempre debes declarar tus variables con let o const.   */
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output); //   ambas condiciones if de fun2 se cumplen, por lo que se ejecuta la += de los string y las variables
}

//   ÁMBITO LOCAL Y FUNCIONES:
/*   Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. 
Esto significa que sólo son visibles dentro de esa función.   */
function myLocalScope() {
    var myVar = "0";
      console.log('inside myLocalScope', myVar);
    }
    
myLocalScope();

//   ÁMBITO GLOBAL vs ÁMBITO LOCAL EN FUNCIONES:
/*   Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, 
la variable local tiene precedencia sobre la variable global.   */
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();  /* cuando se usa return en una función, solo se altera la variable local */

//   COMPRENDIENDO EL VALOR INDEFINIDO DEVUELTO POR UNA FUNCIÓN:
/*   Una función puede incluir la declaración de devolución (return) pero no tiene por qué hacerlo.
En el caso de que la función no tenga una declaración de devolución (return),
cuando la llames, la función procesa el código interno.   */
let sum = 0;

function addThree() {
  sum = sum + 3; //   0 + 3
}
function addFive() {
  sum = sum +  5; //   3 + 5
}

addThree();
addFive();
console.log(sum);   /*   sum = 8, porque cada función ejecutada altera a la variable global sum   */

//   ASIGNACIÓN CON UN VALOR DEVUELTO:
/*   Todo a la derecha del signo de igualdad se resuelve antes de asignar el valor.
Esto significa que podemos tomar el valor devuelto de una función y asignarlo a una variable.   */
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;   //   return toma el valor de la función y lo usa para el cálculo posterior (7 + 3) / 5
}

processed = processArg(7);   /*   está línea modifíca a la variable global dandole el valor del parámetro de la función processArg   */

//   PERMANECE EN LÍNEA:
/*   Los nuevos elementos se pueden añadir en la parte posterior de la cola 
y los elementos antiguos se retiran de la parte delantera de la cola.   */
function nextInLine(arr, item) {
  arr.push(item);   // introduce 6 al final de testArr
  return arr.shift();   // retiramos el elemento más viejo del array testArr y se retorna el valor retirado
}
const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));   // imprime testArr antes de llamar la función
console.log(nextInLine(testArr, 6));   // la variable testArr y 6 = argumentos de la función nextInLine
console.log("After: " + JSON.stringify(testArr));   // imprime testArr después de llamar la función 

//   COMPRENDE LOS VALORES BOOLEANOS:
/*   Otro tipo de datos es el Booleano. Los booleanos solo pueden ser uno de dos valores: true (verdadero) o false (falso). 
Básicamente son pequeños interruptores de encendido, donde true es encendido y false es apagado. Estos dos estados se excluyen mutuamente.   */
function welcomeToBooleans() {
  return true;
}
console.log(welcomeToBooleans());

//   USA LÓGICA CONDICIONAL CON LAS SENTENCIAS "IF":
/*   Las sentencias if son utilizadas para tomar desiciones en el código. La palabra clave if le dice a JavaScript
que ejecute el códig entre llaves bajo ciertas condiciones, definidas en el paréntesis.
Estas condiciones son conocias como sondiciones booleanas y solo pueden ser true o false.   */
/* Cuando la condicion se evalúa como true el programa ejecuta el comando dentro de las llaves. 
Cuando la condicion booleana se evalúa como false, la sentencia dentro de las llaves no se ejecutará. */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) { //   ¿es True?
  return "Yes, that was true"; // cuando if se cumpla retorna "Yes, that was true"
}
return "No, that was false"; // cuando if no se cumpla retorna "No, that was false"
}

console.log(trueOrFalse(true)); // se asigna True a la función, por lo que se imprime el return de True

//   COMPARACIÓN CON EL OPERADOR IGUALDAD:
/*   Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un valor booleano true o false.
El operador más básico es el de igualdad ==. El operador de igualdad compara dos valores 
y devuelve true si son equivalentes o false si no lo son.   */
function testEqual(val) {
  if (val == 12) { //   ¿val es igual a 12 ?
    return "Equal"; //   entonces retorna "Equal"
  }
  return "Not Equal"; //   cuando if no se cumpla retorna "Not equal"
}
testEqual(10);

//   COMPARACIÓN CON EL OPERADOR DE ESTRICTA IGUALDAD :
/*   La estricta igualdad (===) es la contraparte del operador de igualdad (==)
Sin embargo, a diferencia del operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común,
el operador de estricta igualdad no realiza una conversión de tipo.   */
function testStrict(val) {
  if (val === 7) { //   ¿val es estrictamente igual a 7?
    return "Equal"; //   entonces retorna "Equal"
  }
  return "Not Equal"; //   cuando if no se cumpla retorna "Not Equal"
}

testStrict(10); 

//   PRACTICA COMPARANDO DIFERENTES VALORES:
/*   El operador de estricta igualdad comparará tanto el tipo de datos como el valor tal como es, sin convertir un tipo a otro.
Ejemplo :
      3 == '3' devuelve true porque JavaScript realiza la conversión de tipo de cadena a número. 
      3 === '3' devuelve false porque los tipos son diferentes y la conversión de tipo no se realiza.   */
function compareEquality(a, b) {
  if (a === b) { //   ¿a es estrictamente igual a b?
    return "Equal"; // entonces retorna "Equal"
  }
  return "Not Equal"; //  cuando if no se cumpla retorna "Not Equal"
}

compareEquality(10, "10");

//   COMPARACIÓN CON EL OPERADOR DE DESIGUALDAD:
/*   El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Hace la pregunta sobre si no es igual.
Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara.   */
function testNotEqual(val) {
  if (val != 99) { //   ¿10 es desigual a 99?
    return "Not Equal"; //   entonces retorna "Not Equal"
  }
  return "Equal"; //   cuando if no se cumpla retorna "Equal"
}

console.log(testNotEqual(10));

//   COMPARACIÓN CON EL OPERADOR DE ESTRICTA DESIGUALDAD:
/*   El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual",
 y devuelve false cuando la comparación de estricta igualdad devolvería true   */
 function testStrictNotEqual(val) {
  if (val !== 17) { //   ¿10 es estrictamente desigual a 17?
    return "Not Equal"; //   entonces retorna "Not Equal"
  }
  return "Equal"; //   cuando if no se cumpla retorna "Equal"
}

console.log(testStrictNotEqual(10));

//   COMPARACIÓN CON EL OPERADOR "MAYOR QUE":
/*   El operador mayor que (>) compara los valores de dos números. 
Si el número a la izquierda es mayor que el número a la derecha, devuelve true. De lo contrario, devuelve false.   */
function testGreaterThan(val) {
  if (val > 100) { //   ¿10 es mayor que 100?
    return "Over 100"; //   cuando if se cumpla retorna "Over 100"
  }

  if (val > 10) { //   ¿10 es mayor que 10?
    return "Over 10"; // cuando if se cumpla retorna "Over 10"
  }

  return "10 or Under"; //   cuando nungun if se cumpla retorna "10 or Under"
}

console.log(testGreaterThan(10)); //   val no sobrepasa lsa condicionantes por eso imprime "10 or Under"

//   COMPARACIÓN CON EL OPERADOR "MAYOR O IGUAL QUE":
/*   El operador mayor o igual que (>=) compara el valor de dos números. 
Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. 
De lo contrario, devuelve false.   */
function testGreaterOrEqual(val) {
  if (val >= 20) { //   ¿10 es mayor o igual a 20?
    return "20 or Over"; //   entonces retorna "20 or Over"
  }

  if (val >= 10) { //   ¿10 es mayor o igual a 10?
    return "10 or Over"; //   entonces retorna "10 or Over"
  }

  return "Less than 10"; //   cuando ningun if se cumpla retorna "Less than 10"
}

console.log(testGreaterOrEqual(10));

//   COMPARACIÓN CON EL OPERADOR "MENOR QUE":
/*   El operador menor que (<) compara los valores de dos números. 
Si el número a la izquierda es menor que el número a la derecha, devuelve true. De lo contrario, devuelve false   */
function testLessThan(val) {
  if (val < 25) { //   ¿10 es menor que 25?
    return "Under 25"; //  entonces retorna "Under 25"
  }

  if (val < 55) { //   ¿10 es menor que 55?
    return "Under 55"; //   entonces retorna "Under 55"
  }

  return "55 or Over"; //   cuando ningun if se cumpla retorna "55 or Over"
}

console.log(testLessThan(10));

//   COMPARACIÓN CON EL OPERADOR "MENOR O IGUAL QUE":
/*   El operador menor o igual que (<=) compara el valor de dos números. 
Si el número de la izquierda es menor o igual que el número de la derecha, devuelve true. 
Si el número a la izquierda es mayor que el número a la derecha, devuelve false   */
function testLessOrEqual(val) {
  if (val <= 12) { //   ¿val es menor o igual a 12?
    return "Smaller Than or Equal to 12"; //   entonces retorna "Smaller Than or Equal to 12"
  }

  if (val <= 24) { //   ¿val es menor o igual a 24?
    return "Smaller Than or Equal to 24"; //  entonces retorna "Smaller Than or Equal to 24"
  }

  return "More Than 24"; //   cuando ningun if se cumpla retorna "More Than 24"
}

console.log(testLessOrEqual(10));

//   COMPARACIÓN CON EL OPERADOR LÓGICO "and &&"
/*   A veces tendrás que probar más de una cosa a la vez. 
El operador lógico and (&&) devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.   */
