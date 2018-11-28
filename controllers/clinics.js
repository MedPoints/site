const config = require('config');
const axios = require('axios');
const fs = require('fs');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { prepareClinicData } = require('./../helpers/clinics');
const {queryPersistant} = require('./../helpers/query-persistant');


const PAGE_TITLE = 'Clinics';

exports.getClinics = async (req, res) => {
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


  let url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/hospitals`);  
  const request = await axios.get(url);
  let hospitals = request.data.result.data.map(clinic => prepareClinicData(clinic, {
    search: req.query.name
  }));
  
  
  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = hospitals.length; i < length; i++) {
    const hospital = hospitals[i];
    if (hospital.coordinations && hospital.coordinations.lat && hospital.coordinations.lon) {
      count++;
      avgCoordinates.lat += hospital.coordinations.lat;
      avgCoordinates.lng += hospital.coordinations.lon;
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
    total);
  const pagerInfo = {
    pager,
    baseUrl: '/clinics',
    parameters: req.query
  };

  res.render('clinics/clinics', { 
    hospitals, 
    pagerInfo, 
    PAGE_TITLE, 
    avgCoordinates, 
    title: 'MedPoints™ Clinics', 
    filter: req.query.filter,
    req,
  });
};

exports.getClinicsByLocation = async (req, res) => {
  const countries = JSON.parse(fs.readFileSync('./public/data/countries.json', 'utf8'));
  const request = await axios.get(`${API_URL}/api/hospitals/locations`);
  const locationsData = request.data.result;
  let clinicsGroups = [
    { countryName: '<b>World</b>', countryCode: '', count: locationsData.worldsCount },
  ];
  let locations = [];
  for (let i = 0, length = locationsData.locations.length; i < length; i++) {
    const location = locationsData.locations[i];
    if (location.name) {
      const country = countries.find((country) => country.value === location.name);
      clinicsGroups.push({countryName: country.label, countryCode: location.name, count: location.count});
    }

    if (location.hospitals) {
      for (let j = 0, hospitalsLength = location.hospitals.length; j < length; j++) {
        var hospital = location.hospitals[j];
        if (hospital && hospital.coordinations &&
          hospital.coordinations.lat && hospital.coordinations.lon)
          locations.push(hospital);
      }
    }
  }

  

  return {
    locations,
    clinicsGroups
  };
};

exports.getClinic = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/hospitals?id=${id}`);
  const hospital = prepareClinicData(request.data.result);
  res.render('clinics/clinic', { hospital, hospitalJson: JSON.stringify(hospital), title: `MedPoints™ - Clinics - ${hospital.name}`, req, });
};

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/hospitals/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};