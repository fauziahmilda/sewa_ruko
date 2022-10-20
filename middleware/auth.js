var connection = require("../koneksi");
var mysql = require("mysql");
var md5 = require("md5");
var response = require("../res");
var jwt = require("jsonwebtoken");
var config = require("../config/secret");
var ip = require("ip");

//controller untuk register

// exports.register = function (req, res) {
//         var username = req.body.username;
//         var email= req.body.email;
//         var password= md5(req.body.password);
//         var role= req.body.role;

//     connection.query('INSERT INTO user (username,email,password,role) VALUES(?,?,?)',
//         [username, email, password,role],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 response.ok("Berhasil Menambahkan Data!", res)
//             }
//         });
// };

exports.registrasi = function (req, res) {
  var post = {
    nama_c: req.body.nama_c,
    email_c: req.body.email_c,
    pw_c: md5(req.body.pw_c),
    alamat_c: req.body.alamat_c,
    nohp_c: req.body.nohp_c,
  };

  var query = "SELECT email_c FROM ?? WHERE ??=?";
  var table = ["customer", "email_c", post.email_c];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = "INSERT INTO ?? SET ?";
        var table = ["customer"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Berhasil menambahkan data customer baru", res);
          }
        });
      } else {
        response.ok("Email sudah terdaftar!", res);
      }
    }
  });
};

// controller untuk login
exports.login = function (req, res) {
  var post = {
    pw_c: req.body.pw_c,
    email_c: req.body.email_c,
  };

  console.log(post);
  // var query = `SELECT * FROM user WHERE "email"=${post.email} AND "password"=${post.password}`;
  var query = `SELECT * FROM ?? WHERE ??=? AND ??=?`;
  var table = ["customer", "pw_c", md5(post.pw_c), "email_c", post.email_c];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      console.log(rows[0]);
      if (rows.length == 1) {
        var token = jwt.sign(
          {
            ...rows[0],
          },
          config.secret,
          {
            //data expire
            expiresIn: 1440,
          }
        );

        id_user = rows[0].id_c;

        var data = {
          id_user: id_user,
          access_token: token,
          ip_address: ip.address(),
        };

        var query = "INSERT INTO ?? SET ?";
        var table = ["akses_token"];

        query = mysql.format(query, table);
        connection.query(query, data, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            res.json({
              success: true,
              message: "Token JWT tergenerate!",
              token: token,
              currUser: data.id_user,
            });
          }
        });
      } else {
        res.json({ Error: true, Message: "Email atau password salah!" });
      }
    }
  });
};

// exports.halamanrahasia = function (req, res) {
//   console.log(req.auth.role);
//   const role = req.auth.role;
//   if (role === 2) {
//     response.ok("masukk", res);
//   } else {
//     res.json({ Error: true, Message: "Role salah!" });
//   }
// };
