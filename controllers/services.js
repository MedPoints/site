const axios = require('axios');
const API_URL = process.env.API_URL;

exports.getServices = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const services = [];
  res.render('services/services', { services });
};

exports.getService = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const service = {};
  res.render('services/service', { service });
}