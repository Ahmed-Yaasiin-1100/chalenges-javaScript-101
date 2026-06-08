
// 28. Class Results

// Five students submitted their scores. Ahmed 85, Faadumo 62, Yusuf 91, Nimo 47, Bile 78. Passing score is 60.

// Loop through and report:

// Each student with pass or fail
// Total number of students who passed

// Output:

// Ahmed: Pass
// Faadumo: Pass
// Yusuf: Pass
// Nimo: Fail
// Bile: Pass
// Passed: 4

let students = [
    {
        name : "Ahmed",
        score : 85
    },
     {
        name : "Faadumo",
        score : 62
    },
     {
        name : "Yusuf",
        score : 91
    },
     {
        name : "Nimco",
        score : 47
    },
     {
        name : "Bile",
        score : 78
    }
]

let passedSt = []

for (let s of students){
    if(s.score >= 60){
        console.log(`${s.name} Passed`);
        passedSt++
        
    }else{
        console.log(`${s.name} Fail`);
        
    }
    
}

console.log(`Passed: ${passedSt}`);



