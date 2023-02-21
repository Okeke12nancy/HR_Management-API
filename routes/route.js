const hrmRouter = require("./hrm.route");

const basePath = "/api/v1/hrm/";

module.exports = (app) => {
  app.use(`${basePath}/employees`, hrmRouter);
};
