// A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.



$(document).ready(function() {

    var array = [
    { 'numero' : 1 },
    { 'numero' : 2 },
    { 'numero' : 3 },
    { 'numero' : 4 },
    { 'numero' : 5 },
    ];
    var array_copia = [] ;
    var posizione_corrente ;

    //console.log(array);
    //console.log(array_copia);



    for (var i = 0; i < array.length; i++) {
        posizione_corrente = array[i] ;
        array_copia.push(posizione_corrente);

        for (var j = 0; j < array_copia.length; j++) {
            array_copia[j].position = 'x' ;
        }

    }



    //console.log( "questo é l'array creato in seguito " + array_copia);
    console.log(array);
    console.log(array_copia);

})
