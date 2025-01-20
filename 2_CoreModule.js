// Core modules are built-in modules in Node.js that provide fundamental functionality
// These modules are available without needing to install them separately. They are categorized into two types:
// 1. Global modules (available globally)
// 2. Non-global modules (need to be explicitly imported using require)
 
// Import the built-in 'fs' (File System) module to work with the file system
const fs = require('fs');

// Log the current directory of the script using the __dirname variable
console.log("-->>", __dirname);

// Log the full file path of the currently executing script using the __filename variable
console.log("-->>", __filename);

// Create a new file called 'hello.txt' with the content "share my repo"
// If the file already exists, this will overwrite it
fs.writeFileSync("hello.txt", "share my repo");
