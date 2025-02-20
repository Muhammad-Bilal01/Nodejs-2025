const fs = require('fs')
const path = require("path")

// File System in synchronous mode

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName)

// console.log(filePath);

// Write File

// const writeFile = fs.writeFileSync(
//     filePath,
//     "This is test file, updated",
//     "utf-8"
// );
// console.log(writeFile); // undefined but the file is created


// READ FILE

// const readFile = fs.readFileSync(filePath, "utf-8")
// // console.log(readFile.toString()); // without the utf-8 encoding
// console.log(readFile);


// Update / Append
// If file is not created then it will create a file

// const append = fs.appendFileSync(filePath, "\n Appended File ", "utf-8")
// // console.log(append); undefined
// console.log(fs.readFileSync(filePath, "utf-8"));


// Delete File / Unlink

// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile); // no return anything but delete the file


// rename file

const updatedFileName = "udated-test.txt"
const updatedFilePath = path.join(__dirname, updatedFileName);


fs.renameSync(filePath, updatedFilePath)

