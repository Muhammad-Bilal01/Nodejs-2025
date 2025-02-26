// Import http module
const http = require('http')

// create http moddule behind it works on event emitter
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>I am Bilal</h1>")
        res.end()
    } else if (req.url === "/source") {
        res.write("Here is source Page")
        res.end()
    }
    else if (req.url === "/contact") {
        res.write("Have a project contact me")
        res.end()
    }
})


// live listen
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is Running on the port of ", PORT);
})