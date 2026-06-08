
// 27. Product Stock

// A shop has a laptop in stock. Name: "Laptop", price: 8999 NOK, stock: 5. A customer buys 2.

// Update and check the stock:

// Update the stock after the purchase
// Check if stock is still available
// Print the result

//  Output:

//  Remaining stock: 3
// Status: In stock


let stock ={
    name : "Laptop",
    price : 8999,
    item : 5
}

stock.item -= 2

console.log(`Remaing Stock: ${stock.item}`);

if(stock.item > 0){
    console.log("Status: Available");
    
}else{
    console.log("Not Availble");
    
}
