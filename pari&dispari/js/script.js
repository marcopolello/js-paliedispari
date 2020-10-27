// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
var utente =prompt("scrivi il tuo nome")
document.getElementById('entrata').innerHTML = "Benvenuto, " + utente

var programma = document.getElementById('scommetti')
programma.addEventListener('click',function()
{
  var annulla = document.getElementById('cancella');
  annulla.addEventListener('click', function()
  {
    document.getElementById('compilato').reset();
  })

  // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  var scelta= (document.getElementById('a')).value;
  var numero= parseInt(document.getElementById('b').value);
  console.log(scelta, numero, "<--scelte utente");
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  var nRandom = randomNumbers();
  console.log(nRandom, "<--numero random");
  document.getElementById("c").innerHTML = "il numero scelto dal pc è: " + nRandom;
  // funzione che mi da un numero random tra 1 e 5
  function randomNumbers()
  {
    return Math.floor(Math.random() * 5) + 1;
  }
  // Sommiamo i due numeri
  var somma = nRandom + numero;
  console.log(somma, "<--somma dei 2 numeri");
  document.getElementById("d").innerHTML = "la somma dei due numeri è: " + somma;
  document.getElementById("e").innerHTML = "tu avevi scelto: " + scelta;
  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  var risultato = establish(somma);
  console.log(risultato, "funzione mi dice se è pari o dispari");
  // funzione che stabilisce se somma numeri è pari o dispari
  function establish()
  {
    if (somma % 2 === 0) {
      return "pari";
    } else {
      return "dispari";
    }
  }
  // Dichiariamo chi ha vinto.
  if (risultato == scelta) {
    console.log("ha vinto l'utente");
    document.getElementById('stampa').innerHTML = "quindi hai vinto grande!";
  } else {
    console.log("l'utente da perso");
    document.getElementById('stampa').innerHTML = "quindi hai perso mi dispiace";
  }

})
