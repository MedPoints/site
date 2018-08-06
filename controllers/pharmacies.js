const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { prepareClinicData } = require('./../helpers/clinics');
const { queryPersistant } = require('./../helpers/query-persistant');

const PAGE_TITLE = 'Pharmacies';

exports.getPharmacies = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/pharmacies`);  
  const request = await axios.get(url);
  let pharmacies = request.data.result.data.map(pharmacy => prepareClinicData(pharmacy));
  
  
  let avgCoordinates = {lat: 0, lng: 0};
  let count = 0;
  for (let i = 0, length = pharmacies.length; i < length; i++) {
    const pharmacy = pharmacies[i];
    if (pharmacy.coordinations && pharmacy.coordinations.lat && pharmacy.coordinations.lon) {
      count++;
      avgCoordinates.lat += pharmacy.coordinations.lat;
      avgCoordinates.lng += pharmacy.coordinations.lon;
    }
  }
  if (count > 0) {
    avgCoordinates.lat = avgCoordinates.lat / count;
    avgCoordinates.lng = avgCoordinates.lng / count;  
  }


  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/pharmacies',
    parameters: req.query
  };

  res.render('pharmacies/pharmacies', { pharmacies, pagerInfo, PAGE_TITLE, avgCoordinates });
};

exports.getPharmacy = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/pharmacies?id=${id}`);
  const pharmacy = prepareClinicData(request.data.result);

  res.render('pharmacies/pharmacy', { pharmacy });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/pharmacies/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};