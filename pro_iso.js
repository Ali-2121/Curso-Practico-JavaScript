function esIsosceles(lado1,lado2,base){
    if (lado1 === lado2 && base != lado1){
        return ("Sí, tu triángulo es isósceles");
    }else {
        return ("No, tu triángulo es de otro tipo");
    }
   
}

function validarTriangulo(){
    const inputL1 = document.getElementById("TrianL1");
    const valorL1 = inputL1.value;
    const inputL2 = document.getElementById("TrianL2");
    const valorL2 = inputL2.value;
    const inputBase = document.getElementById("TrianBase");
    const valorBase = inputBase.value;
 
    const tipoTrian = esIsosceles(valorL1, valorL2, valorBase);
    alert (tipoTrian);
}