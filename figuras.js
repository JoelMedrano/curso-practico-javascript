//codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){

   return lado * 4;

} 
perimetroCuadrado()
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado);

function areaCuadrado(lado){

    return lado * lado;

} 
areaCuadrado();
//console.log("El área del cuadrado es: " + areaCuadrado);

console.groupEnd();

//codigo del triangulo
console.group("Triángulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */

function perimetroTriangulo(lado1, lado2, base){

    return lado1 + lado2 + base;

} 

perimetroTriangulo();


function areaTriangulo(base, altura){

    return  (base * altura) / 2;

}
areaTriangulo();


/* console.log(
  "Los lados del triángulo son: " +
    ladoTriangulo1 +
    ", " +
    ladoTriangulo2 +
    " y la base es: " +
    baseTriangulo
);
console.log("El perímetro del triángulo es: " + perimetroTriangulo);
console.log("El área del triángulo es: " + areaTriangulo); */

console.groupEnd();

//codigo del triangulo
console.group("Círculo");

//const radioCirculo = 4;

function diametroCirculo(radio){

    return radio * 2;

} 

const PI = Math.PI;

function perimetroCirculo(radio){

    const diametro =  diametroCirculo(radio) * PI;

    return diametro;

} 

function areaCirculo(radio){

    return PI * radio * radio;

} 

/* console.log("El radio del círculo es: " + radioCirculo);
console.log("El diámetro del círculo es: " + diametroCirculo);
console.log("Pi es: " + PI);
console.log("El perímetro del circulo es :" + perimetroCirculo);
console.log("El área del círculo es:" + areaCirculo); */

console.groupEnd();


function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
    
}