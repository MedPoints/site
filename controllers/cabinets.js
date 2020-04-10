const config = require('config');
const axios = require('axios');
const moment = require('moment');
const qs = require('qs');
const API_URL = config.get('API_URL');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');

const Localization = require('../helpers/localization').Localization;

exports.getDoctor = async (req, res) => {
  const id = req.params.id || "5bf1b6928436ac253aec0e8b"; // Ignacia Calhoun
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