const config = require('config');
const axios = require('axios');
const qs = require('qs');
const API_URL = config.get('API_URL');

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