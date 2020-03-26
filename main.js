// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


for (var i = 1; i<=100; i++){

  //Se un numero è divisibile per 3 o per 5 è una stringa altrimenti è un numero i
  if ( (i % 3 === 0) || (i % 5 === 0)){

    //Se un numero è divisibile sia per 3 che per 5 sostituiscilo con FizzBuzz
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("FizzBuzz");

    } else {
        //Se è divisibile per 3 sostituiscilo con Fizz
        if(i % 3 === 0){
          console.log("Fizz");
        }
        //Se è divisibile per 5 sostituiscilo con Buzz
        if (i % 5 === 0){
          console.log("Buzz")
        }
      }

  } else{
    console.log(i);
  }
}
