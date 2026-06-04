
// 19. Discount Calculator

// A shop gives different discounts based on membership. Gold: 20%, Silver: 10%, Basic: 5%.

// Write the function and test it:

// A function that takes a price and membership level and returns the final price
// Call it with price 300 for each level



function discountCalculator(price , membership){
    if(membership === "gold"){
        return price - (price * 0.2)
         
    }else if(membership === "silver"){
        return price - (price * 0.1)
    }else{
        return price - (price *0.05)
    }
}

console.log(`Gold: ${discountCalculator(300,"gold")}`)
console.log(`Silver: ${discountCalculator(300,"silver")}`);
console.log(`Basic: ${discountCalculator(300, "basic")}`);


