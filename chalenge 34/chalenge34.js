// 34. Student Card

// A student profile arrives from the database.

// let student = { name: "Yusuf", age: 21, course: "JavaScript", paid: true };

// Print a formatted student card in one line without using dot notation:

// Example Output:

// Yusuf, 21 — JavaScript — Paid: true


let student = { name: "Yusuf", age: 21, course: "JavaScript", paid: true };


const {name , age , course , paid} = student

console.log(name, age,"-", course ,"-", "Paid:"+paid);
