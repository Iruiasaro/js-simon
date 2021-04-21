//set 3 array
var computerNumbers = [];
var userNumbers = [];
var checkNumbers = [];

//countDown 30 secondi
var countDown = 30;

//inserimento per 5 volte
var cicli = 5;

//estrazione 5 numeri Random
while (computerNumbers.length < cicli) {

    var numeroEstratto = numeroRandom();

    if (computerNumbers.indexOf(numeroEstratto) === -1) {

        computerNumbers.push(numeroEstratto)
    }
}
alert("Ecco 5 numeri estratti a sorte: " + computerNumbers.join(" / ") + ". Premi il tasto OK e dai il via al count-down di 30 secondi dopo il quale avrai 5 tentativi per indovinare quanti più numeri possibili.");

// Function 
function numeroRandom() {
    var numero = Math.floor(Math.random() * 100);
    return numero
}

setTimeout(function () {

    while (userNumbers.length < cicli) {
        var insertNumber = parseInt(prompt("Inserisci il " + (userNumbers.length + 1) + "° numero"));

//condizioni NaN e numero già inserito
        if (Number.isNaN(insertNumber)) {
            alert("Il numero immesso NON è valido");

        } else if (userNumbers.indexOf(insertNumber) > -1) {
            alert("Questo numero è già stato inserito");

        } else {
            userNumbers.push(insertNumber);

            if (computerNumbers.includes(insertNumber)) {
                checkNumbers.push(insertNumber);
            }
        }
    }
    //numeri indovinati
    if (checkNumbers.length > 0) {
        alert("Hai beccato " + checkNumbers.length + " numero/i: " + checkNumbers.join(" / "));

    //nessun numero preso
    } else {
        alert("Peccato, non hai indovinato alcun numero");
    }
}, 10000)

