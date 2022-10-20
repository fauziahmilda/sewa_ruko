const axios = require("axios");

//-----------------------------------------------------------------------------
//Data Ruko
//----------------------------------------------------------------------------

exports.getAllDataRuko = async (req, res) => {
  try {
    console.log(req.auth.role);
    if (req.auth.role !== 2) {
      res.status(500).json({
        error: true,
        massage: "Eror bos",
      });
    }

    const data = await axios.get("http://localhost:3001/dataruko/");
    console.log(data);
    if (!data) {
      res.status(500).json({
        error: true,
        massage: "Eror bos",
      });
    }
    res.status(500).json({
      error: false,
      data: data.data,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      massage: error.message,
    });
  }
};

exports.post = async (req, res) => {
  try {
    // //const body = {
    //     id : ,
    //     lapak: .
    // }
    const data = await axios.post("http://localhost:3001/dataruko/", req.body);
    console.log(data);
    if (!data) {
      res.status(500).json({
        error: true,
        massage: "Eror bos",
      });
    }
    res.status(500).json({
      error: false,
      data: data.data,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      massage: error.message,
    });
  }
};

exports.filterharga = async (req, res) => {
  try {
    if (req.auth.role !== 1) {
      res.status(500).json({
        error: true,
        massage: "Eror bos",
      });
    }
    // //const body = {
    //     id : ,
    //     lapak: .
    // }
    const data = await axios.get(
      "http://localhost:3001/dataruko/" + req.params.harga
    );
    console.log(data);
    if (!data) {
      res.status(500).json({
        error: true,
        massage: "Eror bos",
      });
    }
    res.status(500).json({
      error: false,
      data: data.data,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      massage: error.message,
    });
  }
};
