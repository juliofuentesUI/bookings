const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Listings = require('./db/index.js').Listings;
const Dates = require('./db/index.js').Dates;
const Listings_Dates = require('./db/index.js').Listings_Dates;
const Test_Listings = require('./db/index.js').Test_Listings;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));


app.all('/*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/rooms/bookings/listings', (req, res) => {
  Listings.findAll()
  .then((results) => {
    res.send(results); 
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
})

app.get('/rooms/bookings/dates/:month', (req, res) => {
  Dates.findAll({ where: { month: req.params.month } })
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    console.log('ERROR ON GET REQ TO DATES:');
    console.log(err);
    res.send(err);
  })
})

app.get('/rooms/bookings/listings_dates', (req, res) => {
  Listings_Dates.findAll()
  .then((results) => {
    res.send(results); 
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  })
})

// FOR TESTING

app.get('/rooms/bookings/test_listings', (req, res) => {
  Test_Listings.findAll()
  .then((results) => {
    res.send(results); 
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
})

//

app.listen(port, console.log(`${port} is lisenting!`));

module.exports = app;