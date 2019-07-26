const config = require('config');
// const axios = require('axios');
// const API_URL = config.get('API_URL');

const PAGE_TITLE = 'Foundation';

exports.getFoundationInfo = async (req, res) => {
  res.render('foundation/foundation', { PAGE_TITLE, title: `MedPoints™ Foundation`,req, });
};

exports.getFoundationCases = async (req, res) => {
    res.render('foundation/foundation-cases', {title: `MedPoints™ Foundation Cases`,req,});
}

exports.getFoundationCase = async (req, res) => {
    res.render('foundation/foundation-case', {title: `MedPoints™ Foundation Case`,req,});
};