const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('co_hospitals.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);