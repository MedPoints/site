const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { queryPersistant } = require('./../helpers/query-persistant');

const PAGE_TITLE = 'Drugs';

exports.getDrugs = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/drugs`);  
  const request = await axios.get(url);
  let drugs = request.data.result.data ;

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
    baseUrl: '/drugs',
    parameters: req.query
  };

  const groupsUrl = `${API_URL}/api/groups`;
  const categoriesRequest = await axios.get(groupsUrl);
  const categories = categoriesRequest.data.result.data;

  res.render('drugs/drugs', { 
    drugs, 
    pagerInfo, 
    PAGE_TITLE, 
    categories, 
    title: `MedPoints™ Drugs`, 
    filter: req.query.filter,
  });
};

exports.getDrug = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/drugs?id=${id}`);
  const drug = request.data.result;

  let providersLocations = [];
  for (let i = 0, length = drug.providers.pharmacies.length; i < length; i++) {
    let provider = drug.providers.pharmacies[i];
    if (provider && provider.coordinations &&
      provider.coordinations.lat && provider.coordinations.lon) {

        providersLocations.push(provider);
      }
  }
  res.render('drugs/drug', { drug, providersLocations, PAGE_TITLE, title: `MedPoints™ - Drugs - ${drug.name}` });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/drugs/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};