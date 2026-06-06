
// 22. Cart Manager

// Faadumo is shopping online. Her cart has ["rice", "eggs", "bread"]. She adds "chicken". She decides she does not need "eggs". Check if "bread" is still in the cart.

// Update the cart:

// Add chicken to the end
// Remove eggs by position
// Check if bread is in the cart
// Print the final cart


// Output:
// ["rice", "bread", "chicken"]
// bread in cart: true



let shopping = ["rice", "eggs", "bread"];

shopping.push("chicken")

console.log(shopping);

shopping.splice(1,1)

console.log(shopping);

let CheckBread = shopping.includes("bread")
console.log(`Bread in Chart: ${CheckBread}`);


console.log(shopping);




