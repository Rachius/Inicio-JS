







// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras estén concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu código:
//   console.log(palabras[0]+" "+ palabras[1])
// }

// let palabras = ["Hola","Mundo"]
// dePalabrasAFrase(palabras)



// function agregarItemAlComienzoDelArray(array, elemento) {
//   // Añade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el método `.unshift`
//   // Tu código:  
//   let nuevaLongitud = array.unshift('Fresa')
//   console.log(array)
// }
// let array = [10,20,30,40,50]
// agregarItemAlComienzoDelArray(array)





// function agregarItemAlFinalDelArray(array, elemento) {
//   // Añade el "elemento" al final del array
//   // y devuelve el array
//   // Tu código:
//   let nuevaLongitud = array.push('Naranja')
//   console.log(array)
// }
// let array = [10,20,30,40,50]
// agregarItemAlFinalDelArray(array)




// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:
  
// }
// let array = [10,20,30,40,50]
// console.log(array.length)
// for(i=0; i<array.length; i++){
  
//   let nuevonumero = array[i] + 1
//   console.log(nuevonumero)
  
// }

// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu código:
  
// }
// let array = [10,20,30,40,50]
// console.log(array.length)
// for(i=0; i<array.length; i++){
  
//   array = array[i] + 1
  
// }
// let pos = array.indexOf(20)
// console.log(array)







// function devolverUltimoElemento(array) {
//   // Devuelve el último elemento de un array
//   // Tu código:
//   let ultimo = array[array.length - 1]
//   return ultimo
// }





// function devolverPrimerElemento(array) {
//   //   // Devuelve el primer elemento de un array
//   //   // Tu código:
//   //   let primero = array[0]
//   //   return primero
//   //   }


// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
//   do {
//       i = i + 1;
//       numero = numero + 5;
//       } 
//   while (i < 8);
//   return numero
// }
// let i = 0
// doWhile(0)




// function tieneTresDigitos(numero) {
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí
//   if (numero > 99){ return true}
//   return false
// }
// tieneTresDigitos(24)





// function esVerdadero(valor) {
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí
//   if(valor ===true){ return "Soy Verdadero" }
//   return "Soy Falso"
// }
// esVerdadero(false)




// function suma(n1,n2){
//   return n1+n2;
// }
// function operacionMatematica(n1, n2, cb) {
//   //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
//   //Devolver el callback pasándole como argumentos los números recibidos.
//   //Tu código:
//   return cb(n1,n2);
// }
// operacionMatematica(4, 5, suma)






// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos.
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

//   if (num1 && num2 && num3 === 0) {return 'Error'}
//   else if (num1<0 ||num2<0 || num3<0){return "Hay negativos"}
//   else if (num1>num2 && num1>num3 && num1>0) {return "Numero 1 es mayor y positivo"}
//   else if (num3>num1 && num3>num2){
//     num3=num3+1 
//     return num3
//   }
//   else {return false}
// operadoresLogicos(19, 17, 37)


// function (){
  
  
// }



// function operacionMatematica(n1, n2, cb) {
//   //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
//   //Devolver el callback pasándole como argumentos los números recibidos.
//   //Tu código:
// }



// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
//   //En caso que el color recibido sea "red", devuleve --> "This is red"
//   //En caso que el color recibido sea "green", devuleve --> "This is green"
//   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
//   switch (color) {
//   case 'blue':
//     console.log('This is blue');
//     break;
//   case 'red':
//     console.log('This is red');
//     break;
//   case 'green':
//     console.log('This is green');
//     break;
//   case 'orange':
//     console.log('This is orange');
//   default:
//     console.log('Color not found');
// }

// console.log("¿Hay algo más que te quisiera consultar?");
// }
// // colors(color)




// function numeroRandom() {
//   //Generar un número al azar entre 0 y 1 y devolverlo
//   //Pista: investigá qué hace el método Math.random()

//   return Math.random() * 1;
// }
// numeroRandom()



// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
//   // Tu código:
//   return Math.ceil(num)
// }
// redondearHaciaArriba(num) 

// function redondearNumero(num) {
//   // Redondea "num" al entero más próximo y devuélvelo
//   // Tu código:
//     return Math.round(num)
// }

// redondearNumero(num)

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu código:
//     return num ** 5
// }

// elevarAlCuadrado(3)

// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//   return num ** exponent
// }

//   elevar(3, 2)


// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return str1 === str2
//   return false
// }

// tienenMismaLongitud("5", "5")



// function resta(x, y) {
//   // Resta "y" de "x" y devuelve el valor
//   // Tu código:
//   return resta=x-y
// }

// resta(12, 4)


// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return x===y
//   return false
// }

// sonIguales(6, 6)


// function agregarItemAlFinalDelArray(array, elemento){
  
//   array.push (elemento)
//   return array
// }

// let array=[1,2,3,4]
// let elemento = "mayonesa"
// agregarItemAlFinalDelArray(array, elemento)


// function devolverUltimoElemento(array){
//   return array.length 
// }


// let array =[1,2,3,4,"a",33,"ased"]
// devolverUltimoElemento(array)



// function devolverUltimoElemento(array){
//   return array[array.length -1]
// }


// let array =[1,2,3,4,"a",33,"ased"]
// devolverUltimoElemento(array)

// function fizzBuzz(numero){
//   if ((numero % 3 === 0) && (numero % 5 === 0)){
//     return "fizzBuzz"  
//       }
//   else if (numero % 5 === 0){
//         return "Buzz"
//         } 
//    else if (numero % 3 === 0){
//         return "fizz"
//         } 
//   else return numero
// }


// let numero = 15
// fizzBuzz(15)





// function esDiezOCinco(numero){
//   if (numero===10 || numero===5){
//     return true
//   }
//     else
//       return false
  
  
// }

// let numero = 11
// esDiezOCinco(numero)




// function saludo(idioma){
//    if (idioma=== "Aleman" ||idioma=== "aleman"){
//     return "Guten Tag!"
//   }
//   else if (idioma==="Mandarin") {
//       return "Ni Hao"
//     }
//   else if (idioma==="Ingles"){
//     return "Hello"
//   }
//   else {
//     return "Hola!"
//   }
  
// }
 

// let idioma = "Aleman"
// saludo (idioma)



// function conection(status){
//   if (status===1){
//     return "Online"
//   }
//   else if (status===2) {
//       return "Away"
//     }
//   else {
//     return "Offline"
//   }
    
  
// }

// let status = 3
// conection(status)

// function mayoriaDeEdad(edad){
//   if (edad >= 18){
//     return "allowed"
//   }
//   return "notAllowed"
// }


// let edad=18
// mayoriaDeEdad(100)





// function obtenerMayor(x,y){
//   if (x>y){
//     return x
//   }
//   else {
//   return y  
//   }
  
// }
//   let x=5;
//   let y=9;
  
//   obtenerMayor(x,y)


// function sonIguales(x,y){
//   if (x === y){
//     return true
//   }
//   else {
//     return false
//   }
  
// }

// console.log (sonIguales ("pablo","pablo"))

// function tienenMismaLongitud (str1, str2){
//   return (str1.length === str2.length)
// }

// tienenMismaLongitud("hola","holaa")


// function menosQueNoventa(num){
//   return num<90
  
// }

// menosQueNoventa(90)




  
  
