
// 21. Waiting List

// A clinic has a waiting list: ["Hodan", "Mahad", "Sahra", "Bile", "Nimo"]. Hodan is called in. A new patient "Yusuf" arrives and gets priority.

// Update the list:

// Remove the first person
// Add Yusuf to the front
// Print the updated list and its length


// Output:

let clinic = ["Hodan", "Mahad", "Sahra", "Bile", "Nimco"]

clinic.shift()
console.log(clinic);

clinic.unshift("Yusuf")
console.log(clinic);

console.log(`Length: ${clinic.length}`);
console.log(clinic);



