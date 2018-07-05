const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');


exports.getClinics = async (req, res) => {
  const {name} = req.query;
  let url = `${API_URL}/api/hospitals`;
  if (name) {
    url += `?name=${name}`;
  }
  const request = await axios.get(url);
  let hospitals = request.data.result;
  if (!Array.isArray(hospitals)) {
    hospitals = [hospitals];
  }
  res.render('clinics/clinics', { hospitals });
};

exports.getClinic = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/hospitals?id=${id}`);
  const hospital = request.data.result;
  res.render('clinics/clinic', { hospital });
};
