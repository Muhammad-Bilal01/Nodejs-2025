import readline from "readline";
import fs from "fs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let fileName = "";
let fileContent = "";

rl.question("Enter The file Name: ", (question) => {
    fileName = question;
    rl.question("Enter The content you want to write in your file: ", (content) => {
        fileContent = content;
        fs.writeFile(fileName, fileContent, "utf-8", () => {
            console.log(`File ${fileName} successfully created`);
            rl.close()
        })
    })
})




