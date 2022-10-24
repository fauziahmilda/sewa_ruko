const axios = require("axios");

/**
 * * AKSES DATA RUKO BY CUSTOMER
 */

exports.tampilkanUntukUser = async (req, res) => {
  try {
    const data = await axios.get("http://localhost:3003/dataruko/tampil");
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

exports.cariBerdasarkanNamaHarga = async (req, res) => {
  //butuh keyword. keyword
  try {
    const search = req.query.keyword;
    const data = await axios.get(
      "http://localhost:3003/dataruko/cari?keyword=" + search
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

exports.tampilkanDetail = async (req, res) => {
  //butuh keyword. keyword
  try {
    const data = await axios.get(
      "http://localhost:3003/dataruko/tampil/" + req.params.id_ruko
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

exports.filterHarga = async (req, res) => {
  //butuh keyword. keyword
  try {
    const search = req.query.keyword;
    const data = await axios.get(
      "http://localhost:3003/dataruko/filterharga?keyword=" + search
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

/**
 * * AKSES DATA ORDER BY CUSTOMER
 */

exports.tampilkanPelanggan = async (req, res) => {
  try {
    const data = await axios.get("http://localhost:3004/tampil");
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

exports.tampilkanRukoOrder = async (req, res) => {
  try {
    const data = await axios.get("http://localhost:3004/tampilruko");
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

exports.tambahDataPelanggan = async (req, res) => {
  try {
    const data = await axios.post("http://localhost:3004/tambahcst", req.body);
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

exports.mengorder = async (req, res) => {
  try {
    const data = await axios.post("http://localhost:3004/transaksi", req.body);
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

exports.tampilkanDetailTransaksi = async (req, res) => {
  try {
    const data = await axios.get(
      "http://localhost:3004/tampil/" + req.params.kodeorder
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
