
// 29. Transaction History

// Five customers sent money. Ahmed $200, Faadumo $450, Yusuf $120, Nimo $890, Bile $340.

// Loop through and calculate:

// Print each transaction
// Total amount sent
// Largest transaction


// Output:

// Ahmed: $200
// Faadumo: $450
// Yusuf: $120
// Nimo: $890
// Bile: $340
// Total: $2000
// Largest: Nimo - $890




let transaction = [
    {
        name : "Ahmed",
        send : 200
    },
    {
        name : "Faadumo",
        send : 450
    },
    {
        name : "Yusuf",
        send : 120
    },
    {
        name : "Nimco",
        send : 890
    },
    {
        name : "Bile",
        send : 349
    },
]

let amount = 0;
let largestTrans=0;
for (let t of transaction){

    console.log(`${t.name} : send: ${t.send}`);

    amount+= t.send

    if(t.send > largestTrans){
        largestTrans = t.send
    }

    
}


console.log(`Total Amount: ${amount}`);

console.log(`Largest Transaction: ${largestTrans}`);





