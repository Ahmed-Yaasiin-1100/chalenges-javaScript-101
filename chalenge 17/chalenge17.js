
// 17. Currency Converter

// Sahra needs to convert dollars to NOK. The rate is 10.

// Write the function and test it:

// A function that takes a dollar amount and returns the NOK value
// Call it with 50, 200, and 500

// Output:

// $50 = 500 NOK
// $200 = 2000 NOK
// $500 = 5000 NOK



function currency(dollar){
    return dollar * 10
}

console.log(`$50 = ${currency(50)} Nok`)
console.log(`$200 = ${currency(200)} Nok`);
console.log(`$500 = ${currency(500)} Nok`);




