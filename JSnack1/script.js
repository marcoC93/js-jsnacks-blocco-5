 // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.



var listino_bici = [
    {
        "nome" : "mountain bike",
        "peso" :  5,
    },
    {
        "nome" : "bici da corsa" ,
        "peso" :  3,
    },
    {
        "nome" :  "fat bike",
        "peso" :  10 ,
    },
    {
        "nome" : "graziella" ,
        'peso' :  7 ,
    },
    {
        "nome" :  "bmx",
        "peso" :  4 ,
    },
];


var bici_leggera = 100 ;






// scorriamo la lista degli oggetti
for (var i = 0; i < listino_bici.length; i++) {


 //console.log(listino_bici[i].peso);
    // qua abbiamo l'oggetto
    var bici_corrente = listino_bici[i].peso ;
    //console.log(bici_corrente);


    if (bici_corrente < bici_leggera ){
        bici_leggera = bici_corrente ;
    }



    //var peso = bici_corrente.peso;

     //console.log(listino_bici[i]);


}

console.log(bici_leggera);
