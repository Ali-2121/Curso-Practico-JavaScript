const lista1 = [
    1,
    3,
    3,
    5,
    6,
    9,
    9,
    3,
    6,
    1,
    6,
    9,
    9,
    9,
];
const lista1Count = {};

lista1.map(
    function ( elemento){
        if (lista1Count[elemento] ){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        
    }
)


const lista1Array =Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];


function calcularModa (nuevaLista){
    const nuevaListaOrdenada = {};

    nuevaLista.map(
        function ( elemento){
            if (nuevaListaOrdenada[elemento] ){
                nuevaListaOrdenada[elemento] += 1;
            }else{
                nuevaListaOrdenada[elemento] = 1;
            }
            
        }
    )
    
    const objetoConvertido =Object.entries(nuevaListaOrdenada).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    let laModa = objetoConvertido[objetoConvertido.length - 1];
    console.log(laModa);
}
