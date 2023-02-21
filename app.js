const express = require("express");
require("express-async-errors");

const logger = require("pino")();
const appMiddleware = require("./middlewares/app.middlewares");

const app = express();

appMiddleware(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  logger.info(`listening on port ${PORT}`);
});
