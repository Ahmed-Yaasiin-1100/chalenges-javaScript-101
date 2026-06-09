
// A user has lived in multiple cities.

// let cities = ["Mogadishu", "Nairobi", "Oslo", "London"];

// Print the first city and all remaining cities without using index notation:

// Example Output:



let cities = ["Mogadishu", "Nairobi", "Oslo", "London"];

const [first , ...remainingCity] = cities

console.log(`First City: ${first}`);


console.log(`Remaining City: ${remainingCity}`);

