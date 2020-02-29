const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const BLOCKCHAIN_URL = config.get('BLOCKCHAIN_API_URL');
const { DataPager } = require('./../helpers/pager');
const { processFavoritesData } = require('./../helpers/favorites');
const Localization = require('./../helpers/localization').Localization;

const DEFAULT_CATEGORY = 'clinics';

exports.getFavorites = async (req, res) => {
    const parameters = JSON.parse(JSON.stringify(req.query));
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;
    const localization = new Localization(req.cookies.locale);

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        return res.render('pages/request-login', {
            req,
            title: `MedPoints™ Please login`,
        });
    }

    const request = await axios.get(`${API_URL}/api/users/${MedPoints_PublicKey}/${MedPoints_PrivateKey}/favorites`);
    let selectedCategory = parameters.category || DEFAULT_CATEGORY;

    // Get all blockchain blocks
    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const data = await processFavoritesData(request.data.result) || {pharmacies: [], doctors: [], clinics: []};

    
    const dataPager = new DataPager(data[selectedCategory], data[selectedCategory].count, parameters.page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/account/favorites',
        parameters: req.query
      };
    return res.render('pages/favorites', {
        recordsCount: response.data.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        req,
        selectedCategory,
        selectedCategoryCaption: localization.localize(`categories.${selectedCategory}`),
        pagerInfo,
        data: dataPager.getPageData(),
        title: localization.localize(`titles.favorites`),
        PAGE_TITLE: localization.localize(`titles.favorites`),
    });
};

exports.addFavourites = async (req, res) => {
    const {
        id,
        type,
    } = req.body;
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const data = {
        id,
        type,
    };
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${API_URL}/api/users/${MedPoints_PublicKey}/${MedPoints_PrivateKey}/favorites`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};

exports.removeFavourites = async (req, res) => {
    const {
        id,
        type,
    } = req.body;
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const data = {
        id,
        type,
    };
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${API_URL}/api/users/${MedPoints_PublicKey}/${MedPoints_PrivateKey}/favorites/remove`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};