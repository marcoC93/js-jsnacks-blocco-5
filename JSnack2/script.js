// Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

var array_numeri = [1,2,3,4,5,6,7] ;

var inizio = parseInt(prompt('Scrivi il primo numero ')) ;

var fine = parseInt(prompt('Scrivi il secondo numero ')) ;
var array_estratto = [] ;

console.log(inizio , fine);

for (var i = 0; i < array_numeri.length; i++) {
    var elemento_corrente = array_numeri[i]

    if (elemento_corrente >= inizio && elemento_corrente <= fine) {
        array_estratto.push(elemento_corrente)
    }


}
console.log(array_estratto);
