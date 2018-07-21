const config = require('config');
// const axios = require('axios');
// const API_URL = config.get('API_URL');

const PAGE_TITLE = 'Foundation';

exports.getFoundationInfo = async (req, res) => {
  res.render('foundation/foundation', { PAGE_TITLE });
};

exports.getFoundationCases = async (req, res) => {
    res.redirect('/foundation');
}

exports.getFoundationCase = async (req, res) => {
    res.redirect('/foundation');
};