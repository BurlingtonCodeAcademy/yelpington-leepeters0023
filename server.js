const jsonServer = require('json-server'); 
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // this is just passig in a file from elsewhere, we're pretending it's another server / computer
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log('server is running')
});
