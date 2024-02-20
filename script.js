let kmDaPercorrere = parseFloat(prompt('Quanti km devi percorrere?'));
console.log(kmDaPercorrere);

let etaPasseggero = parseFloat(prompt('Quanti anni hai?'));
console.log(etaPasseggero);

const prezzoAlKm = 0.21;

// Calcolo prezzo biglietto
let prezzoTotale = kmDaPercorrere * prezzoAlKm;
console.log(prezzoTotale);

// Sconti eventuali

if (etaPasseggero < 18){
    prezzoTotale *=0.8;
} else if (etaPasseggero > 65){
    prezzoTotale *=0.6;
} 

// Prezzo con due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Stampa prezzo biglietto
