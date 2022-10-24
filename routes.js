"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  // app.route("/showAllCustomer").get(jsonku.showAllCustomer);
  app.route("/showCustomerbyID/:id_c").get(jsonku.showCustomerbyID);

  app.route("/editCustomer").put(jsonku.editCustomer);

  app.route("/deleteCustomerbyID").delete(jsonku.deleteCustomerbyID);
};
