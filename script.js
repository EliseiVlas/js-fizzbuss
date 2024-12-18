// FizzBuzz

// Stabilisco un ciclo che mi stampi i numeri da 1 a 100
for(let i=1; i<=100; i++){
    //SE sono sia multipli di 3 e sia di 5 stampami FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    //Altrimenti se sono multipli di 5 stamba Bazz 
    }else if (i % 5 === 0){
        console.log("Buzz")
    //Altrimenti se sono multipli di 3 stampa Fizz
    }else if (i % 3 === 0){
        console.log("Fizz")
    //Altrimenti stampami il numero    
    }else{
        console.log("numero " + i)
    }
}

    

     

   