
// 12. Delivery Fee

// Hodan orders food online. The order is 320 NOK. Delivery is free above 250 NOK. Below that it costs 49 NOK.

// Check if she gets free delivery:

// Order amount
// Delivery fee

// //  Output:
// Order: 320 NOK
// Delivery: free


let dalab = 320;
let freeDelivery;

if(dalab >= 250){
    freeDelivery = "free"
    
}else{
    freeDelivery = 49;
    
}

console.log(`Order: ${dalab}`);
console.log(`delivery: ${freeDelivery}`);

