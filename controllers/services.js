const axios = require('axios');
const API_URL = process.env.API_URL;

const services_data = [
  {
    id: 1,
    name: 'General Consultation',
    short_descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    is_covered_by_insurance: true,
    price: {
      dollars: 24,
      mpts: 120,
    },
    time: '30 min.',
    providers: {
      clinics: 1200,
      doctors: 2000
    }
  },
  {
    id: 2,
    name: 'Diabetes Consultation',
    short_descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    is_covered_by_insurance: true,
    price: {
      dollars: 50,
      mpts: 330,
    },
    time: '40 min.',
    providers: {
      clinics: 500,
      doctors: 200
    }
  },
  {
    id: 3,
    name: 'Eating disorder',
    short_descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    is_covered_by_insurance: false,
    price: {
      dollars: 60,
      mpts: 380,
    },
    time: '35 min.',
    providers: {
      clinics: 100,
      doctors: 50
    }
  },
  {
    id: 4,
    name: 'Foot Pain',
    short_descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    is_covered_by_insurance: true,
    price: {
      dollars: 30,
      mpts: 170,
    },
    time: '30 min.',
    providers: {
      clinics: 1500,
      doctors: 1800
    }
  },
  {
    id: 5,
    name: 'Back Pain examination',
    short_descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    is_covered_by_insurance: true,
    price: {
      dollars: 100,
      mpts: 400,
    },
    time: '60 min.',
    providers: {
      clinics: 800,
      doctors: 600
    }
  }
];

// Service
// {
// 	id: id,
// 	name: name,
// 	short_descr: short_descr,
// 	full_descr: full_descr,
// 	is_covered_by_insurance: is_covered_by_insurance,
// 	price: {
// 		dollars: dollars,
// 		mpts: mpts
// 	},
// 	time: time,
// 	providers: {
// 		clinics: clinics, // number
// 		doctors: doctors // number
// 	}
// }

exports.pageTitle = 'Services';

exports.getServices = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const services = services_data;
  res.render('services/services', { services });
};

exports.getService = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const service = services_data.find(s => s.id === Number(id));
  res.render('services/service', { service });
}