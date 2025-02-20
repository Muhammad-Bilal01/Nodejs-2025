const os = require('os')
// console.log(os);


const platform = os.platform()
const userInfo = os.userInfo()
const arch = os.arch()
const mem = os.freemem()
const totalmem = os.totalmem()

console.log({
    platform,
    userInfo,
    arch, mem, totalmem,
});
