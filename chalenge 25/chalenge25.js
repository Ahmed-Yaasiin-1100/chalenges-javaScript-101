
// 25. Price Filter

// A shop has these prices: [299, 149, 499, 89, 349, 199]. Everything above 200 NOK gets a 20% discount.

// Loop through and print:

// Original price and discounted price for qualifying items
// Original price for items that do not qualify


// 299 -> 239 NOK
// 149 -> no discount
// 499 -> 399 NOK
// 89 -> no discount
// 349 -> 279 NOK
// 199 -> no discount
let prices = [299, 149, 499, 89, 349, 199]


for (let p of prices){
    if(p>200){
        let discount = p-(p*0.2)
        console.log(`Original Price ${p} Discount Price: ${discount}`);
        
    }else{
        console.log(`Original Price: ${p}`);
        
    }
}

