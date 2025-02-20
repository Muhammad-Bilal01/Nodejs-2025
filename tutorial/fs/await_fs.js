// Using async await

const fs = require('fs')
const path = require('path')

const fileName = "fs-async-test.txt"
const filePath = path.join(__dirname, fileName)
const file = __dirname


// READ Folder
// const readFolder = async () => {
//     try {
//         const res = await fs.promises.readdir(file)
//         console.log(res);

//     } catch (err) {
//         console.error(err)
//     }
// }

// readFolder();


// Write
// const writeFile = async () => {
//     try {
//         const data = await fs.promises.writeFile(filePath, "This is the initial file", "utf-8")
//         console.log("File is created");

//     } catch (err) {
//         console.error(err)
//     }
// }

// writeFile();



// // Append FILE
// const appendFile = async () => {
//     try {
//         const data = await fs.promises.appendFile(filePath, "\nupdate file", "utf-8")
//         console.log("file is updated");

//     } catch (err) {
//         console.error(err)
//     }
// }

// appendFile();

// READ FILE
// const readFile = async () => {
//     try {
//         const data = await fs.promises.readFile(filePath, "utf-8")
//         console.log(data);

//     } catch (err) {
//         console.error(err)
//     }
// }

// readFile();

// Delete
const deleteFile = async () => {
    try {
        const data = await fs.promises.unlink(filePath)
        console.log("File Deleted");

    } catch (err) {
        console.error(err)
    }
}

deleteFile();