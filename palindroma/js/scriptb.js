// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// SECONDO METODO VISTO IN CLASSE CON LC

var inputUtente = prompt("inserisci una parola");
console.log(inputUtente);

var outPutFunct = rovescia(inputUtente);
console.log(outPutFunct);

function rovescia(stringa) {
  var parolaRovesciata = "";
  parolaRovesciata = stringa.split("").reverse().join("");
  console.log(parolaRovesciata);

  if (parolaRovesciata.toUpperCase() === inputUtente.toUpperCase()) {
    return "la parola è palindroma";
  } else {
    return "la parola non è palindroma";
  }
}
