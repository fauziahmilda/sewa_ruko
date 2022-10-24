"use strict";

var response = require("./res");
var connection = require("./koneksi");
const md5 = require("md5");

exports.index = function (req, res) {
  response.ok("REST API success", res);
};

//menampilkan semua data customer
// exports.showAllCustomer = function (req, res) {
//   connection.query("SELECT * FROM customer", function (error, rows, fileds) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok(rows, res);
//     }
//   });
// };

//menampilkan data customer berdasarkan id
exports.showCustomerbyID = function (req, res) {
  let id = req.auth.id_c;
  connection.query(
    "SELECT * FROM customer WHERE id_c = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//edit data berdasarkan id
exports.editCustomer = function (req, res) {
  let id = req.auth.id_c;
  let nama_c = req.body.nama_c;
  let email_c = req.body.email_c;
  let pw_c = md5(req.body.pw_c);
  let alamat_c = req.body.alamat_c;
  let nohp_c = req.body.nohp_c;

  connection.query(
    "UPDATE customer SET nama_c=?, email_c=?, pw_c=?, alamat_c=?, nohp_c=? WHERE id_c=?",
    // "INSERT INTO customer(nama_c, email_c, pw_c, alamat_c, nohp_c) VALUES($nama_c, $email_c, $pw_c, $alamat_c, $nohp_c) WHERE id_c=?",
    [nama_c, email_c, pw_c, alamat_c, nohp_c, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Ubah Data", res);
      }
    }
  );
};

//Menghapus data berdasarkan id
exports.deleteCustomerbyID = function (req, res) {
  let id = req.body.id_c;
  connection.query(
    "DELETE FROM customer WHERE id_c=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Hapus Data", res);
      }
    }
  );
};
