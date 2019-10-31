const server = require('./api/server.js');


//port coming from environment, it'll be set by Heroku
const port = process.env.PORT || 4000;
console.log('Current Port: ', port);
server.listen(port, () => {
  console.log(`\n*** I\'m ${port} and I\'ll be you\'re host today. ***\n`);
});
