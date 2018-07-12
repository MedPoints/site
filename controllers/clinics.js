const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { Pager, PAGE_SIZE } = require('./../helpers/pager');

const PAGE_TITLE = 'Clinics';

exports.getClinics = async (req, res) => {
  const {name} = req.query;
  const page = Number(req.query.page) || 1;
  let url = `${API_URL}/api/hospitals?page=${page}&count=${PAGE_SIZE}`;
  if (name) {
    url += `&name=${name}`;
  }
  const request = await axios.get(url);
  let hospitals = request.data.result.data;
  if (!Array.isArray(hospitals)) {
    hospitals = [hospitals];
  }

  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);
  const pagerInfo = {
    pager,
    baseUrl: '/clinics'
  };

  res.render('clinics/clinics', { hospitals, pagerInfo });
};

exports.getClinic = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/hospitals?id=${id}`);
  const hospital = request.data.result;
  res.render('clinics/clinic', { hospital });
};
