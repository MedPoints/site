const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const hbsHelpers = require('./handlers/handlebars-helpers').hbsHelpers;
const cookieParser = require('cookie-parser')

const config = require('config');
const API_URL = config.get('API_URL');
const DEFAUL_LOCALE = 'en';

// create our Express app
const app = express();

// view engine setup
const hbsOptions = {
  defaultLayout: 'main',
  partialsDir: 'views/layouts/partials',
  helpers: hbsHelpers
};
app.engine('handlebars', exphbs(hbsOptions));
app.set('view engine', 'handlebars');

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, '.well-known')), { dotfiles: 'allow' });

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use((req, res, next) => {
  // res.locals.h = helpers;
  // res.locals.flashes = req.flash();
  // res.locals.user = req.user || null;
  let locale = req.cookies.locale;
  if (!locale) {
    res.cookie('locale', DEFAUL_LOCALE);
    locale = DEFAUL_LOCALE;
  }
  res.locals.locale = locale;
  res.locals.req = req;

  res.locals.currentPath = req.path;
  res.locals.api = {
    url: API_URL,
  };
  next();
});

app.use('/', routes);

app.use(errorHandlers.notFound);
app.use(errorHandlers.developmentErrors);



// done! we export it so we can start the site in start.js
module.exports = app;