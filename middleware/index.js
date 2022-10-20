var express = require("express");
var auth = require("./auth");
var router = express.Router();
var verifikasi = require("./verifikasi");
// var verifikasiUser = require('./verifikasi');

var dataRukoController = require("../controller/controller");

//daftarkan menu registrasi
router.post("/api/v1/register", auth.registrasi);
router.post("/api/v1/login", auth.login);

//alamat yang perlu otorisasi

// router.get("/api/v1/rahasia", verifikasi(), auth.halamanrahasia);
router.get("/api/v1/dataruko", verifikasi(), dataRukoController.getAllDataRuko);
// router.post("/api/v1/tambah", verifikasi(), dataRukoController.post);
// router.get(
//   "/api/v1/harga/:harga",
//   verifikasi(),
//   dataRukoController.filterharga
// );

module.exports = router;
