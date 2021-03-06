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
    return (Number(lado1) + Number(lado2) + Number(base));
}; 
// console.log("El perímetro del triangulo es:  " + perimetroTriangulo + "cm");

// console.log("La altura del trianglo es de : " + altoDelTriangulo+ "cm");

function areaTriangulo (base, alto){
    return (Number(base) * (alto)) / 2;
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

 //Aquí interactuamoes con el HTML
 //Interacción del Cuadrado
 function calcularPerimetroCuadrado(){
     const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const perimetro = perimetroCuadrado(value);
     alert(perimetro);
 }
 function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
 }
  //Interacción del Círculo
  function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
   const input = document.getElementById("InputCirculo");
   const value = input.value;

   const area = areaCirculo(value);
   alert(area);
}

  //Interacción del Triangulo
function calcularPerimetroTriangulo(){
    const inputL1 = document.getElementById("TrianL1");
    const valorL1 = inputL1.value;
    const inputL2 = document.getElementById("TrianL2");
    const valorL2 = inputL2.value;
    const inputBase = document.getElementById("TrianBase");
    const valorBase = inputBase.value;

    const perimetro = perimetroTriangulo (valorL1, valorL2, valorBase);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("TrianBase");
    const valorBase = inputBase.value;
    const inputAlto = document.getElementById("TrianAltura");
    const valorAlto = inputAlto.value;

    const area = areaTriangulo (valorBase, valorAlto);
    alert (area);
}





