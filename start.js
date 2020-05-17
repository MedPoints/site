// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require('./app');
const timer = require('./timer');

try {
    const credentials = {
        key: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/privkey.pem', 'utf8'),
        cert: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/cert.pem', 'utf8'),
        ca: fs.readFileSync('/etc/letsencrypt/live/medpoints.online/chain.pem', 'utf8'),
    };

    const httpsServer = https.createServer(credentials, app);
    const httpsPORT = process.env.HTTPS_PORT || 443;

    httpsServer.listen(httpsPORT, () => {
        global.httpsTrue = true;
        console.log(`HTTPS server running on port: ${httpsPORT}`);
    });

} catch (e) {
    console.log(`Error: Cannot start HTTPS server: ${e.message}`);

    const httpServer = http.createServer(app);
    const httpPORT = process.env.HTTP_PORT || 80;

    httpServer.listen(httpPORT, () => {
        console.log(`HTTP server running on port: ${httpPORT}`);
    });
}

(async () => {
    await timer.run(1, 10);
})();

