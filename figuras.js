//Código del cuadrado
console.group ("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
} 
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es:  " + areaCuadrado + "cm^2");
console.groupEnd();

 //Códoigo del triángulo
console.group("Triángulos");
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const altoDelTriangulo = 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}; 
// console.log("El perímetro del triangulo es:  " + perimetroTriangulo + "cm");

// console.log("La altura del trianglo es de : " + altoDelTriangulo+ "cm");

function areaTriangulo (base, alto){
    return (base * alto) / 2;
}; 
// console.log("El area del triangulo es:  " + areaTriangulo + "cm");

console.groupEnd();

 //Códoigo del círculo
 console.group("Círculos");
 //Radio
 const radioCirculo = 4;
// console.log("El radio del Circulo es:  " + radioCirculo + "cm");
 //Diametro
 function diametroDeMiCirculo(radio){
     return radio * 2
 }
//  const diametroCirculo = radioCirculo * 2;
//  console.log("El diametro del Circulo es:  " + diametroCirculo + "cm");

 //PI
 const PI = Math.PI;
 console.log("PI del Circulo es: " + PI + "cm");


 //Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroDeMiCirculo(radio);
    return  diametro * Math.PI; 
} 
// console.log("El preimetro  del Circulo es:  " + perimetroCirculo + "cm");

 //Area
 function areaCirculo (radio){
    return (radio * radio) * Math.PI;
 }
//  console.log("El area del Circulo es:  " + areaCirculo + "cm^");
 console.groupEnd();


