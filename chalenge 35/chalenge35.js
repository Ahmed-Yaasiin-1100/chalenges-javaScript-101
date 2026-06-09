
// The final scores are in

// Print first place, second place, and the rest without using index notation:


// Example Output:

// 1st: 95
// 2nd: 88
// Rest: [76, 61, 45]





let scores = [95, 88, 76, 61, 45];

const [first , second , third, four, fifth] = scores

console.log(`first: ${first}`);
console.log(`second: ${second}`);

let newArray = [third , four , fifth]

console.log(`rest: ${newArray}`);


