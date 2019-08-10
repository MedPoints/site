const fs = require('fs');

exports.getCities = async (req, res) => {
  const { filter } = req.query;
  const cities = JSON.parse(fs.readFileSync('./public/data/cities.json', 'utf8'));
  const parsedCities = [];
  for (const city of cities) {
    city.names.forEach(el => parsedCities.push(el));
  }
  const filteredCities = parsedCities.filter(city => city.startsWith(filter.toLowerCase())).map(city => {
    const _city = `${city[0].toUpperCase()}${city.slice(1)}`;
    return { label: _city, value: _city };
  });

  if (!filteredCities.length) {
    filteredCities.push({ label: "No matches found", value: "No matches found" });
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ cities: filteredCities }));
};
