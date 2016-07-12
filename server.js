const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/quotes_development_sashimi');

const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('Quote', QuoteSchema);

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// app.get .... -> moved to server/config/routes.js
let routes_setter = require('./server/config/routes.js');

// invoke the function in a valiable
routes_setter(app);

let server = app.listen(8000, function(){
  console.log('8000!');
});
