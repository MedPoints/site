const axios = require('axios');
const config = require('config');
const API_URL = config.get('API_URL');

const { Pager, PAGE_SIZE } = require('./../helpers/pager');
const { queryPersistant } = require('./../helpers/query-persistant');

const PAGE_TITLE = 'Services';

exports.getServices = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/services`);  
  const request = await axios.get(url);
  let services = request.data.result.data ;


  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/services',
    parameters: req.query
  };

  res.render('services/services', { services, pagerInfo });
};

exports.getService = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/services?id=${id}`);
  const service = request.data.result;
  res.render('services/service', { service });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/services/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};