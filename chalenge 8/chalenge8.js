
// Cinema Ticket

// Ahmed is buying a cinema ticket in Oslo. He is 14 years old. The cinema charges 80 NOK for under 12, 100 NOK for 12 to 17, 130 NOK for 18 to 64, and 90 NOK for 65 and over.

// Print the right ticket price:

// Age
// Price based on the rules

// Output:


// Age: 14
// Ticket price: 100 NOK





let age = 14;
let cinemaCharges;

if(age < 12){
    cinemaCharges = 80
}else if(age >= 12 && age <= 17){
    cinemaCharges = 100
}else if(age >= 18 && age <= 64){
    cinemaCharges = 130
}else{
    cinemaCharges = 90
}

console.log(`Age: ${age}`);

console.log(`Ticket Price: ${cinemaCharges}`);
