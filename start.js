// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 80);
app.set('host', process.env.HOST || '0.0.0.0');
const server = app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
