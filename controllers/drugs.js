const axios = require('axios');
const API_URL = process.env.API_URL;

const drugs_data = [
  {
    id: 1,
    name: 'Aspirin acetylsalicylic acid (ASA)',
    short_descr: 'The prototypical analgesic used in the treatment of mild to moderate pain. It has anti-inflammatory and antipyretic properties and acts as an inhibitor of cyclooxygenase which results in the inhibition of the biosynthesis of prostaglandins.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    group: {
      id: 123,
      name: 'Analgesic',
    },
    price: {
      dollars: 24,
      mpts: 240,
    },
    is_covered_by_insurance: true,
    is_by_prescription: true,
    providers: {
      pharmacies: 2215, 
    }
  },
  {
    id: 2,
    name: 'Buprenorphine',
    short_descr: 'The prototypical analgesic used in the treatment of mild to moderate pain. It has anti-inflammatory and antipyretic properties and acts as an inhibitor of cyclooxygenase which results in the inhibition of the biosynthesis of prostaglandins.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    group: {
      id: 321,
      name: 'Anesthetic',
    },
    price: {
      dollars: 50,
      mpts: 350,
    },
    is_covered_by_insurance: false,
    is_by_prescription: true,
    providers: {
      pharmacies: 120, 
    }
  },
  {
    id: 3,
    name: 'Nalbuphine',
    short_descr: 'The prototypical analgesic used in the treatment of mild to moderate pain. It has anti-inflammatory and antipyretic properties and acts as an inhibitor of cyclooxygenase which results in the inhibition of the biosynthesis of prostaglandins.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    group: {
      id: 321,
      name: 'Anesthetic',
    },
    price: {
      dollars: 100,
      mpts: 500,
    },
    is_covered_by_insurance: false,
    is_by_prescription: true,
    providers: {
      pharmacies: 50, 
    }
  },
  {
    id: 4,
    name: 'Fentanyl',
    short_descr: 'The prototypical analgesic used in the treatment of mild to moderate pain. It has anti-inflammatory and antipyretic properties and acts as an inhibitor of cyclooxygenase which results in the inhibition of the biosynthesis of prostaglandins.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    group: {
      id: 123,
      name: 'Anesthetic',
    },
    price: {
      dollars: 40,
      mpts: 350,
    },
    is_covered_by_insurance: false,
    is_by_prescription: true,
    providers: {
      pharmacies: 500, 
    }
  },
  {
    id: 5,
    name: 'Pentobarbital',
    short_descr: 'The prototypical analgesic used in the treatment of mild to moderate pain. It has anti-inflammatory and antipyretic properties and acts as an inhibitor of cyclooxygenase which results in the inhibition of the biosynthesis of prostaglandins.',
    full_descr: '<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p><p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>',
    group: {
      id: 213,
      name: 'Sedative',
    },
    price: {
      dollars: 15,
      mpts: 100,
    },
    is_covered_by_insurance: true,
    is_by_prescription: false,
    providers: {
      pharmacies: 1200, 
    }
  },
];

// 	price: {
// 		dollars: dollars,
// 		mpts: mpts
// 	},
// 	is_covered_by_insurance: is_covered_by_insurance,
// 	is_by_prescription: is_on_prescription,
// 	providers: {
// 		pharmacies: pharmacies, // number
// 	}  
// }

exports.getDrugs = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const drugs = drugs_data;
  res.render('drugs/drugs', { drugs });
};

exports.getDrug = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const drug = drugs_data.find(d => d.id === Number(id));
  res.render('drugs/drug', { drug });
}