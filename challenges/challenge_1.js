//? Challenge: "Event Maestro: Handle It All!" 

// Objective 

// Create a program using Node.js Event Emitter that: 
//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update). 
//? Tracks how many times each event is emitted. 
//? Logs a summary of all event occurrences when a special summary event is triggered. 


// Requirements 
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update). 
//? Emit these events multiple times with different arguments (e.g., username, item purchased). 
//? Track and store the count of each event type. 
//? Define a summary event that logs a detailed report of how many times each event was triggered.

// ************************************************************************************************************** //

const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')


const emitter = new EventEmitter()

const filePath = path.join(__dirname, "events_count.json")

let events_count = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
}

const writeFile = (events_count) => {
    try {
        fs.writeFileSync(filePath,
            `{"user-login": ${events_count['user-login']}, "user-logout": ${events_count['user-logout']}, "user-purchase": ${events_count['user-purchase']},"profile-update":  ${events_count['profile-update']}}`,
            "utf-8")
        // console.log("File is Created");

    } catch (error) {
        console.error(error)
    }
}

// writeFile(events_count)



const readFile = () => {
    try {
        const data = fs.readFileSync(filePath, "utf-8")
        // console.log(JSON.parse(data));
        events_count = JSON.parse(data)
    } catch (error) {
        console.error(error)
    }
}

readFile()




// create Listener
emitter.on("user-login", (username) => {
    events_count['user-login'] += 1; // update the call counts
    // writeFile(events_count)
    console.log(`${username} is login`);
})


emitter.on("user-purchase", (username, items) => {
    events_count["user-purchase"] += 1; // update the call counts
    // writeFile(events_count)
    console.log(`${username} is purchasing ${items}`);
})


emitter.on("profile-update", (username, email) => {
    events_count["profile-update"] += 1; // update the call counts
    // writeFile(events_count)
    console.log(`${username} is updated ${email}`);
})

emitter.on("user-logout", (username) => {
    events_count['user-logout'] += 1; // update the call counts
    // writeFile(events_count)
    console.log(`${username} is logout`);
})

// summary to create logs

emitter.on("summary", () => {
    console.log("Summary logs: ");
    writeFile(events_count)
    console.log(events_count);

})


const emitterCall = async () => {
    // call
    emitter.emit("user-login", "Bilal")

    emitter.emit("user-purchase", "Bilal", "MacBook")

    // emitter.emit("user-purchase", "Bilal", "Iphone")

    // emitter.emit("user-purchase", "Bilal", "Car")

    emitter.emit("profile-update", "Bilal", "bilal@gmail.com")

    emitter.emit("user-logout", "Bilal")


    // Summary Call 
    emitter.emit("summary")

}

emitterCall()