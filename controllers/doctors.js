const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { queryPersistant } = require('./../helpers/query-persistant');
const { prepareDoctorData } = require('./../helpers/doctors');
 
const PAGE_TITLE = 'Doctors';

exports.getDoctors = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/doctors`);  
  const request = await axios.get(url);
  let doctors = request.data.result.data.map(doctor => prepareDoctorData(doctor));

  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/doctors',
    parameters: req.query
  };


  res.render('doctors/doctors', { doctors, pagerInfo, PAGE_TITLE });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = prepareDoctorData(request.data.result);
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

exports.getServicesByDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors/${id}/services`);
  const services = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 200, services }));
};

exports.getHospitalsByDoctor = async (req, res) => {
  const id = req.params.id;
  const service = req.query.service;
  const request = await axios.get(`${API_URL}/api/doctors/${id}/hospitals?service=${service}`);
  const clinics = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 200, clinics }));
};