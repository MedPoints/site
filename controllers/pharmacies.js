const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

const PAGE_TITLE = 'Pharmacies';

exports.getPharmacies = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/pharmacies`);  
  const request = await axios.get(url);
  let pharmacies = request.data.result.data ;


  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/pharmacies',
    parameters: req.query
  };

  res.render('pharmacies/pharmacies', { pharmacies, pagerInfo, PAGE_TITLE });
};

exports.getPharmacy = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/pharmacies?id=${id}`);
  const pharmacy = request.data.result;
  res.render('pharmacies/pharmacy', { pharmacy });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/pharmacies/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};