// FizzBuzz

// Stabilisco un ciclo che mi stampi i numeri da 1 a 100
for(let i=1; i<=100; i++){
    let output;
    
    //SE sono sia multipli di 3 e sia di 5 stampami FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        output = "FizzBuzz";
    //Altrimenti se sono multipli di 5 stamba Bazz 
    }else if (i % 5 === 0){
        output = "Buzz";
    //Altrimenti se sono multipli di 3 stampa Fizz
    }else if (i % 3 === 0){
        output = "Fizz";
    //Altrimenti stampami il numero    
    }else{
        output = "numero " + i;
    }
    console.log(output);
}

    

     

   