
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
  show: function(req, res){
    Quote.find({}).
      sort({created_at: -1}).
      exec( function(err,quotes){
      res.render('main', {quotes: quotes})
    });
  },

  create: function(req, res){
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
  },
}
