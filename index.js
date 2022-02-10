require('dotenv').config();
const server = require('./api/server.js');


const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`\n*** listening on ${port} *** \n`);
});

console.log(process.env.HOME);
