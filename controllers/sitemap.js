const axios = require('axios');
const config = require('config');

const API_URL = config.get('API_URL');

exports.get = async (req, res) => {
    const [clinicRequest, doctorRequest, serviceRequest, pharmaciesRequest, drugsRequest] = await Promise.all([
        axios.get(`${API_URL}/api/hospitals?count=100000000000`),
        axios.get(`${API_URL}/api/doctors?count=100000000000`),
        axios.get(`${API_URL}/api/services?count=100000000000`),
        axios.get(`${API_URL}/api/pharmacies?count=100000000000`),
        axios.get(`${API_URL}/api/drugs?count=100000000000`),
    ]).catch(err => {
        console.log('Date request error: ' + err);
    });
    res.render('pages/sitemap', {
        PAGE_TITLE: 'Sitemap', 
        pageName: 'sitemap', 
        title: 'MedPoints™ Sitemap',
        clinics: clinicRequest.data.result.data,
        doctors: doctorRequest.data.result.data,
        services: serviceRequest.data.result.data,
        pharmacies: pharmaciesRequest.data.result.data,
        drugs: drugsRequest.data.result.data
    })
};