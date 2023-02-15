/**
 * Array.indexOf(): Este método devuelve la posición del primer elemento que 
 * coincide con el valor especificado en el array, 0 si se encuetra y -1 si no se encuentra.
 */
let lenguajes         = ["PHP", "JavaScript", "NodeJS","Python"];
let resultadoLenguaje = lenguajes.indexOf("JavaScript");
console.log(resultadoLenguaje); 

let contenedorRespuesta = document.querySelector('.contenedorRespuesta');
contenedorRespuesta.innerHTML = resultadoLenguaje;

/**
 * Array.includes(): Este método devuelve true si el array incluye el elemento
 * especificado, y false en caso contrario.
 */
let frutas = ["Manzana", "Banana", "Pera","Fresa"];
let resultadoFrutas = frutas.includes("Pera");
//console.log(resultadoFrutas); 


/**
 * Array.findIndex(): Este método devuelve la posición del primer elemento
 * que cumple con la función de prueba proporcionada.
 */
let numeros = [5, 10, 15, 20, 32];
let resultadoNumero = numeros.findIndex(num => num > 10);
//console.log(resultadoNumero); 


let fruits = ["apple", "banana", "cherry"];
let miResult = fruits.findIndex((fruit)=> {
  return fruit === "cherry";
});
//console.log(miResult);

let miUsers = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
  ];
  let resultadoUser = miUsers.findIndex(function(user) {
    return user.name === "Jane";
  });
  //console.log(resultadoUser); 
  


/**
 * Array.find(): Este método devuelve el primer elemento que
 * cumple con la función de prueba proporcionada.
 */
let nombrePersonas = ["John","Jane","Jim","Emily","Michael","Sarah","David","Jessica","Robert","Emily"];

let resultado = nombrePersonas.find((persona) =>{
    return persona === "Jim";
}); 
//console.log(resultado);

/**
 * Array de objetos, encontrar un objeto en un array de objetos:
 */

let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
  ];
  
  let result = users.find((user)=> {
    return user.name === "Jane";
  });
  //console.log(result); 