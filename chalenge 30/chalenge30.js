
// 30. Leaderboard

// Five players finished a game. Mohamed 1200, Sagal 950, Ali 1500, Nimo 880, Hassan 1340.

// Build the leaderboard:

// Print all players with their points
// Find the winner
// Calculate the average score
// Print how many players are above average


// Output:

// Mohamed: 1200
// Sagal: 950
// Ali: 1500
// Nimo: 880
// Hassan: 1340
// Winner: Ali with 1500 points
// Average: 1174 points
// Above average: 3 players



let players = [
    {
        name : "Mohamed",
        score : 1200
    },
     {
        name : "Sagal",
        score : 950
    },
     {
        name : "Ali",
        score : 1500
    },
     {
        name : "Nimco",
        score : 880
    },
     {
        name : "Hassan",
        score : 1340
    }
]

let winner = 0;
let name = "";
let total = 0;

for (let p of players){
    console.log(`Name: ${p.name} Score: ${p.score}`);
    total += p.score
    
    if(p.score > winner){
        winner = p.score
        name = p.name
        
    }

    
}

console.log(`Winner Name is: ${name} Scores: ${winner}`);

let average = total / players.length

console.log(`Total Avarege: ${average}`);

let totalAvarege=[]
for (let p of players){
    if(p.score > average){
        totalAvarege.push(p.score)
        
    }
}

console.log(`Above Avarege Players: ${totalAvarege.length}`);


