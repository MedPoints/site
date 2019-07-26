const config = require('config');
const axios = require('axios');
const API_URL = config.get('API_URL');
const { prepareTicketsData } = require('./../helpers/tickets');
const Localization = require('./../helpers/localization').Localization;

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
    const localization = new Localization(req.cookies.locale);

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
    const localization = new Localization(req.cookies.locale);
    const request = await axios.post(`${API_URL}/api/tickets/create`, data);
    if (request.status === 200) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status: request.status, statusText: request.statusText }));
    } else {
        throw new Error(localization.localize('errors.requestError'));
    }
};

exports.addTickets = async (req, res) => {
    
    const localization = new Localization(req.cookies.locale);
    res.render('pages/add-ticket', { 
        PAGE_TITLE: localization.localize('titles.accountAddTicket'), 
        title: localization.localize('titles.accountAddTicket'),
        req, 
    });
};

exports.getTickets = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const localization = new Localization(req.cookies.locale);
    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('pages/account-tickets', { tickets: [], 
            PAGE_TITLE: localization.localize('titles.accountTickets'), 
            requireLogIn: true, 
            title: localization.localize('titles.accountTickets'),
            req, 
        });
        return;
    }

    let request = {};
    let tickets = [];
    try {
        request = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
        tickets = prepareTicketsData(request.data.result).reduce((acc, value) => {
            acc.all.push(value);
            if (value.status === 'open') {
                acc.open.push(value);
            } else {
                acc.closed.push(value);
            }

            return acc;
        }, {
            'all': [],
            'open': [],
            'closed': [],
        });
    } catch(ex) {
        console.log('Error in the tickets request.');
    }

    res.render('pages/account-tickets', { tickets, 
        PAGE_TITLE: localization.localize('titles.accountTickets'), 
        requireLogIn: false, 
        title: localization.localize('titles.accountTickets'),
        req, 
    });
};