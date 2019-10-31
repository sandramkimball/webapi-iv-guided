const server = require('./api/server.js');
const post = env.POST

server.listen(post, () => {
  console.log(`\n*** I\'m ${post} and I\'ll be you\'re host today. ***\n`);
});
