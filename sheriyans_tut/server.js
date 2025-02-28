import http from "http"

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("Hello")
    }
    else if (req.url === "/about") {
        res.end("This is about")

    }

})

// run on port 3000
server.listen(3000, () => {
    console.log("The app is running on port: 3000");

})