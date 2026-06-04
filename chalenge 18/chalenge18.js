
// 18. Grade Report

// Ahmed wants to know his letter grade. Score 90+ is A, 80-89 is B, 70-79 is C, 60-69 is D, below 60 is F.

// Write the function and test it:

// A function that takes a name and score and returns a full report
// Call it with three students: Ahmed 85, Faadumo 92, Yusuf 54

// Output:

// Ahmed: 85 - B
// Faadumo: 92 - A
// Yusuf: 54 - F


function students (name , score){
    
    if(score >=90){
        console.log(`${name}: ${score} - A `);
        
    }else if(score>=80){
         console.log(`${name}: ${score} - B `);

    }else if(score >= 70){
         console.log(`${name}: ${score} - C `);

    }else if(score >= 60){
         console.log(`${name}: ${score} - D `);

    }else{
         console.log(`${name}: ${score} - F `);
    }
}

students("Ahmed", 85)
students("Faadumo", 92)
students("Yusuf", 54)
