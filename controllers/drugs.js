const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

exports.getDrugs = async (req, res) => {
  const {name} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/drugs?page=${page}&count=${PAGE_SIZE}`;
  if (name) {
    url += `&name=${name}`;
  }
  const request = await axios.get(url);
  let drugs = request.data.result.data ;
  if (!Array.isArray(drugs)) {
    drugs = [drugs];
  }

  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/drugs'
  };

  res.render('drugs/drugs', { drugs, pagerInfo });
};

exports.getDrug = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/drugs?id=${id}`);
  const drug = request.data.result;
  res.render('drugs/drug', { drug });
}