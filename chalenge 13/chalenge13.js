
// 13. Gym Membership

// Mahad wants to join a gym. Monthly fee is 399 NOK. He has 1200 NOK saved. He wants to know how many months he can afford and how much he has left.

// Calculate his membership:

// Months he can afford
// Remaining balance

//  Output:
// Months: 3
// Remaining: 3 NOK


let amount = 1200
let monthGymMoney = 399
let month = Math.floor(amount / monthGymMoney)
let total = month * monthGymMoney
let remaing = amount - total;


console.log(`Monthy ${month}`);
console.log(`Remaing: $${remaing}`);


