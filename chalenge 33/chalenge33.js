
// 33. Order Details

// An order comes in from the system.

// javascript
// Copy
// let order = { customer: "Faadumo", amount: 450, city: "Oslo", status: "pending" };
// Print all four values on separate lines without using dot notation:

// Example Output:


// Faadumo
// 450
// Oslo
// pending

let order = { customer: "Faadumo", amount: 450, city: "Oslo", status: "pending" };

const {customer , amount , city , status} = order;

console.log(customer);
console.log(amount);
console.log(city);
console.log(status);




