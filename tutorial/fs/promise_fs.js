const fs = require('fs')
const path = require('path')

const fileName = "fs-promise-test.txt"
const filePath = path.join(__dirname, fileName)
const file = __dirname


// Directory ki list laa di
// fs.promises.readdir(file)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));



// Write
// fs.promises.writeFile(filePath, "This is file write using promise", "utf-8").then(() => {
//     console.log("File Is created");

// }).catch((err) => {
//     console.log(err);
// })

// Append file
// fs.promises.appendFile(filePath, "\ndata updated", "utf-8").then(() => {
//     console.log("data is updated");

// }).catch((err) => {
//     console.log(err);
// })


// REad file
// fs.promises.readFile(filePath, "utf-8").then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// })

// Delete

fs.promises.unlink(filePath).then(() => {
    console.log("File Deleted");
}).catch((err) => console.error(err))