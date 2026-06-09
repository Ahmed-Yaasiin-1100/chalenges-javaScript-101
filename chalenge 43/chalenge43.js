
// 43. Score Board

// javascript
// Copy
// let students = [
//   { name: "Ahmed", score: 85 },
//   { name: "Faadumo", score: 72 },
//   { name: "Yusuf", score: 91 },
//   { name: "Nimo", score: 55 }
// ];
// Return a new array of formatted strings. Do not use a for loop:

// Example Output:

// ["Ahmed: 85", "Faadumo: 72", "Yusuf: 91", "Nimo: 55"]

let students = [
  { name: "Ahmed", score: 85 },
  { name: "Faadumo", score: 72 },
  { name: "Yusuf", score: 91 },
  { name: "Nimo", score: 55 }
];


const newArray = students.map((s)=>{
    return s.name + " "  + s.score
})

console.log(newArray);
