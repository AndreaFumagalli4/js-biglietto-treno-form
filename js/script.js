/**
1. Chiedere i chilometri da percorrere e l'età del passeggero/passeggera
2. Calcolare il costo del biglietto (SOLO AL CLICK AVANTI!!!):
    2.1 Se il passeggero/a è minorenne => 17.5% di sconto;
    2.2 Se il passeggero/a è over 65=> 33.3% di sconto.
3. Mostrare all'utente il prezzo del biglietto.
*/

// 1. Distance and age

const firstName = document.getElementById('name');

const secondName = document.getElementById('surname');

const distance = document.getElementById('distance');

const age = document.getElementById('age');

const output = document.getElementById('output');

// 2. Ticket count

const button = document.getElementById('button');

button.addEventListener('click', function(){

    let ticketPrice = parseInt(distance.value) * 0.2762;

    console.log(firstName.value);
    console.log(secondName.value);
    console.log(distance.value);
    console.log(age.value);
    console.log(ticketPrice);
    
    if ( parseInt(age.value) < 18 ){
        ticketPrice = ticketPrice * 0.825;
    } else if ( parseInt(age.value) > 65 ){
        ticketPrice = ticketPrice * 0.667;
    }

    console.log(ticketPrice);

    output.innerHTML = 'Il prezzo del biglietto è di ' + ticketPrice.toFixed(2) + '&euro;'; 
});


