const config = require('config');
const axios = require('axios');
const fs = require('fs');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { prepareClinicData } = require('./../helpers/clinics');


const PAGE_TITLE = 'Clinics';

exports.getClinics = async (req, res) => {
  const {name, location} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/hospitals?page=${page}`;
  if (name) {
    url += `&name=${name}`;
  } else if (location) {
    url += `&location=${location}`;
  }
  const request = await axios.get(url);
  let hospitals = request.data.result.data.map(clinic => prepareClinicData(clinic));
  if (!Array.isArray(hospitals)) {
    hospitals = [hospitals];
  }

  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/clinics',
    searchQuery: name,
    searchParameterName: 'name'
  };

  res.render('clinics/clinics', { hospitals, pagerInfo });
};

exports.getClinicsByLocation = async (req, res) => {
  const countries = JSON.parse(fs.readFileSync('./public/data/countries.json', 'utf8'));
  const request = await axios.get(`${API_URL}/api/hospitals/locations`);
  const locationsData = request.data.result;
  let clinicsGroups = [
    { countryName: 'World', countryCode: '', count: locationsData.worldsCount },
  ];
  for (let i = 0, length = locationsData.locations.length; i < length; i++) {
    const location = locationsData.locations[i];
    if (location.name) {
      const country = countries.find((country) => country.value === location.name);
      clinicsGroups.push({countryName: country.label, countryCode: location.name, count: location.count});
    }
  }

  return clinicsGroups;
};

exports.getClinic = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/hospitals?id=${id}`);
  const hospital = prepareClinicData(request.data.result);
  res.render('clinics/clinic', { hospital });
};

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/hospitals/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};
