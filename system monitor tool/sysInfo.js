//sample output
// Example output
// System Monitor
// -------------------
// OS: Windows_NT
// Platform: win32
// CPU cores: 8

// Total Memory: 16 GB
// Free Memory: 6.2 GB
// Used Memory: 9.8 GB

// Uptime: 3 hours 25 minutes

console.log("System monitor\n---------\n");

const os = require("os");
console.log("OS : " ,os.machine());
console.log("\nPlatform :" , os.type());
console.log("\nCPU CORES: " , os.cpus().length);

let totalMem = os.totalmem() / (1024 * 1024 * 1024);
let freeMem = os.freemem() / (1024 * 1024 * 1024);
let usedMem = totalMem - freeMem;

console.log("\nTotal Memory:", totalMem.toFixed(2), "GB");
console.log("Free Memory:", freeMem.toFixed(2), "GB");
console.log("Used Memory:", usedMem.toFixed(2), "GB");

// uptime (in hours)
let uptimeHours = os.uptime() / 3600;
console.log("\nUptime:", uptimeHours.toFixed(2), "hours");
