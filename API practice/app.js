// importing the express library
const express = require(express);
const app = express()
// defining the port for the server to 'listen' to 
const port = 3001;
// using the app.listen method so the server knows where the port is 
app.listen(port, () => {
  console.log(`The serve is running on port ${port}`);
})

