const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { prepareTicketsData } = require('./../helpers/tickets');
const localization = require('./../helpers/localization').localization;

const PAGE_TITLE = 'Support Tickets'; 

exports.sendQuestion = async (req, res) => {
    const {
        name,
        email,
        text,
    } = req.body;

    const data = {
        name,
        email,
        text,
    };

    const request = await axios.post(`${API_URL}/api/faq/create`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};

exports.createTicket = async (req, res) => {
    const {
        title,
        subject,
        text,
    } = req.body;
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const data = {
        publicKey: MedPoints_PublicKey,
        privateKey: MedPoints_PrivateKey,
        title,
        subject,
        text,
    };

    const request = await axios.post(`${API_URL}/api/tickets/create`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};

exports.addTickets = async (req, res) => {
    res.render('pages/add-ticket', { PAGE_TITLE: "Add ticket", title: `MedPoints™ Your support tickets` });
};

exports.getTickets = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('pages/account-tickets', { tickets: [], PAGE_TITLE, requireLogIn: true, title: `MedPoints™ Your support tickets` });
    }

    let request = {};
    let tickets = [];
    try {
        request = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
        tickets = prepareTicketsData(request.data.result);
    } catch(ex) {
        console.log('Error in the tickets request.');
    }

    res.render('pages/account-tickets', { tickets, PAGE_TITLE, requireLogIn: false, title: `MedPoints™ Your support tickets` });
};