const employeeRoutes = require("./employeeRoutes");

module.exports = (app) => {
  app.use("/", employeeRoutes);
};
