const axios = require('axios');
const localization = require('./../helpers/localization').localization;
const config = require('config');
const API_URL = config.get('BLOCKCHAIN_API_URL');

const { DataPager } = require('./../helpers/pager');

const PAGE_TITLE = localization.localize('breadcrumbs.rates'); 
const MPT_CURRENCY_CODE = 'USD';
const EXCHANGE_API = 'https://min-api.cryptocompare.com/data/price';

exports.getRates = async (req, res) => {
    const response = await axios.get(`${API_URL}/api/blockchain/blocks`);
    const chain = response.data; 
    const {
        page,
        count
    } = req.query;

    let transactions = [];
    if (chain && chain.length > 0) {
        for (var length = chain.length, i = length - 1; i >= 0; i--) {
            transactions = transactions.concat(chain[i].Transactions);
        }
    }

    const dataPager = new DataPager(transactions, 5, +page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/rates',
        parameters: req.query
      };

    res.render('pages/rates', { 
        PAGE_TITLE, 
        pagerInfo,
        transactions: dataPager.getPageData(),
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

