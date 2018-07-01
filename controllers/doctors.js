const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');

exports.getDoctors = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/doctors`);
  const doctors = request.data.result;
  res.render('doctors/doctors', { doctors });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = request.data.result;
  const rate = doctor.ratings.reduce((result, rate) => {
    const {knowledge, skills, attention, priceQuality} = rate.commonRate;
    result.knowledge += knowledge;
    result.skills += skills;
    result.attention += attention;
    result.priceQuality += priceQuality;
    return result;
  }, {knowledge: 0, skills: 0, attention: 0, priceQuality: 0});
  if (doctor.ratings.length !== 0) {
	  rate.knowledge /= doctor.ratings.length;
	  rate.skills /= doctor.ratings.length;
	  rate.attention /= doctor.ratings.length;
	  rate.priceQuality /= doctor.ratings.length;
  }
  doctor.opinion = rate;
  res.render('doctors/doctor', { doctor });
};
