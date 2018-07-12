const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

const PAGE_TITLE = 'Pharmacies';

exports.getPharmacies = async (req, res) => {
  const {name} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/pharmacies?page=${page}&count=${PAGE_SIZE}`;
  if (name) {
    url += `&name=${name}`;
  }
  const request = await axios.get(url);
  let pharmacies = request.data.result.data ;
  if (!Array.isArray(pharmacies)) {
    pharmacies = [pharmacies];
  }

  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/pharmacies'
  };

  res.render('pharmacies/pharmacies', { pharmacies, pagerInfo, PAGE_TITLE });
};

exports.getPharmacy = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/pharmacies?id=${id}`);
  const pharmacy = request.data.result;
  res.render('pharmacies/pharmacy', { pharmacy });
}