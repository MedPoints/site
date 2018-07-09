const axios = require('axios');
const config = require('config');
const API_URL = config.get('API_URL');

const { Pager, PAGE_SIZE } = require('./../helpers/pager');

exports.pageTitle = 'Services';

exports.getServices = async (req, res) => {
  const page = Number(req.query.page) || 1;

  const request = await axios.get(`${API_URL}/api/services?page=${page}&count=${PAGE_SIZE}`);
  
  const pager = new Pager(
    PAGE_SIZE, 
    page, 
    request.data.result.meta.pages);

  const services = request.data.result.data;
  res.render('services/services', { services, pager });
};

exports.getService = async (req, res) => {
  const id = req.params.id;
  const request = await axios.get(`${API_URL}/api/services?id=${id}`);
  const service = request.data.result;
  res.render('services/service', { service });
}