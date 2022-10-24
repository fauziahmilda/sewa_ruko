"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("REST API success", res);
};

//menampilkan semua data customer
exports.tampilsemuaCustomer = function (req, res) {
  connection.query("SELECT * FROM customer", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan semua data customer berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
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

//menambahkan data customer
exports.tambahCustomer = function (req, res) {
  var nama_c = req.body.nama_c;
  var email_c = req.body.email_c;
  var pw_c = req.body.pw_c;
  var alamat_c = req.body.alamat_c;
  var nohp_c = req.body.nohp_c;

  connection.query(
    "INSERT INTO customer (nama_c,email_c,pw_c,alamat_c,nohp_c) VALUES(?,?,?,?,?)",
    [nama_c, email_c, pw_c, alamat_c, nohp_c],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

//mengubah data berdasarkan id
exports.ubahCustomer = function (req, res) {
  var id_c = req.body.id_c;
  var nama_c = req.body.nama_c;
  var email_c = req.body.email_c;
  var pw_c = req.body.pw_c;
  var alamat_c = req.body.alamat_c;
  var nohp_c = req.body.nohp_c;

  connection.query(
    "UPDATE customer SET nama_c=?, email_c=?, pw_c=?, alamat_c=? WHERE id_c=?",
    [nama_c, email_c, pw_c, alamat_c, nohp_c, id_c],
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
exports.hapusCustomer = function (req, res) {
  var id = req.body.id_c;
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

//menampilkan matakuliah group
// exports.tampilgroupmatakuliah = function (req, res) {
//   connection.query(
//     "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa",
//     function (error, rows, fields) {
//       if (error) {
//         console.log(error);
//       } else {
//         response.oknested(rows, res);
//       }
//     }
//   );
// };
