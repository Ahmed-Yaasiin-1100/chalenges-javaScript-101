
// 6. Parking Fee

// Yusuf parked in Oslo for 4 hours. The garage charges 50 NOK for 1 hour or less, 100 NOK up to 3 hours, and 200 NOK after that.

// Calculate what he pays:

// Hours parked
// Final fee based on the rules

//Output:


// Hours parked: 4
// Parking fee: 200 NOK

let hoursPark = 4;

let parkedFee;
if(hoursPark <= 1){
   parkedFee = 50
}else if(hoursPark <= 3){
    parkedFee = 100
}else{
    parkedFee = 200
}

console.log(`Hours Parked:  ${hoursPark}`);
console.log(`Parking Fee: $${parkedFee}`);


