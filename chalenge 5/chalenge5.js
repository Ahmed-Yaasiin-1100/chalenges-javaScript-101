
// 5. Flight Budget

// Nimo wants to fly to Mogadishu. The ticket costs $620. Airport tax is $45. She has $950 saved.

// Check if she can afford the trip:

// Total trip cost
// Whether she can afford it
// How much she has left or how much more she needs

// Output:

// Total cost: $665
// She can afford it
// Remaining: $285

let netMoney = 950
let ticket = 620;
let airpotTax = 45

let totalCost = ticket + airpotTax

let sevedMoney = netMoney - totalCost

console.log(`Total Cost: $${totalCost}`);
if(netMoney >= totalCost){
    console.log("You can go to mugadisho");
    
}else{
    console.log("not Going");
    
}

console.log(`Remaining: $${sevedMoney}`);




