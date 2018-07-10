const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

exports.getDoctors = async (req, res) => {
  const {name} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/doctors?page=${page}&count=${PAGE_SIZE}`;
  if (name) {
    url += `&name=${name}`;
  }
  const request = await axios.get(url);
  let doctors = request.data.result.data ;
  if (!Array.isArray(doctors)) {
    doctors = [doctors];
  }

  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/doctors'
  };

  res.render('doctors/doctors', { doctors, pagerInfo });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = request.data.result;
  res.render('doctors/doctor', { doctor });
};
