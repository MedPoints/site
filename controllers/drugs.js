const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

const PAGE_TITLE = 'Drugs';

exports.getDrugs = async (req, res) => {
  let url = queryPersistant.applyRequestQueryParameters(req.query, `${API_URL}/api/drugs`);  
  const request = await axios.get(url);
  let drugs = request.data.result.data ;

  const pager = new Pager(
    PAGE_SIZE, 
    Number(req.query.page) || 1, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/drugs',
    parameters: req.query
  };

  const groupsUrl = `${API_URL}/api/groups`;
  const categoriesRequest = await axios.get(groupsUrl);
  const categories = categoriesRequest.data.result.data;

  res.render('drugs/drugs', { drugs, pagerInfo, PAGE_TITLE, categories });
};

exports.getDrug = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/drugs?id=${id}`);
  const drug = request.data.result;
  res.render('drugs/drug', { drug });
}

exports.getCount = async (req, res) => {
  const request = await axios.get(`${API_URL}/api/drugs/count`);
  const count = request.data.result;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ count}));
};