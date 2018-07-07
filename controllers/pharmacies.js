const axios = require('axios');
const API_URL = process.env.API_URL;

const pharmacies_data = [
  {
    id: 1,
    name: 'Pharmacy Store #1',
    description: 'Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.',
    location: {
      address: '462 First Avenue',
      city: 'New York',
      state: 'NY',
      country: 'United States'
    },
    work_time: [
      {
        weekdays: 'Monday-Friday',
        time: '8:00 - 17:00'
      },
      {
        weekdays: 'Saturday',
        time: '10:00 - 16:00'
      },
      {
        weekdays: 'Sunday',
        time: '12:00 - 14:00'
      },
    ],
    drugs: 33600 
  },
  {
    id: 2,
    name: 'Pharmacy Store #2',
    description: 'Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.',
    location: {
      address: '462 First Avenue',
      city: 'New York',
      state: 'NY',
      country: 'United States'
    },
    work_time: [
      {
        weekdays: 'Monday-Friday',
        time: '8:00 - 17:00'
      },
      {
        weekdays: 'Saturday',
        time: '10:00 - 16:00'
      },
      {
        weekdays: 'Sunday',
        time: '12:00 - 14:00'
      },
    ],
    drugs: 31620 
  },
  {
    id: 3,
    name: 'Pharmacy Store #3',
    description: 'Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.',
    location: {
      address: '462 First Avenue',
      city: 'New York',
      state: 'NY',
      country: 'United States'
    },
    work_time: [
      {
        weekdays: 'Monday-Friday',
        time: '8:00 - 17:00'
      },
      {
        weekdays: 'Saturday',
        time: '10:00 - 16:00'
      },
      {
        weekdays: 'Sunday',
        time: '12:00 - 14:00'
      },
    ],
    drugs: 25000 
  },
  
];

// Pharmacy
// {
// 	id: id,
// 	name: name,
// 	description: description,
// 	location: {
// 		address: address, // улица + дом
// 		city: city,
// 		state: state,
// 		country: country
// 	}, // or string: "address"
// 	work_time: [
// 		{
// 			start: {
// 				weekday: weekday,
// 				time: time
// 			},
// 			end: {
// 				weekday: weekday,
// 				time: time
// 			}
// 		},
// 		{
// 			start: {
// 				weekday: weekday,
// 				time: time
// 			},
// 			end: {
// 				weekday: weekday,
// 				time: time
// 			}
// 		},
// 		...
// 	],
// 	drugs: drugs // number
// }

exports.getPharmacies = async (req, res) => {
  // const request = await axios.get(`${API_URL}/api/clinics`);
  // const doctors = request.data.result;
  const pharmacies = pharmacies_data;
  res.render('pharmacies/pharmacies', { pharmacies });
};

exports.getPharmacy = async (req, res) => {
  const id = req.params.id;
  // const request = await axios.get(`${API_URL}/api/clinics?id=${id}`);
  // const doctor = request.data.result;
  const pharmacy = pharmacies_data.find(p => p.id === Number(id));
  res.render('pharmacies/pharmacy', { pharmacy });
}