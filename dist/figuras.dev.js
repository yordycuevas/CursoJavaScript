"use strict";

// Codigo Cuadrado
console.group("Cuadrados");
var ladoCuadrado = 5;
console.log("Los lados del cuadrado mide:" + ladoCuadrado + " cm");
var perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd(); // Codigo Triangulos

console.group("Triangulos");
var ladoTriangulo1 = 6;
var ladoTriangulo2 = 6;
var baseTriangulo = 4;
var alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");
console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");
var perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");
var areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm^2");
console.groupEnd(); // Codigo Circle

console.group("Circulos"); //Radio

var radioCirculo = 4;
console.log("El radio del circulo es: ", radioCirculo + " cm"); // Diametro

var diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: ", diametroCirculo + " cm"); // Pi

var PI = Math.PI;
console.log("El valor de PI es: ", PI + " cm"); // Circunferencia

var perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: ", perimetroCirculo + " cm"); // Area

var areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: ", diametroCirculo + " cm^2");
console.groupEnd();