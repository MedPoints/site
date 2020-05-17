const config = require('config');
const axios = require('axios');
const moment = require('moment');
const mysql = require("mysql2/promise");
const qs = require('qs');
const API_URL = config.get('API_URL');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');

const Localization = require('../helpers/localization').Localization;

exports.getDoctor = async (req, res) => {
  const id = req.query.id || "5bf1b6928436ac253aec0e8b"; // Ignacia Calhoun
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);

  const doctor = {
    name: request.data.result.name,
    hospital: request.data.result.hospital,
  };
  res.send(doctor);
};

exports.getDrugs = async (req, res) => {
  const { count } = req.query;
  let url = count ? `${API_URL}/api/drugs?count=${count}` : `${API_URL}/api/drugs`;
  const request = await axios.get(url);
  res.send(request.data.result);
};

exports.getBlocks = async (req, res) => {
  const response = await axios.get(`${BLOCKCHAIN_API_URL}/api/blockchain/blocks`);
  const blocks = response.data;
  const ret = [];

  for (const [i, block] of blocks.entries()) {
    ret.push({
      created: moment(new Date(block.Time)).fromNow(),
      height: i+1,
      trCount: block.Transactions.length,
    });
  }

  res.send(ret);
};

exports.getBlocksCount = async (req, res) => {
  const response = await axios.get(`${BLOCKCHAIN_API_URL}/api/blockchain/blocks`);
  res.send({
    count: response.data.length,
  });
};

exports.addGroup = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send("");
  }

  try {
    const response = await axios.post(`${API_URL}/api/groups`, {
      name: name,
      timestamp: Date.now(),
    });
    if (!response.data.result || !response.data.result._id) {
      return res.send("");
    }

    const groupId = response.data.result._id;

    let sql = 'UPDATE `medicine_category` SET `mainId` = ?, `removable` = 1 ORDER BY id DESC LIMIT 1';
    await db(sql, [groupId]);

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};

exports.editGroup = async (req, res) => {
  const { name, id } = req.body;

  if (!name || !id) {
    return res.send("");
  }

  try {

    const result = await db('SELECT * FROM `medicine_category` WHERE `id` = ?', [id]);
    if (!result[0].mainId) {
      return res.send("");
    }

    const response = await axios.put(`${API_URL}/api/groups`, {
      id: result[0].mainId,
      name: name,
    });

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.send("");
  }

  try {

    const result = await db('SELECT * FROM `medicine_category` WHERE `id` = ?', [id]);
    if (!result[0].mainId) {
      return res.send("");
    }

    const response = await axios.delete(`${API_URL}/api/groups`, {
      data: {
        id: result[0].mainId,
      },
    });

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};



exports.addDrug = async (req, res) => {
  const { name, category, categoryId, price_dollars, price_mpt, description } = req.body;

  if (!name || !categoryId) {
    return res.send("");
  }

  try {
    const response = await axios.post(`${API_URL}/api/drugs`, {
      name: name,
      short_descr: description,
      full_descr: description,
      price: {
        dollars: price_dollars,
        mpts: price_mpt,
      },
      group: {
        name: category,
        id: categoryId,
      },
      timestamp: Date.now(),
    });

    if (!response.data.result || !response.data.result._id) {
      return res.send("");
    }

    const drugId = response.data.result._id;

    let sql = 'UPDATE `medicine` SET `mainId` = ? ORDER BY id DESC LIMIT 1';
    await db(sql, [drugId]);

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};

exports.editDrug = async (req, res) => {
  const { name, id, category, categoryId, price_dollars, price_mpt, description } = req.body;

  if (!name || !id) {
    return res.send("");
  }

  try {

    const result = await db('SELECT * FROM `medicine` WHERE `id` = ?', [id]);
    if (!result[0].mainId) {
      return res.send("");
    }

    const response = await axios.put(`${API_URL}/api/drugs`, {
      id: result[0].mainId,
      name: name,
      short_descr: description,
      full_descr: description,
      price: {
        dollars: price_dollars,
        mpts: price_mpt,
      },
      group: {
        name: category,
        id: categoryId,
      },
    });

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};

exports.deleteDrug = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.send("");
  }

  try {

    const result = await db('SELECT * FROM `medicine` WHERE `id` = ?', [id]);
    if (!result[0].mainId) {
      return res.send("");
    }

    const response = await axios.delete(`${API_URL}/api/drugs`, {
      data: {
        id: result[0].mainId,
      },
    });

    res.send("");

  } catch (e) {
    if (e.response && e.response.data) {
      console.log(e.response.data);
    }
    res.send("");
  }
};









async function db(sql, data="") {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "cabinets",
      password: "FFi1$dvVcNmxp67sX3%f_11"
    });

    const [rows] = await connection.query(sql, data);
    await connection.end();
    return rows;
  } catch (e) {
    console.error(e.message);
  }
}