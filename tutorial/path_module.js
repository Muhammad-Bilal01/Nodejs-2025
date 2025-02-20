const path = require('path')


// console.log(path);


console.log(__filename); // complete path + filename
console.log(__dirname); // complete path of the given directory


const join = path.join("folder", "students", "filename.txt")

const parse = path.parse(join)
const resolve = path.resolve(join)
const basename = path.basename(join)
const extension = path.extname(join)
const dirname = path.dirname(join)


console.log({
    join,
    parse,
    resolve,
    extension,
    basename,
    dirname,
    "sep": path.sep,
});


