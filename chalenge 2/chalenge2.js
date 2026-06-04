
// Salary

// Bile worked 80 hours this month. His rate is 175 NOK per hour. Tax is 22%.

// Calculate his earnings:

// Gross pay, tax, and net pay
// Each on its own line



// Output:

// Gross pay: 14000 NOK
// Tax: 3080 NOK
// Net pay: 10920 NOK




let hoursWork = 80
let perHourMoney = 175 
let tax = 0.22

let grossPay = hoursWork * perHourMoney
let totalTax = grossPay * tax

let netPay = grossPay - totalTax


console.log(`Gross Pay: ${grossPay}`);
console.log(`Tax: ${totalTax}`);
console.log(`Net Pay: ${netPay}`);





