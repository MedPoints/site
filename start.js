// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
const fs = require('fs');
const http = require('http');
const https = require('https');


const app = require('./app');
app.set('port', process.env.PORT || 80);
app.set('host', process.env.HOST || '0.0.0.0');


const httpServer = http.createServer(app);
httpServer.listen(app.get('port'), app.get('host'), () => {
    console.log(`HTTP server running on port: ${httpServer.address().port}`);
});

try {
    const credentials = {
        key: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/privkey.pem', 'utf8'),
        cert: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/cert.pem', 'utf8'),
        ca: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/chain.pem', 'utf8'),
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, () => {
        global.httpsTrue = true;
        console.log('HTTPS server running on port: 443');
    });

} catch (e) {
    console.log(`Error: Cannot start HTTPS server: ${e.message}`);
}