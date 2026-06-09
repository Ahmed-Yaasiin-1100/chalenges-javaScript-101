
// 40. Notify User

// Write a function called sendNotification that takes a username and a callback. Call it with "Ahmed" and a function that prints a welcome notification.

// Example Output:

// Notification sent to Ahmed
// Welcome to Bashi Academy, Ahmed!

const sendNotification = (username , callback)=>{
    console.log("Natification sent to " + username);
    callback(username)
}


const prints = (username)=>{
    console.log(`welcome to Bashi Acedemy , ` + username);
    
}

sendNotification("Ahmed", prints)