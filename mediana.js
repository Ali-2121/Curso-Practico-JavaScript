//Función que reciclamos para calcular el promedio, recibe como parámetro un array, en este caso es una array de 2 elementos. (En este caso "elemento1" y "elemento2")
function calculaMedioAritmetica(lista){    
       const sumaLista = lista.reduce(
           function (valorAcumulado = 0, nuevoValor ){
               return valorAcumulado + nuevoValor;
           }
       );
    
       const promedioLista = sumaLista/ lista.length;
       return promedioLista;
    }
//Nuestro array de donde vamos a calcular la mediana
const lista1 = [
    100,
    200,
    500,
    800,
    400000000000,
];//Aquí tomamos el número de elementos del array (quen en este caso es 4(par)) y lo dividimos entre 2, ese valor se queda guardado en mitadLista1 
const mitadLista1 = parseInt(lista1.length /2);

//Esta función va a validar si el número de elementos del array es par o no.  
 function esPar(numerito){
     //Se le pasará como argumento el número de elementos del array, va a dividirlo entre 2, si el residuo es 0, entonces significa que el número de elementos del array es par y retornará "true";
     if(numerito % 2 === 0){
         return true;
     }
     //En caso de que el número de elementos de array al ser divido entre 2 y el residuo sea un número diferente a 0, entrará al "else" y retornará "false"
     else {
         return false;
     }
 }

 let mediana; //Esta variable solo se declara, porque se va a inicializar dependiendo de si nuestra lista tiene un número de elementos par o impar

 //Nuestro if manda llamar la función que va a validar si el número de elementos del array es par o no, como argumento le pasamos el largo (".length") de nuestro array, va a ejecutarse la función. Si nuestra lista ("array") es par, devolverá "true" y entrará al código de "if", sino nuestra lista ("array") es impar, devolverá "false" y entrará al "else"
if (esPar(lista1.length)){
    //En caso de que el número de elementos sea par se van a crear 2 variables
    const elemento1 = lista1[mitadLista1 - 1]; //En la primera se va a guardar la posición que calcule mitadLista1 -1, es decir, una posición menor a la que se calcula (IMPORTANTE: En la consola hay que buscar qué posición toma mitadLista 1 y ver si queremos la posición siguiente o la anterior, en este caso necesitábamos la anterior, por eso le restamos uno)
    const elemento2 = lista1[mitadLista1];//En la segunda se va a guardar la posición que calcule mitadLista
    const promedioElemento1y2 =  calculaMedioAritmetica([elemento1, elemento2]); //Ya que se tienen las dos variables con las posiciones que quedan en medio de la lista, que son la mediana, vamos sumarlas y sacarles el promedio con la función, a la función le pasamos como argumento las 2 variables que acabamos de crear. Este promedio se va a guardar en una variable, en este caso ("promedioElemento1y2")

    mediana = promedioElemento1y2; // Ahora, la variable "mediana" que estaba vacía se va a llenar con el promedio que se guardó en la variable donde se llamó la función para calcular el promedio

}else{
    //Si el número es impar, se indica que el array que tiene nuestra lista, va a ser contado y el número de elementos será dividido entre 2 (mitadLista1). El resultado se guardará en la variable vacía "mediana", que será la posición del elemento dentro del array [0,1,2,3,4...] y se tomará el valor de la posición.
    mediana = lista1[mitadLista1];
}