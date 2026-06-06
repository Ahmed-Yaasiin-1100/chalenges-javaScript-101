
// 24. Passing Students

// Ten students took an exam: [88, 45, 72, 91, 55, 68, 79, 43, 95, 61]. Passing score is 60.

// Loop through and count:

// How many passed
// How many failed

let students = [88, 45, 72, 91, 55, 68, 79, 43, 95, 61]

let passedStudents = students.filter((s)=>{
    return s>=60
})

console.log(passedStudents);
console.log(`Passed Students: ${passedStudents.length}`);

let failedStudents = students.filter((s)=>{
    return s<60
})

console.log(failedStudents);
console.log(`Failed Students: ${failedStudents.length}`);



