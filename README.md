# This is a main site for the MedPoints system

We are using `Node.js` stack for creation this beatiful app.
`express` and `express-handlebars` create the architecture base for the MVC-application.

## Run 
Before you need to run
```javascript
  npm install
```

For running the app, you need to run the
```javascript
  npm run start
```

For running dev-version of the app, you need to run
```javascript
  npm run dev
```

## Architecture
The app works as a facade-app for the api and the blockchain-prototype, it gathers all the data together and renders it with using of handelbars to markup.
The app works on the top of MVC-architecture.
