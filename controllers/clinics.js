const axios = require('axios');
const API_URL = process.env.API_URL;

exports.getClinics = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const clinics = [];
  res.render('clinics/clinics', { clinics });
};

exports.getClinic = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const clinic = {};
  res.render('clinics/clinic', { clinic });
}