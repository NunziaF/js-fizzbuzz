// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


var valoreDaStampare;
var numPrecedente;

for (var i = 1; i<=100; i++) {

  valoreDaStampare = "<div class=class_i>" + i + "</div>";

  if (i % 3 === 0) {
    valoreDaStampare = " <div class='class_fizz'> Fizz </div>";
  }
  if (i % 5 === 0) {
    valoreDaStampare = "<div class='class_buzz'> Buzz </div>";
  }
  if ((i % 3 === 0) && (i % 5 === 0)) {
    valoreDaStampare = "<div class='class_fizzbuzz'> FizzBuzz </div>";
  }
  console.log(valoreDaStampare);

  numPrecedente = document.getElementById('lista').innerHTML;
  document.getElementById("lista").innerHTML = numPrecedente + valoreDaStampare;
}
