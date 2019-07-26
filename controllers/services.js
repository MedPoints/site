const axios = require('axios');
const config = require('config');
const API_URL = config.get('API_URL');

const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { prepareServiceData } = require('./../helpers/services');
const { queryPersistant } = require('./../helpers/query-persistant');

const Localization = require('../helpers/localization').Localization;

exports.getServices = async (req, res) => {
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
  
  let url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/services`);  
  const request = await axios.get(url);
  
  let services = request.data.result.data.map(service => prepareServiceData(service, {
    search: req.query.name
  }));

  let hospitals = [];
  services.forEach(service => {
    if (service.providers && service.providers.hospitals) {
      service.providers.hospitals.forEach(hospital => {
        if ((hospital.coordinations && hospital.coordinations.lat) &&
          (hospital.coordinations && hospital.coordinations.lon))
        hospitals.push({
          id: hospital.id,
          name: hospital.name,
          coordinations: {
            lat: hospital.coordinations.lat,
            lng: hospital.coordinations.lon,
          },
          service: {
            id: service.id,
            name: service.name,
          }
        });
      });
    }
  });

  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = hospitals.length; i < length; i++) {
    const hospital = hospitals[i];
    count++;
    avgCoordinates.lat += hospital.coordinations.lat;
    avgCoordinates.lng += hospital.coordinations.lng;
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
    baseUrl: '/services',
    parameters: req.query
  };
  const localization = new Localization(req.cookies.locale);
  res.render('services/services', { 
    services, 
    hospitals, 
    PAGE_TITLE: localization.localize('titles.services'), 
    avgCoordinates, 
    pagerInfo, 
    title: localization.localize('titles.services'),
    filter: req.query.filter,
    req,
  });
};

exports.getService = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/services?id=${id}`);
  const service = request.data.result;

  let hospitals = [];
  const {
    providers: {
      hospitals: providerHospitals = []
    }
  } = service;
  providerHospitals.forEach(hospital => {
    if ((hospital.coordinations && hospital.coordinations.lat) &&
      (hospital.coordinations && hospital.coordinations.lon))
    hospitals.push({
      id: hospital.id,
      name: hospital.name,
      coordinations: {
        lat: hospital.coordinations.lat,
        lng: hospital.coordinations.lon,
      },
      service: {
        id: service.id,
        name: service.name,
      }
    });
  });

  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = hospitals.length; i < length; i++) {
    const hospital = hospitals[i];
    count++;
    avgCoordinates.lat += hospital.coordinations.lat;
    avgCoordinates.lng += hospital.coordinations.lng;
  }
  if (count > 0) {
    avgCoordinates.lat = avgCoordinates.lat / count;
    avgCoordinates.lng = avgCoordinates.lng / count;  
  }
  const localization = new Localization(req.cookies.locale);
  res.render('services/service', { service, hospitals, PAGE_TITLE: `${localization.localize('titles.services')} - ${service.name}`, avgCoordinates, title: `${localization.localize('titles.services')} - ${service.name}`,req, });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/services/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};

exports.getServicesPartial = async (req, res) => {
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
  
  let url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/services`);  
  const request = await axios.get(url);
  
  let services = request.data.result.data.map(service => prepareServiceData(service, {
    search: req.query.name
  }));

  let hospitals = [];
  services.forEach(service => {
    if (service.providers && service.providers.hospitals) {
      service.providers.hospitals.forEach(hospital => {
        if ((hospital.coordinations && hospital.coordinations.lat) &&
          (hospital.coordinations && hospital.coordinations.lon))
        hospitals.push({
          id: hospital.id,
          name: hospital.name,
          coordinations: {
            lat: hospital.coordinations.lat,
            lng: hospital.coordinations.lon,
          },
          service: {
            id: service.id,
            name: service.name,
          }
        });
      });
    }
  });

  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = hospitals.length; i < length; i++) {
    const hospital = hospitals[i];
    count++;
    avgCoordinates.lat += hospital.coordinations.lat;
    avgCoordinates.lng += hospital.coordinations.lng;
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
    baseUrl: '/services',
    parameters: req.query
  };
  const localization = new Localization(req.cookies.locale);
  res.render('layouts/partials/services-partial', { 
    layout: false,
    services, 
    hospitals, 
    PAGE_TITLE: localization.localize('titles.services'),
    avgCoordinates, 
    pagerInfo, 
    title: localization.localize('titles.services'),
    filter: req.query.filter,
    req,
  });
};