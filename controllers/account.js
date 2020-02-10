const config = require('config');
const axios = require('axios');

const Promise = require('bluebird');

const API_URL = config.get('API_URL');
const BLOCKCHAIN_URL = config.get('BLOCKCHAIN_API_URL');

const Localization = require('../helpers/localization').Localization;

const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');
const { prepareTransactionData, prepareAppointmentData, getTransactions } = require('./../helpers/account');
const { DataPager } = require('./../helpers/pager');
const DEFAULT_PAGE_SIZE = 10;


exports.getAccountInfo = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const {
        page
    } = req.query;

    const localization = new Localization(req.cookies.locale);

    // Check if user is logged in and render login page if not logged in
    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.account'), title: localization.localize('titles.account') });
        return;
    }


    // Get all blockchain blocks
    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);

    // Prepare pager to get only current data page
    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/account',
        parameters: req.query
      };

    // Get current data page
    let transactions = await getTransactions(dataPager.getPageData(), localization);

    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const appointmentsData = transactions.map(transaction => prepareAppointmentData(transaction));

    res.render('accounts/account', { 
        recordsCount: response.data.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        pagerInfo: dataPager,
        transactions, 
        PAGE_TITLE: localization.localize('titles.account'),
        appointmentsData,
        title: localization.localize('titles.account'),
        req,
    });
};

exports.records = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const {
        page
    } = req.query;
    const localization = new Localization(req.cookies.locale);
    // Check if user is logged in and render login page if not logged in
    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountRecords'), title: localization.localize('titles.accountRecords') });
        return;
    }


    // Get all blockchain blocks
    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    // Prepare pager to get only current data page
    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/account/records',
        parameters: req.query
      };

    // Get current data page
    let transactions = await getTransactions(dataPager.getPageData(), localization);
    res.render('accounts/account-records', { 
        recordsCount: response.data.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        pagerInfo: dataPager,
        transactions,
        PAGE_TITLE: localization.localize('titles.accountRecords'),
        title: localization.localize('titles.accountRecords'),
        req,
    });
};


exports.editInfo = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const localization = new Localization(req.cookies.locale);
    // Check if user is logged in and render login page if not logged in
    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountEdit'), title: localization.localize('titles.accountEdit') });
        return;
    }

    const blockchainResponse = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);
    const profileResponse = await axios.get(`${API_URL}/api/users/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    res.render('accounts/account-edit', { 
        recordsCount: blockchainResponse.data.length,
        appointmentsCount: blockchainResponse.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        accountData: profileResponse.data.result,
        PAGE_TITLE: localization.localize('titles.accountEdit'),
        title: localization.localize('titles.accountEdit'),
        req,
    });
};

exports.updateAccount = async (req, res, next) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    // Check if user is logged in and render login page if not logged in
    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE, title: 'MedPoints™ Account' });
        return;
    }

    const {
        firstName,
        lastName,
        email,
        sex,
    } = req.body;

    let request;
    const localization = new Localization(req.cookies.locale);

    try {
        request = await axios.put(`${API_URL}/api/users/update`, {
            firstName,
            lastName,
            email,
            gender: sex,
            publicKey: MedPoints_PublicKey,
            privateKey: MedPoints_PrivateKey,
        });
    } catch (error) {
        if (error.response && error.response.data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ 
                status: 500, 
                statusText: localization.localize(`errorsByCode.${error.response.data.error}`)
            }));
            return;
        }
    }
    

    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.accountUpdateRequest'));
    }
};

exports.success = async (req, res) => {
    const localization = new Localization(req.cookies.locale);
    res.render('accounts/account-edit-success', { 
        title: localization.localize('titles.accountEdit'),
    });
};