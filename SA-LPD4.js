/*
Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida: 
*/
let num = prompt("Ingresa un nUmero:");

while (isNaN(num) || num === "") {
  alert("Por favor, ingresa un nUmero vAlido.");
  num = prompt("Ingresa un nUmero:");
}

numero = parseInt(num);

function fibonacci(n) {
  let serie = [0, 1];
  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}

let result = fibonacci(num);

console.log(result.join(", "));

