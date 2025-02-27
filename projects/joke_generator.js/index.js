import https from "https"
import chalk from "chalk"


const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke"
    https.get(url, {
        headers: {
            "content-type": "application/json"
        }
    }, (response) => {
        let data = ""
        response.on("data", (chunks) => {
            data += chunks;
        })

        response.on("end", () => {
            let joke = JSON.parse(data)
            console.log(`Here is your Random ${joke.type} Joke`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
            console.log(`😂😂😂😂`);
        })

        response.on("error", (err) => {
            console.error(chalk.red(`Error Fetching Api: ${err.message}`));
        })
    })
}


getJoke()