const config = require('config');
const axios = require('axios');
const { DataPager } = require('./../helpers/pager');
const { prepareBlockData } = require('./../helpers/explorer');
const API_URL = config.get('BLOCKCHAIN_API_URL');

const PAGE_TITLE = 'Blockchain Explorer';

exports.getBlocks = async (req, res) => {
    const response = await axios.get(`${API_URL}/api/blockchain/blocks`);
    const chain = response.data; 
    const {
        page,
        count
    } = req.query;

    let transactions = [];
    if (chain && chain.length > 0) {
        transactions = chain[chain.length - 1].Transactions;
    }

    const dataPager = new DataPager(chain.reverse(), count, page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/explorer',
        parameters: req.query
      };

    res.render('pages/explorer', { 
        blocks: dataPager.getPageData().map((block, index) => prepareBlockData(block, index, chain.length)),
        pagerInfo,
        PAGE_TITLE, 
        transactions, 
        title: `MedPoints™ Blockchain`
    });
};