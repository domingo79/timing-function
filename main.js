/*
// funzione sincrona
console.log('Hello World!');
//console.clear();

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// funzione asincrona setTomeout

setTimeout(myfunction, 3000);
function myfunction() {
    console.log('prova il Timeout');
}

var test = setInterval(alertUser, 5000);
function alertUser() {
    console.log('prova il SetInterval');
}
console.log(test);
*/
// live esercizio 1****************
// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().

/*
var domanda = parseInt(prompt('quanto tempo manca alla cottura?'));
milliSecondi = domanda * 1000;

setTimeout(function () {
    alert('La pasta è pronta')
}, milliSecondi);
*/

// live esercizio 2****************
//Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

// var secondi = 10;


// var intervallo = setInterval(function () {

//     if (secondi === 0) {
//         alert('Buon Compleanno');
//         clearInterval(intervallo);
//     } else {
//         secondi--;


//     } document.getElementById('secondi').innerHTML = secondi;
// }, 1000)

// live esercizio 3 ****************
/*
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/


var btnStart = document.getElementById('avvia');
var btnEnd = document.getElementById('arresta');
var secondi = document.getElementById('cronometro');
var intervallo;
btnStart.addEventListener('click', function () {
    // avviamo in cronometro 
    var tempo = 0;
    intervallo = setInterval(function () {
        tempo++
        console.log(tempo);
        secondi.innerHTML = tempo;
    }, 1000);
});

btnEnd.addEventListener('click', function () {
    // stoppa il cronometro
    clearInterval(intervallo);

})

