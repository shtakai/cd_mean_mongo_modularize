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

app.get('/', function(req, res){
  res.render('index');
})

app.post('/quotes', function(req, res){
  let quote = new Quote({
    name: req.body.name,
    quote: req.body.quote
  });
  quote.save(function(err){
    if(err){
      console.log('something went wrong');
    } else{
       res.redirect('/main');
    }
  });
})

app.get('/main', function(req,res){
  Quote.find({}, function(err,quotes){
     res.render('main', {quotes: quotes})
  });
})


let server = app.listen(8000, function(){
  console.log('8000!');
});
