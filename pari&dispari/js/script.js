// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta=prompt("pari o dispari");
var numero=parseInt(prompt("numero da 1 a 5"));
console.log(scelta, numero, "scelte utente");
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var nRandom = randomNumbers();
console.log(nRandom, "numero random");
function randomNumbers()
{
  return Math.floor(Math.random() * 5) + 1;
}
// Sommiamo i due numeri
var somma = nRandom + numero;
console.log(somma, "somma dei 2 numeri");
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var risultato = establish(somma);
console.log(risultato, "funzione mi dice se è pari o dispari");
function establish() {
  if (somma % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
// Dichiariamo chi ha vinto.
if (risultato == scelta) {
  document.getElementById('stampa').innerHTML = "hai vinto";
} else {
  document.getElementById('stampa').innerHTML = "hai perso";
}
