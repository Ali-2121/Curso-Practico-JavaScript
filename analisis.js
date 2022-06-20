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

