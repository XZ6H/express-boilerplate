const express = require('express');
const dotenv = require('dotenv');

const apiRoutes = require('./src/routes/index');
const apiMiddleware = require('./src/middleware/apiAuth');
const errorHandler = require('./src/middleware/errorHandler');

dotenv.config();
// require('./src/config/sequelize');

const { SERVER_PORT = 8989 } = process.env;

(async () => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  require('./src/routes/index')(server);
  server.use(errorHandler);

  await server.listen(SERVER_PORT, () => {
    console.log('Server application started at port:' + SERVER_PORT);
  });
})();