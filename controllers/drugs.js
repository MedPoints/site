const axios = require('axios');
const API_URL = process.env.API_URL;

exports.getDrugs = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const drugs = [];
  res.render('drugs/drugs', { drugs });
};

exports.getDrug = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const drug = {};
  res.render('drugs/drug', { drug });
}