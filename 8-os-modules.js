// OS nodejs module

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in sec
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS);

console.log(os.homedir());