
// 14. Speed Check

// Faarax is driving on a Norwegian highway. The speed limit is 90 km/h. He is driving at 112 km/h. The fine is 800 NOK for every 10 km/h over the limit.

// Calculate the fine:

// How much over the limit
// Total fine

// Output:

// Over limit by: 22 km/h
// Fine: 1600 NOK


let speed = 112

let limitSpeed = 90

let feeLimitPer10Km = 800

let overLimit = speed - limitSpeed

let totalFee = Math.floor(overLimit / 10) * feeLimitPer10Km


console.log(`Over Limit: ${overLimit} km/h`);
console.log(`Total Fee: ${totalFee}`);


