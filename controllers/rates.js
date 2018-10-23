const axios = require('axios');
const localization = require('./../helpers/localization').localization;

const PAGE_TITLE = localization.localize('breadcrumbs.rates'); 
const MPT_CURRENCY_CODE = 'USD';
const EXCHANGE_API = 'https://min-api.cryptocompare.com/data/price';

exports.getRates = async (req, res) => {

    res.render('pages/rates', { 
        
        PAGE_TITLE, 
        pageName: 'rates',
        title: localization.localize('pageTitles.rates'),
    });
};

exports.calculateRates = async (req, res) => {
    const {
        currency,
        amount,
    } = req.body;

    const request = await axios.get(EXCHANGE_API, { 
        params: { fsym: currency.toUpperCase(), tsyms: MPT_CURRENCY_CODE }, 
    });
    const result = request.data[MPT_CURRENCY_CODE];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, rate: result }));
};

