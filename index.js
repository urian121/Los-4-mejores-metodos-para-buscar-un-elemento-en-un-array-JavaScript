/**
 * Array.indexOf(): Este método devuelve la posición del primer elemento que
 * coincide con el valor especificado en el array, 0 si se encuetra y -1 si no se encuentra.
 */
let lenguajes = ["PHP", "JavaScript", "NodeJS", "Python"];
let resultadoLenguaje = lenguajes.indexOf("Python");
//console.log("Método indexOf() ", resultadoLenguaje);

/**
 * Array.includes(): Este método devuelve true si el array incluye el elemento
 * especificado, y false en caso contrario.
 */
let frutas = ["Manzana", "Banana", "Pera", "Fresa"];
let resultadoFrutas = frutas.includes("Banana");
//console.log("Método includes() ", resultadoFrutas);

/**
 * Array.findIndex(): Este método devuelve la posición del primer elemento
 * que cumple con la condicion, si no existe devuelve -1.
 */
let fruits = ["apple", "banana", "cherry"];
let miResult = fruits.findIndex((fruit) => {
  // console.log(fruit);
  return fruit === "apple";
});
//console.log("Método findIndex()", miResult);

let miUsers = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
];
let resultadoUser = miUsers.findIndex(function (user) {
  //console.log(user);
  return user.name === "John";
});
//PerfLogsconsole.log(resultadoUser);

/**
 * Array.find(): Este método devuelve el primer elemento que
 * cumple con la función de prueba proporcionada.
 */
let nombrePersonas = [
  "John",
  "Jane",
  "Jim",
  "Emily",
  "Urian",
  "Michael",
  "Sarah",
  "David",
  "Jessica",
  "Robert",
  "Emily",
];

let resultado = nombrePersonas.find((persona) => {
  //console.log(persona);
  return persona === "Urian";
});
//console.log("Método find()", resultado);

/**
 * Array de objetos, como encontrar un objeto en un array de objetos:
 * Si existe devuelve el objeto de lo contrario undefined
 */

let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
];

let result = users.find((user) => {
  //console.log(user);
  return user.name === "Jim";
});
//console.log(result);
