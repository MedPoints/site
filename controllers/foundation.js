const config = require('config');
// const axios = require('axios');
// const API_URL = config.get('API_URL');

const Localization = require('../helpers/localization').Localization;

exports.getFoundationInfo = async (req, res) => {
  const localization = new Localization(req.cookies.locale);
  res.render('foundation/foundation', { 
    PAGE_TITLE: localization.localize('titles.foundation'), 
    title: localization.localize('titles.foundation'),
    req, 
  });
};

exports.getFoundationCases = async (req, res) => {
    res.render('foundation/foundation-cases', {title: `MedPoints™ Foundation Cases`,req,});
}

exports.getFoundationCase = async (req, res) => {
    res.render('foundation/foundation-case', {title: `MedPoints™ Foundation Case`,req,});
};