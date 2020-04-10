const config = require('config');
const axios = require('axios');
const BLOCKCHAIN_API_URL = config.get('BLOCKCHAIN_API_URL');
const API_URL = config.get('API_URL');
const CAPTCHA_KEY = config.get('CAPTCHA_SECRET_KEY');

exports.generate = async (req, res) => {
    const request = await axios.post(`${BLOCKCHAIN_API_URL}/api/blockchain/wallets`);
    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};

exports.register = async (req, res) => {
    const {
        publicKey,
        privateKey,
        email,
        firstName,
        lastName,
        token,
    } = req.body;

    const request = await axios.post(`${API_URL}/api/users/register`, {
        publicKey,
        privateKey,
        email,
        firstName,
        lastName,
    });

    const captchaReq = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_KEY}&response=${token}`);
    const captchaRes = captchaReq.data;

    if (!captchaRes.success || captchaRes.action !== "registration" || !captchaRes.score || captchaRes.score < 0.5) {
        if (!request.data.error) {
            request.data.error = "WRONG_CAPTCHA";
        }
    }

    const result = request.data;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 200, ...result }));
};

exports.authenticate = async (req, res) => {
    const {
        publicKey,
        privateKey,
        token,
    } = req.body;

    res.setHeader('Content-Type', 'application/json');
    let request = {};
    let captchaRes = {};
    try {
        request = await axios.post(`${API_URL}/api/users/auth`, {
            publicKey,
            privateKey,
        });

        if (token === "booking") {
            const result = request.data;
            res.send(JSON.stringify({ status: 200, ...result }));
            return;
        }

        const captchaReq = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_KEY}&response=${token}`);
        captchaRes = captchaReq.data;
    } catch (err) {
        return res.send(JSON.stringify({ status: 500, ...err.response.data }));
    }

    if (!captchaRes.success || captchaRes.action !== "login" || !captchaRes.score || captchaRes.score < 0.5) {
        if (!request.data.error) {
            request.data.error = "WRONG_CAPTCHA";
        }
    }
    
    const result = request.data;
    res.send(JSON.stringify({ status: 200, ...result }));
};