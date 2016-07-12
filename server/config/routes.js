
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app){

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


}
