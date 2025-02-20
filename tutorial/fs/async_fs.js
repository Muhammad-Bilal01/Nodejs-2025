const fs = require('fs')
const path = require('path')

// Asynchronous File System

const fileName = "aync-test-file.txt"
const filePath = path.join(__dirname, fileName)


// Create and write File
// fs.writeFile(filePath, "This is test file written using async fs", "utf-8", (err) => {
//     if (err) console.error(err);
//     else console.log("File has been saved");
// })


// Update File
// fs.appendFile(filePath, "\n This is the updated Data", "utf-8", (err) => {
//     console.log("File has been updated");
// })

// READ FILE
// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log(data);

//     }
// })

// Delete File
fs.unlink(filePath, (err) => {
    console.log("File is delete");
})
