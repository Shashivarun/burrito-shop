// generateApiKey.js
const { v4: uuidv4 } = require('uuid');
const apiKey = uuidv4();
console.log(apiKey); // Print the generated API key