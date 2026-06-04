
// 15. Course Progress

// Abdullahi has completed 7 out of 18 lessons in the JavaScript course. Calculate his progress and print whether he is less than halfway, exactly halfway, or more than halfway.

// Check his progress:

// Percentage completed
// Progress status

// Output:

// Progress: 38%
// Status: less than halfway

let courseLesson = 18;

let completed = 7
let status;
let per = completed / courseLesson * 100

if(per >= 50){
    status = "More Than Away "
}else if (per === 50){
    status = "Half away"
}else{
    status = "Less Than Away"
}

console.log(`Proggress: ${Math.floor(per)}`);

console.log(`Status: ${status}`);





