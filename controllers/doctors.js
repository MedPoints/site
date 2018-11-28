const config = require('config');
const axios = require('axios');
const qs = require('qs');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { queryPersistant } = require('./../helpers/query-persistant');
const { prepareDoctorData } = require('./../helpers/doctors');
 
const PAGE_TITLE = 'Doctors';

exports.getDoctors = async (req, res) => {
  const parameters = JSON.parse(JSON.stringify(req.query));
  if (parameters.filter && parameters.filter.city === 'home') {
    const {
        location,
    } = req.cookies;
    if (location) {
      const locationObject = JSON.parse(location);
      parameters.filter.city = locationObject.city;
    }
  }


  const url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/doctors`);
  const request = await axios.get(url);
  let doctors = request.data.result.data.map(doctor => prepareDoctorData(doctor, {
    search: req.query.name
  }));
  const hospitals = doctors.map(doctor => doctor.hospital);
  
  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = doctors.length; i < length; i++) {
    const doctor = doctors[i];
    if (doctor.coordinations && doctor.coordinations.length) {
      count++;
      avgCoordinates.lat += doctor.coordinations[0].lat;
      avgCoordinates.lng += doctor.coordinations[0].lon;
    }
  }
  if (count > 0) {
    avgCoordinates.lat = avgCoordinates.lat / count;
    avgCoordinates.lng = avgCoordinates.lng / count;  
  }

  const {
    pages,
    total
  } = request.data.result.meta;
  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    pages,
    total,
  );
  const pagerInfo = {
    pager,
    baseUrl: '/doctors',
    parameters: req.query
  };


  res.render('doctors/doctors', { 
    doctors, 
    hospitals, 
    avgCoordinates, 
    pagerInfo, 
    PAGE_TITLE, 
    title: `MedPoints™ Doctors`,
    filter: req.query.filter,
    req,
  });
};

exports.getDoctor = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/doctors?id=${id}`);
  const doctor = prepareDoctorData(request.data.result);
  const coordinates = doctor.coordinations[0];
  res.render('doctors/doctor', { doctor, coordinates, PAGE_TITLE, title: `MedPoints™ - Doctors - ${doctor.name}`,req, });
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