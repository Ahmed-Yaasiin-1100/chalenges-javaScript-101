
// 7. Xawaala Transfer

// Ahmed is in Oslo sending $500 home. The exchange rate is 10 NOK per dollar. The fee is 4.5%.

// Calculate what leaves his account:

// Amount in NOK
// Fee in NOK
// Total charged in NOK
// How much arrives in dollars

// Output:

// Amount: 5000 NOK
// Fee: 225 NOK
// Total charged: 5225 NOK
// Arrives: $500


let PerDollarnok = 10
let amountDollar = 500
let rate = 0.045

let amount = PerDollarnok * amountDollar

let fee = amount * rate
let totalCharked = amount + fee

console.log(`Amount: ${amount}`);
console.log(`Fee: ${fee}`);
console.log(`Total Charged: ${totalCharked}`);
console.log(`Arrived: ${amountDollar}`);



