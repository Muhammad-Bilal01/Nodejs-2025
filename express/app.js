import express from "express"
import path from "path"

const app = express()


// console.log(__dirname); // not define in ESmodule

// get fileName and dirname in EsModule
// console.log(import.meta.dirname);
// console.log(import.meta.filename);

const dirname = import.meta.dirname
const staticPath = path.join(dirname, "public")

// middlewares
app.use("/public", express.static(staticPath))

app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")

    // to serve file
    // res.sendFile(homePagePath) // not show css

    // to serve html CSS and JS use middlewares with express.static
    const homePagePath = path.join(staticPath, "index.html")
    res.sendFile(homePagePath)
})


// Route Parameters
// to get dynamic data from the user or client like id
app.get("/profile/:username/article/:slug", (req, res) => {
    // slug -> blog title or else which shows on url 
    console.log(req.params.username);

    const formatedSlug = req.params.slug.trim().replace(/-/g, " ")
    res.send(`The is ${req.params.username} and the article is ${formatedSlug}`)
})

// Query Parameter
// key value pair
// start with ? multiple query separeted by &
// use for searching and filteration and pagination
app.get("/product", (req, res) => {

    // to get query
    console.log(req.query);

    res.send(`<h1>Search Product ${req.query.search} on page ${req.query.page} with the limit of ${req.query.limit || "0"}</h1>`)
})



app.get("/about", (req, res) => {
    res.send("<h1>Hello About</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Hello Contact</h1>")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})