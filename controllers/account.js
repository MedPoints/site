const config = require('config');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const Promise = require('bluebird');

const API_URL = config.get('API_URL');
const BLOCKCHAIN_URL = config.get('BLOCKCHAIN_API_URL');

const Localization = require('../helpers/localization').Localization;

const { prepareClinicData } = require('./../helpers/clinics');
const { prepareDoctorData } = require('./../helpers/doctors');
const { prepareTransactionData, prepareAppointmentData, getTransactions, addUploadsToTransactions } = require('./../helpers/account');
const { DataPager } = require('./../helpers/pager');
const DEFAULT_PAGE_SIZE = 10;


const generateId = (length) => {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}



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

    if (req.query.amount) {
        await addBalance(req.query.amount, MedPoints_PublicKey);
        res.redirect(`/account/`);
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
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensResponse.data.result.count / 0.001;
    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);
    const appointmentsData = transactions.map(transaction => prepareAppointmentData(transaction));

    const dates = {
        from: "",
        to: "",
    };

    for (const transaction of transactions) {

        if (!dates.from) {
            dates.from = transaction.Date;
        }
        if (!dates.to) {
            dates.to = transaction.Date;
        }

        const transTime = moment(transaction.Date, 'YYYY-MM-DD').unix();
        const fromTime = moment(dates.from, 'YYYY-MM-DD').unix();
        const toTime = moment(dates.to, 'YYYY-MM-DD').unix();

        if (transTime < fromTime) {
            dates.from = transaction.Date;
        } else if (transTime > toTime) {
            dates.to = transaction.Date;
        }
    }

    res.render('accounts/account', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
        pagerInfo: dataPager,
        transactions, 
        dates,
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
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensResponse.data.result.count / 0.001;
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);
    // Prepare pager to get only current data page
    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);
    const pagerInfo = {
        pager: dataPager.pager,
        baseUrl: '/account/records',
        parameters: req.query
    };

    // Get current data page
    let transactions = await getTransactions(dataPager.getPageData(), localization);

    // Get all user uploads
    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);

    const dirPath = `./uploads/${MedPoints_PublicKey}`;
    let filesSorted = [];

    if (fs.existsSync(dirPath)) {

        const uploadsNotLinked = uploadsResponse.data.result.filter(upload => upload.transactionId === "noTransaction");
        const uploadsLinked = uploadsResponse.data.result.filter(upload => upload.transactionId !== "noTransaction");

        transactions = addUploadsToTransactions(MedPoints_PublicKey, transactions, uploadsLinked);

        uploadsNotLinked.forEach(upload => {
            const file = {
                fullname: upload.fullname,
                name: `${upload.filename}-${upload.timestamp}`,
                path: `/${MedPoints_PublicKey}/${upload.fullname}`,
                ext: upload.extension,
                timestamp: upload.timestamp,
                date: moment.unix(upload.timestamp/1000).format('YYYY-MM-DD'),
            };

            const fileObj = filesSorted.find(obj => obj.date === file.date);

            if (fileObj) {
                fileObj.files.push(file);
            } else {
                filesSorted.push({
                    date: file.date,
                    files: [file],
                });
            }
        });
    }

    const filteredTransactions = transactions.filter(el => el.uploads && el.uploads.length);

    const dates = {
        linked: {
            from: "",
            to: "",
        },
        separate: {
            from: "",
            to: "",
        }
    };

    for (const transaction of filteredTransactions) {
        if (!dates.linked.from) {
            dates.linked.from = transaction.Date;
        }
        if (!dates.linked.to) {
            dates.linked.to = transaction.Date;
        }

        const transTime = moment(transaction.Date, 'YYYY-MM-DD').unix();
        const fromTime = moment(dates.linked.from, 'YYYY-MM-DD').unix();
        const toTime = moment(dates.linked.to, 'YYYY-MM-DD').unix();

        if (transTime < fromTime) {
            dates.linked.from = transaction.Date;
        } else if (transTime > toTime) {
            dates.linked.to = transaction.Date;
        }
    }

    for (const fileObj of filesSorted) {
        if (!dates.separate.from) {
            dates.separate.from = fileObj.date;
        }
        if (!dates.separate.to) {
            dates.separate.to = fileObj.date;
        }

        const fileTime = moment(fileObj.date, 'YYYY-MM-DD').unix();
        const fromTime = moment(dates.separate.from, 'YYYY-MM-DD').unix();
        const toTime = moment(dates.separate.to, 'YYYY-MM-DD').unix();

        if (fileTime < fromTime) {
            dates.separate.from = fileObj.date;
        } else if (fileTime > toTime) {
            dates.separate.to = fileObj.date;
        }
    }

    res.render('accounts/account-records', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
        pagerInfo: dataPager,
        transactions: filteredTransactions,
        filesSorted,
        dates,
        PAGE_TITLE: localization.localize('titles.accountRecords'),
        title: localization.localize('titles.accountRecords'),
        req,
    });
};

exports.addRecord = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const {
        page,
    } = req.query;

    const localization = new Localization(req.cookies.locale);

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountRecords'), title: localization.localize('titles.accountRecords') });
        return;
    }

    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensResponse.data.result.count / 0.001;
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);
    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);

    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);
    let transactions = await getTransactions(dataPager.getPageData(), localization);

    res.render('accounts/account-add-record', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
        pagerInfo: dataPager,
        transactions,
        PAGE_TITLE: localization.localize('titles.accountAddRecord'), 
        title: localization.localize('titles.accountAddRecord'),
        req, 
    });
};

exports.uploadRecord = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const localization = new Localization(req.cookies.locale);

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountRecords'), title: localization.localize('titles.accountRecords') });
        return;
    }

    const dirPath = `./uploads/${MedPoints_PublicKey}`;

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    if (req.body && req.body.transactionId) {
        const transactionId = req.body.transactionId;

        if (req.files && req.files.length) {
            for (const file of req.files) {
                fs.renameSync(path.join(file.destination, file.filename), path.join(dirPath, file.filename));

                const name = path.parse(file.filename).name;

                await axios.post(`${API_URL}/api/uploads`, {
                    publicKey: MedPoints_PublicKey,
                    transactionId: transactionId,
                    fullname: file.filename,
                    filename: name.split("-").slice(0, -1).join("-"),
                    timestamp: name.split("-").pop(),
                    extension: path.extname(file.filename).slice(1),
                });
            }
        }
    }

    res.redirect(`/account/records/`);
};

exports.getFoundations = async (req, res) => {
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

    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);

    // Prepare pager to get only current data page
    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);

    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensResponse.data.result.count / 0.001;

    // Get foundations data
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);
    foundationsResponse.data.result.map(foundation => {
        foundation.date = moment.unix(foundation.timestamp/1000).format('YYYY-MM-DD');
        foundation.time = moment.unix(foundation.timestamp/1000).format('HH:mm:ss');
    });

    res.render('accounts/account-foundations', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
        pagerInfo: dataPager,
        PAGE_TITLE: localization.localize('titles.accountFoundations'),
        foundations: foundationsResponse.data.result,
        title: localization.localize('titles.accountFoundations'),
        req,
    });
};

exports.addFoundation = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const localization = new Localization(req.cookies.locale);

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountRecords'), title: localization.localize('titles.accountRecords') });
        return;
    }

    if (req.body) {
        const { name, link, treatment } = req.body;
        if (name && link && treatment) {
            await axios.post(`${API_URL}/api/foundations`, {
                publicKey: MedPoints_PublicKey,
                transactionId: generateId(48),
                name: name,
                link: link,
                treatment: treatment,
                timestamp: Date.now(),
            });
        }
    }

    res.status(200).end();
};

exports.getBalance = async (req, res) => {
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

    const response = await axios.get(`${BLOCKCHAIN_URL}/${MedPoints_PrivateKey}/transactions`);

    // Prepare pager to get only current data page
    const dataPager = new DataPager(response.data, DEFAULT_PAGE_SIZE, page);

    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);
    const ticketsResponse = await axios.get(`${API_URL}/api/tickets/${MedPoints_PublicKey}/${MedPoints_PrivateKey}`);
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);

    // Get tokens data
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}`);
    tokensResponse.data.result.map(transaction => {
        transaction.classes = {
            alert: transaction.type === "add" ? "alert-success" : "alert-danger",
            fa: transaction.type === "add" ? "fa-plus" : "fa-minus",
        };
        if (transaction.name.includes("replenishment")) {
            transaction.name = localization.localize('account.balancePage.replenishment');
        }
        transaction.balanceToken = transaction.balanceUSD / 0.001;
        transaction.date = moment.unix(transaction.timestamp/1000).format('YYYY-MM-DD');
        transaction.time = moment.unix(transaction.timestamp/1000).format('HH:mm:ss');
    });
    tokensResponse.data.result = tokensResponse.data.result.reverse();
    const tokensCountResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensCountResponse.data.result.count / 0.001;

    res.render('accounts/account-balance', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: response.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
        pagerInfo: dataPager,
        PAGE_TITLE: localization.localize('titles.accountBalance'),
        transactions: tokensResponse.data.result,
        title: localization.localize('titles.accountBalance'),
        req,
    });
};

exports.addBalance = async (req, res) => {
    const {
        MedPoints_PrivateKey,
        MedPoints_PublicKey,
    } = req.cookies;

    const localization = new Localization(req.cookies.locale);

    if (!MedPoints_PrivateKey || !MedPoints_PublicKey) {
        res.render('accounts/login', { isLoggedIn: false, PAGE_TITLE: localization.localize('titles.accountRecords'), title: localization.localize('titles.accountRecords') });
        return;
    }

    if (req.body) {
        const { amount } = req.body;
        if (amount) {
            if (isNaN(parseFloat(amount))) {
                return res.status(200).end();
            }

            const sum = parseFloat(amount);

            if (sum <= 0 || sum > 1000) {
                return res.status(200).end();
            }

            await axios.post(`${API_URL}/api/tokens`, {
                publicKey: MedPoints_PublicKey,
                transactionId: generateId(48),
                name: "Balance replenishment",
                type: "add",
                balanceUSD: sum,
                timestamp: Date.now(),
            });
        }
    }

    res.status(200).end();
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
    const foundationsResponse = await axios.get(`${API_URL}/api/foundations/${MedPoints_PublicKey}`);
    const tokensResponse = await axios.get(`${API_URL}/api/tokens/${MedPoints_PublicKey}/count`);
    const tokensCount = tokensResponse.data.result.count / 0.001;
    const uploadsResponse = await axios.get(`${API_URL}/api/uploads/${MedPoints_PublicKey}`);
    res.render('accounts/account-edit', { 
        recordsCount: uploadsResponse.data.result.length,
        foundationsCount: foundationsResponse.data.result.length,
        appointmentsCount: blockchainResponse.data.length,
        ticketsCount: ticketsResponse.data.result.length,
        tokensCount,
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