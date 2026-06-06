
// 23. Weekly Sales

// A shop recorded daily sales: [1200, 980, 1450, 760, 1100, 890, 1300].

// Calculate the results:

// Total sales for the week
// Average daily sales

// Output:

// Total: 7680 
// Average: 1097 

let sales = [1200, 980, 1450, 760, 1100, 890, 1300]

let result = 0

for (let s of sales){
    result += s
    
}

let average = result / sales.length

console.log(`Total: ${result}`);

console.log(`Avarege: ${average}`);


