
// 10. Loan Eligibility

// A bank approves loans based on three conditions: age at least 21, monthly income above 15000 NOK, and no existing debt. Applicant: age 24, income 18000 NOK, no debt.

// Check all three conditions:

// Print approved or which condition failed

// Output:
// Loan approved



let age = 24;
let income = 18000
let debt = false

if(age < 21){
    console.log("Reject age at Least 24");
}else if(income < 15000){
    console.log("Reject income at least 18000");
}else if(debt){
    console.log("No need Debt");
}else{
    console.log("Loan Approved");
}
    



