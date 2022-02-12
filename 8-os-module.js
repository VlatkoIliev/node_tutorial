const os = require('os');

//info about curr user
const user = os.userInfo();
//onsole.log(user);

// method returns the system uptime in seconds

//console.log(`the system uptime is ${os.uptime()} seconds`);

const currOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currOs);
