const axios = require('axios');
const API_URL = process.env.API_URL;

exports.getPharmacies = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const pharmacies = [];
  res.render('pharmacies/pharmacies', { pharmacies });
};

exports.getPharmacy = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const pharmacy = {};
  res.render('pharmacies/pharmacy', { pharmacy });
}