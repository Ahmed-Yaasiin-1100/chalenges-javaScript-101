
// 11. Phone Plan

// Amina is choosing a phone plan. Under 100 NOK: calls only. 100 to 300 NOK: calls and data. Above 300 NOK: calls, data, and streaming. She pays 250 NOK per month.

// Print the right plan:

// Monthly cost
// What is included


// Output:
// Monthly cost: 250 NOK
// Includes: calls and data




let monthCost = 250;
console.log(`Monthy Cost: ${monthCost}`);

 if(monthCost <= 100){
    console.log("Call Only");
    
 }else if(monthCost <= 300 ){
    console.log("Call And Data");
    
 }else{
    console.log("Call And Data And Streaming");
    
 }

