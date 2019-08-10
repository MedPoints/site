const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { prepareDrugData } = require('./../helpers/drugs');
const { queryPersistant } = require('./../helpers/query-persistant');

const Localization = require('../helpers/localization').Localization;

exports.getDrugs = async (req, res) => {
  const parameters = JSON.parse(JSON.stringify(req.query));
  if (parameters.filter && parameters.filter.city === 'home') {
    const {
        location,
    } = req.cookies;
    if (location) {
      const locationObject = JSON.parse(location);
      parameters.filter.city = locationObject.origin;
    }
  }

  let url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/drugs`);  
  const request = await axios.get(url);
  let drugs = request.data.result.data.map(drug => prepareDrugData(drug, {
    search: req.query.name
  }));
  
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
  const localization = new Localization(req.cookies.locale);

  res.render('drugs/drugs', { 
    drugs, 
    pagerInfo, 
    PAGE_TITLE: localization.localize('titles.drugs'), 
    categories, 
    selectedName: parameters.name,
    selectedCategory: parameters.groupId || '',
    title: localization.localize('titles.drugs'), 
    filter: req.query.filter,
    req,
  });
};

exports.getDrug = async (req, res) => {
  const slug = req.params.slug;
  const id = slug.split('-')[0];
  const _slug = slug.split('-').splice(1).join('-');
  const request = await axios.get(`${API_URL}/api/drugs?id=${id}`);

  if (!_slug || slug !== request.data.result.slug) {
    return res.redirect(`/drugs/${request.data.result.slug}`);
  }

  const drug = request.data.result;

  let providersLocations = [];
  for (let i = 0, length = drug.providers.pharmacies.length; i < length; i++) {
    let provider = drug.providers.pharmacies[i];
    if (provider && provider.coordinations &&
      provider.coordinations.lat && provider.coordinations.lon) {

        providersLocations.push(provider);
      }
  }
  const localization = new Localization(req.cookies.locale);

  res.render('drugs/drug', { 
    drug, 
    providersLocations, 
    PAGE_TITLE: `${localization.localize('titles.drugs')} - ${drug.name}`, 
    title: `${localization.localize('titles.drugs')} - ${drug.name}`,
    req, 
  });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/drugs/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};

exports.getDrugsPartial = async (req, res) => {
  const parameters = JSON.parse(JSON.stringify(req.query));
  if (parameters.filter && parameters.filter.city === 'home') {
    const {
        location,
    } = req.cookies;
    if (location) {
      const locationObject = JSON.parse(location);
      parameters.filter.city = locationObject.origin;
    }
  }

  let url = queryPersistant.applyRequestQueryParameters(parameters, `${API_URL}/api/drugs`);  
  const request = await axios.get(url);
  let drugs = request.data.result.data.map(drug => prepareDrugData(drug, {
    search: req.query.name
  }));
  
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
  const localization = new Localization(req.cookies.locale);

  res.render('layouts/partials/drugs-partial', { 
    layout: false,
    drugs, 
    pagerInfo, 
    PAGE_TITLE: localization.localize('titles.drugs'), 
    categories, 
    selectedName: parameters.name,
    selectedCategory: parameters.groupId || '',
    title: localization.localize('titles.drugs'), 
    filter: req.query.filter,
    req,
  });
};