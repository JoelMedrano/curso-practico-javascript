//codigo del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado);

console.groupEnd();

//codigo del triangulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = (ladoTriangulo1+ladoTriangulo2+baseTriangulo);
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log("Los lados del triángulo son: " + ladoTriangulo1 + ", " + ladoTriangulo2 + " y la base es: " + baseTriangulo);
console.log("El perímetro del triángulo es: " + perimetroTriangulo);
console.log("El área del triángulo es: " + areaTriangulo);

console.groupEnd();