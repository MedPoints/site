const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');

exports.getDoctors = async (req, res) => {
  const {name} = req.query;
  let url = `${API_URL}/api/doctors`;
  if (name) {
    url += `?name=${name}`;
  }
  const request = await axios.get(url);
  let doctors = request.data.result.data ;
  if (!Array.isArray(doctors)) {
    doctors = [doctors];
  }
  res.render('doctors/doctors', { doctors });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = request.data.result;
  res.render('doctors/doctor', { doctor });
};
