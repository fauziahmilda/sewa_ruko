"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuaCustomer);

  app.route("/tampil/:id").get(jsonku.tampilberdasarkanid);
  app.route("/tambah").post(jsonku.tambahCustomer);

  app.route("/ubah").put(jsonku.ubahCustomer);

  app.route("/hapus").delete(jsonku.hapusCustomer);

  // app.route("/tampilmatakuliah").get(jsonku.tampilgroupmatakuliah);
};
