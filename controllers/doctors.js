const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

const PAGE_TITLE = 'Doctors';

exports.getDoctors = async (req, res) => {
  const {name, department} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/doctors?page=${page}&count=${PAGE_SIZE}`;
  if (name) {
    url += `&name=${name}`;
  }
  
  if (department) {
    url += `&specialization=${department}`;
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
    baseUrl: '/doctors',
    searchQuery: name,
    searchParameterName: 'name',
    specializationQuery: department,
    specializationParameterName: 'department'
  };

  res.render('doctors/doctors', { doctors, pagerInfo, PAGE_TITLE });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = request.data.result;
  res.render('doctors/doctor', { doctor });
};

exports.getSpecializations = async (req, res) => {
  let url = `${API_URL}/api/specializations`;
  const request = await axios.get(url);
  return request.data.result.data;
};

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/doctors/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};