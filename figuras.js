//--------- Codigo Cuadrado ----------------

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado mide:" + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
  return lado * 2;
}

// console.log("El Area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//---------- Codigo Triangulos ------------

console.group("Triangulos");

// const ladoTriangulo1 = 6;

function ladoTriangulo(lado) {
  return lado * 2;
}

// const ladoTriangulo2 = 6;

// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm."
// );

// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, baseTriangulo) {
  return lado1 + lado2 + baseTriangulo;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//--------- Codigo Circle ----------

console.group("Circulos");

//Radio

// const radioCirculo = 4;

// console.log("El radio del circulo es: ", radioCirculo + " cm");

// Diametro

// const diametroCirculo = radioCirculo * 2;

// console.log("El diametro del circulo es: ", diametroCirculo + " cm");

function diametroCirculo(radio) {
  return radio * 2;
}

// Pi

const PI = Math.PI;

// console.log ("El valor de PI es: ", PI + " cm");

// Circunferencia

// const perimetroCirculo = diametroCirculo * PI;

// console.log("El perimetro del circulo es: ", perimetroCirculo + " cm");

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area

// const areaCirculo = radioCirculo * radioCirculo * PI;

// console.log("El area del circulo es: ", diametroCirculo + " cm^2");
// console.groupEnd();

function areaCirculo(radio) {
  return radio * radio * PI;
}

function calcularPerimetroCuadrado(){

  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
alert(perimetro);

}

function calculalAreaCuadrado(){

  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
alert(area);

}