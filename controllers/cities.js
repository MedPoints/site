const fs = require('fs');

exports.getCities = async (req, res) => {
  const { filter } = req.query;
  const cities = JSON.parse(fs.readFileSync('./public/data/cities.json', 'utf8'));
  const parsedCities = [];
  for (const city of cities) {
    city.names.forEach(el => parsedCities.push({name: el, origin: city.origin}));
  }

  const filteredCities = parsedCities.filter(city => city.name.startsWith(filter.toLowerCase())).map(city => {
    let _city = "";
    _city = city.name.split(" ").map(el => `${el[0].toUpperCase()}${el.slice(1)}`).join(" ");
    _city = _city.split("-").map(el => `${el[0].toUpperCase()}${el.slice(1)}`).join("-");
    return { label: _city, value: _city, origin: city.origin };
  });

  if (!filteredCities.length) {
    filteredCities.push({ label: "No matches found", value: "No matches found"});
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ cities: filteredCities }));
};
