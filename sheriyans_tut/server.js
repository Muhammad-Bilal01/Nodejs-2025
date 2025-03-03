import express from "express"

const app = express();

// to render html fetching from the server
app.set("view engine", "ejs") // set view engine of ejs

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.send("This is about")
})

app.get("/profile", (req, res) => {
    res.send("Profile")
})


// listen app on port
const PORT = 3000;

app.listen(PORT, () => {
    console.log("The app is running on port:" + PORT);
})