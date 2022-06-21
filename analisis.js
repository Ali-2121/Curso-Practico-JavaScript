//Helpers, funciones que solo sirven para poder lograr el resultado pero que no afectan en el
function esPar (numerito){
    return (numerito % 2 === 0);
}

function calculaMedioAritmetica(lista){    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor ){
            return valorAcumulado + nuevoValor;
        }
    );
 
    const promedioLista = sumaLista/ lista.length;
    return promedioLista;
 }

//Calculadora de mediana
function medianaSalarios (lista){
    const mitad = parseInt (lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1= lista[mitad -1];  
        const personitaMitad2=  lista [mitad];

        const mediana = calculaMedioAritmetica([personitaMitad1, personitaMitad2])
        return mediana;


    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Calculando la mediana general
const salarios = colombia.map(
    function (personita){
        return personita.salary
    }
)

const salariosSorted = salarios.sort(
    function (salarioa, salariob){
        return salarioa - salariob;
    }
)

const medianaGeneralCol = medianaSalarios(salariosSorted);

//Mediana del top 10%
const spliceStart =  (salariosSorted.length * 90) / 100;
const spliceCount = salariosSorted.length - spliceStart;
const salariosTop10 = salariosSorted.slice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})