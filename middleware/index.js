var express = require("express");
var auth = require("./auth");
var router = express.Router();
var verifikasi = require("./verifikasi");
var controller = require("../controller");
// var verifikasiUser = require('./verifikasi');

var dataRukoController = require("../data_external/controller");

/**
 * ! END-POINT LOGIN AND REGISTRATION
 */
router.post("/api/v1/register", auth.registrasi);
router.post("/api/v1/login", auth.login);

/**
 * ! END-POINT PROFILE
 */
router.get(
  "/api/v1/showCustomerbyID",
  verifikasi(),
  controller.showCustomerbyID
);
router.put("/api/v1/editCustomer", verifikasi(), controller.editCustomer);
router.get(
  "/api/v1/dataruko/beranda",
  verifikasi(),
  dataRukoController.tampilkanUntukUser
);

/**
 * ! END-POINT DATA RUKO
 */
router.get(
  "/api/v1/dataruko/beranda",
  verifikasi(),
  dataRukoController.tampilkanUntukUser
);
router.get(
  "/api/v1/dataruko/cari",
  verifikasi(),
  dataRukoController.cariBerdasarkanNamaHarga
);
router.get(
  "/api/v1/dataruko/detail/:id_ruko",
  verifikasi(),
  dataRukoController.tampilkanDetail
);
router.get(
  "/api/v1/dataruko/filterharga",
  verifikasi(),
  dataRukoController.filterHarga
);

/**
 * ! END-POINT DATA ORDER
 */
router.get(
  "/api/v1/order/pelanggan",
  verifikasi(),
  dataRukoController.tampilkanPelanggan
);
router.get(
  "/api/v1/order/rukoorder",
  verifikasi(),
  dataRukoController.tampilkanRukoOrder
);
router.post(
  "/api/v1/order/tambahcst",
  verifikasi(),
  dataRukoController.tambahDataPelanggan
);
router.post(
  "/api/v1/order/transaksi",
  verifikasi(),
  dataRukoController.mengorder
);
router.get(
  "/api/v1/order/tampil/:kodeorder",
  verifikasi(),
  dataRukoController.tampilkanDetailTransaksi
);

// router.get("/api/v1/dataruko", verifikasi(), dataRukoController.getAllDataRuko);
// router.post("/api/v1/tambah", verifikasi(), dataRukoController.post);
// router.get(
//   "/api/v1/harga/:harga",
//   verifikasi(),
//   dataRukoController.filterharga
// );

module.exports = router;
