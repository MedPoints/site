const axios = require('axios');
const API_URL = process.env.API_URL;

exports.getDoctors = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/doctors`);
  const doctors = request.data.result;
  res.render('doctors/doctors', { doctors });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = request.data.result;
  res.render('doctors/doctor', { doctor });
}