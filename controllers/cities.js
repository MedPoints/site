const fs = require('fs');

exports.getCities = async (req, res) => {
  const {
      filter
  } = req.query;
  const cities = JSON.parse(fs.readFileSync('./public/data/cities.json', 'utf8'));
  const filteredCities = cities.filter(city => city.name.startsWith(filter)).map(city => {
      return { label: city.name, value: city.name };
  });

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ cities: filteredCities }));
};
