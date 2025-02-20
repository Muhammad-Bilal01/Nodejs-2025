const EventEmitter = require('events');
const { emit } = require('process');


const emitter = new EventEmitter()


// to listen

// emitter.on("greet", () => {
//     console.log("Hello");
// })

// call this

// emitter.emit("greet")


// ---------------------------------

// With argument to listen

// emitter.on("greet", (username, profs) => {
//     console.log("Hello", username, profs);
// })

// call this
// emitter.emit("greet", "Bilal", "Full Stack Developer")


// Pass in single Object

// With argument to listen

emitter.on("greet", (args) => {
    console.log("Hello", args.username, args.profs);
})

// call this
emitter.emit("greet", { username: "Bilal", profs: "Full Stack Developer" })


