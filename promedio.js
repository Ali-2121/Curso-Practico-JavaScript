const lista1 =[
    100,
    200,
    300,
    500,
];


function calculaMedioAritmetica(lista){
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++){
//    sumaLista = sumaLista + lista[i];
// }

   const sumaLista = lista.reduce(
       function (valorAcumulado = 0, nuevoValor ){
           return valorAcumulado + nuevoValor;
       }
   );

   const promedioLista = sumaLista/ lista.length;
   return promedioLista;
}