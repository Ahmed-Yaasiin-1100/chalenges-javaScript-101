
// 39. Process Payment

// Write a function called processPayment that takes an amount and a callback. It prints "Processing..." then calls the callback with the amount.

// Call it with a function that prints the confirmation:

// Example Output:

// Processing...
// Payment of 500 NOK confirmed

const processPayment = (amount, callback)=>{
    console.log("Processign");
    callback(amount)
    
}

const confirmation = (amount)=>{
    console.log(amount);
    
}

processPayment(500, confirmation)


