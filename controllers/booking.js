const config = require('config');
const axios = require('axios');
const API_URL = config.get('BLOCKCHAIN_API_URL');

exports.register = async (req, res) => {
    // clinicId:""
    // dateOfBirth:"2011-08-19"
    // doctorId:"5b6db310a2ebf97c8518c22a"
    // email:"rejoh@hubii-network.com"
    // firstName:"asd"
    // lastName:"ads"
    // serviceId:"5b6839e803a93a1f2e1e5a05"
    // sex:"male"

    // {
    //     "Id": "string",
    //     "UserAddress": "string",
    //     "DoctorId": "string",
    //     "ClinicId": "string",
    //     "ServiceId": "string",
    //     "Description": "string",
    //     "Date": "2018-08-26T11:54:46.662Z"
    //   }

    // const request = await axios.get(`${API_URL}/api/doctors/${id}/hospitals?service=${service}`);
    // const clinics = request.data.result;
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({ status: 200, clinics }));
};