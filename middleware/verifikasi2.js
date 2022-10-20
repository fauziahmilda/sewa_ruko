const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi() {
  return function (req, rest, next) {
    var role = req.params.role;
    //cek authorizzation header
    var tokenWithBearer = req.headers.authorization;

    if (tokenWithBearer) {
      var token = tokenWithBearer.split(" ")[1];

      //verifikasi
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token tidak terdaftar!" });
        }
        req.auth = decoded;
        next();
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia!" });
    }
  };
}

// function verifikasiUser(role){
//     return function(req, rest, next){
//         //cek authorizzation header
//         var tokenWithBearer = req.headers.authorization;

//         if(tokenWithBearer) {
//             var token = tokenWithBearer.split(' ')[1];

//             //verifikasi
//             jwt.verify(token, config.secret, function(err, decoded){
//                 if(err){
//                     return rest.status(401).send({auth:false, message:'Token tidak terdaftar!'});
//                 }else {
//                     if(role == 2){
//                         rest.status(201).send({message: role})
//                         req.auth = decoded;

//                         next();
//                     }
//                     else {
//                         return rest.status(401).send({auth:false, message:role});
//                     }
//                 }
//             });
//         }else {
//             return rest.status(401).send({auth:false, message:'Token tidak tersedia!'});
//         }
//     }
// }

// module.exports = verifikasiUser
module.exports = verifikasi;
