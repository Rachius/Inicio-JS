




// Dificultad:  馃煝馃煛
// // 4- Escriba un script que muestre la tabla de multiplicar de un n煤mero ingresado por pantalla, la creaci贸n de la tabla debe ser realizada con una funci贸n y mostrar solo los resultados del 1 al 10 del n煤mero elegido por el usuario.

// function tablaMulti(n){
  
//   for (i=1; i<11; i++){
//     console.log(n*i)
//   }
  
// }
// tablaMulti(7)







// Dificultad:  馃煝馃煛
// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rect谩ngulo, luego crear una funci贸n para calcular su per铆metro y mostrarlo por pantalla.

// La f贸rmula del per铆metro  es p = 2*(a +b)



// function perimetroRectangulo (l1,l2,l3,perimetro){
//     perimetro = l1+l2+l3;
//     console.log('El perimetro es: ' ,perimetro)
    
//   }
  
//   perimetroRectangulo (4,2,10)



// // Funciones
// Dificultad:  馃煝馃煛
// 2- Definir una funci贸n que muestre informaci贸n sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la funci贸n determina si esa cadena est谩 formada s贸lo por may煤sculas, s贸lo por min煤sculas o por una mezcla de ambas.


// function esMayuscula (cadena){
  
//   if(cadena === cadena.toUpperCase()){
//     console.log('mayuscula')
//   }
//   else if  (cadena === cadena.toLowerCase())  {
//     console.log('minuscula')
//   }
//   else { console.log('mezclado')}
  
// }

// esMayuscula ('hola')



// // // Funciones
// // Dificultad:  馃煝
// // 1- Escribir el c贸digo de una funci贸n a la que se pasa como par谩metro un n煤mero entero y devuelve como resultado una cadena de texto que indica si el n煤mero es par o impar. Mostrar por pantalla el resultado devuelto por la funci贸n.

// function mostrarParidad (n)
// {
//   if(n%2) {
//     console.log('Es Impar')
//     }
//   else{
//     console.log('Es Par')   
//     }
  
// }
//  mostrarParidad (10)




// // Arrays
// // Dificultad:  馃煝
// // 1- Crear un array llamado meses y que almacene el nombre de los doce meses del a帽o. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// let meses = ['Ene','Feb','Mar','Ab','Mayo','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
// console.log(meses)








// function dePalabrasAFrase(palabras) {
//   // "palabras" es un array de strings/cadenas
//   // Devuelve un string donde todas las palabras est茅n concatenadas
//   // con espacios entre cada palabra
//   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
//   // Tu c贸digo:
//   console.log(palabras[0]+" "+ palabras[1])
// }

// let palabras = ["Hola","Mundo"]
// dePalabrasAFrase(palabras)



// function agregarItemAlComienzoDelArray(array, elemento) {
//   // A帽ade el "elemento" al comienzo del array
//   // y devuelve el array
//   // Pista: usa el m茅todo `.unshift`
//   // Tu c贸digo:  
//   let nuevaLongitud = array.unshift('Fresa')
//   console.log(array)
// }
// let array = [10,20,30,40,50]
// agregarItemAlComienzoDelArray(array)





// function agregarItemAlFinalDelArray(array, elemento) {
//   // A帽ade el "elemento" al final del array
//   // y devuelve el array
//   // Tu c贸digo:
//   let nuevaLongitud = array.push('Naranja')
//   console.log(array)
// }
// let array = [10,20,30,40,50]
// agregarItemAlFinalDelArray(array)




// function incrementarPorUno(array) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Aumenta cada entero por 1
//   // y devuelve el array
//   // Tu c贸digo:
  
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
//   // Tu c贸digo:
  
// }
// let array = [10,20,30,40,50]
// console.log(array.length)
// for(i=0; i<array.length; i++){
  
//   array = array[i] + 1
  
// }
// let pos = array.indexOf(20)
// console.log(array)







// function devolverUltimoElemento(array) {
//   // Devuelve el 煤ltimo elemento de un array
//   // Tu c贸digo:
//   let ultimo = array[array.length - 1]
//   return ultimo
// }





// function devolverPrimerElemento(array) {
//   //   // Devuelve el primer elemento de un array
//   //   // Tu c贸digo:
//   //   let primero = array[0]
//   //   return primero
//   //   }


// function doWhile(numero) {
//   //Implementar una funci贸n tal que vaya aumentando el valor recibido en 5 hasta un l铆mite de 8 veces
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
//   //Leer un n煤mero entero y retornar true si tiene 3 d铆gitos. Caso contrario, retorna false.
//   //Escribe tu c贸digo aqu铆
//   if (numero > 99){ return true}
//   return false
// }
// tieneTresDigitos(24)





// function esVerdadero(valor) {
//   //Escribe una funci贸n que reciba un valor booleano y retorne 鈥淪oy verdadero鈥?
//   //si su valor es true y 鈥淪oy falso鈥? si su valor es false.
//   //Escribe tu c贸digo aqu铆
//   if(valor ===true){ return "Soy Verdadero" }
//   return "Soy Falso"
// }
// esVerdadero(false)




// function suma(n1,n2){
//   return n1+n2;
// }
// function operacionMatematica(n1, n2, cb) {
//   //Vamos a recibir una funci贸n que realiza una operaci贸n matem谩tica como callback junto con dos n煤meros.
//   //Devolver el callback pas谩ndole como argumentos los n煤meros recibidos.
//   //Tu c贸digo:
//   return cb(n1,n2);
// }
// operacionMatematica(4, 5, suma)






// function operadoresLogicos(num1, num2, num3) {
//   //La funci贸n recibe tres n煤meros distintos.
//   //Si num1 es mayor a num2 y a num3 y adem谩s es positivo, retornar ---> "N煤mero 1 es mayor y positivo"
//   //Si alguno de los tres n煤meros es negativo, retornar ---> "Hay negativos"
//   //Si num3 es m谩s grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
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
//   //Vamos a recibir una funci贸n que realiza una operaci贸n matem谩tica como callback junto con dos n煤meros.
//   //Devolver el callback pas谩ndole como argumentos los n煤meros recibidos.
//   //Tu c贸digo:
// }



// function colors(color) {
//   //La funci贸n recibe un color. Devolver el string correspondiente:
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

// console.log("驴Hay algo m谩s que te quisiera consultar?");
// }
// // colors(color)




// function numeroRandom() {
//   //Generar un n煤mero al azar entre 0 y 1 y devolverlo
//   //Pista: investig谩 qu茅 hace el m茅todo Math.random()

//   return Math.random() * 1;
// }
// numeroRandom()



// function redondearHaciaArriba(num) {
//   // Redondea "num" hacia arriba (al pr贸ximo entero) y devu茅lvelo
//   // Tu c贸digo:
//   return Math.ceil(num)
// }
// redondearHaciaArriba(num) 

// function redondearNumero(num) {
//   // Redondea "num" al entero m谩s pr贸ximo y devu茅lvelo
//   // Tu c贸digo:
//     return Math.round(num)
// }

// redondearNumero(num)

// function elevarAlCuadrado(num) {
//   // Devuelve el valor de "num" elevado al cuadrado
//   // ojo: No es raiz cuadrada!
//   // Tu c贸digo:
//     return num ** 5
// }

// elevarAlCuadrado(3)

// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu c贸digo:
//   return num ** exponent
// }

//   elevar(3, 2)


// function tienenMismaLongitud(str1, str2) {
//   // Devuelve "true" si las dos strings tienen la misma longitud
//   // De lo contrario, devuelve "false"
//   // Tu c贸digo:
//   return str1 === str2
//   return false
// }

// tienenMismaLongitud("5", "5")



// function resta(x, y) {
//   // Resta "y" de "x" y devuelve el valor
//   // Tu c贸digo:
//   return resta=x-y
// }

// resta(12, 4)


// function sonIguales(x, y) {
//   // Devuelve "true" si "x" e "y" son iguales
//   // De lo contrario, devuelve "false"
//   // Tu c贸digo:
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




  
  
