// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola
var inputUtente = prompt("inserisci una parola");
console.log(inputUtente);
// Creare una funzione per capire se la parola inserita è palindroma
// per capire se una parola è palindroma devo prima di tutto rovesciarla
// 1 step: la mia funzione avrà il compito di rovesciare la parola data dall'utente
// 2 step: analizzare la parola invertita e paragonarla alla parola data dall'input
// 3 step: se le parole combaciano dara una stampa, se non è cosi una stampa diversa
function rovescia(input)
{
  var parolaRovesciata = "";
  var i = input.length;
  while (i >= 0)
  {
    parolaRovesciata = parolaRovesciata + input[i]
    i--
  }
  console.log(parolaRovesciata);
  return parolaRovesciata;
}

var outPutFunct = rovescia(inputUtente);
console.log(outPutFunct);
