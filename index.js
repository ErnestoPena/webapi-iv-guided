const server = require('./api/server.js');


const port = process.env.PORT ? process.env.PORT:9000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:9000 *${port}**\n`);
});
