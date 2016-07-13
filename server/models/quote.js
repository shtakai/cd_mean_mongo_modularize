// require mongoose
const mongoose = require('mongoose');

// create the schema
const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// register the schema as a model
const Quote = mongoose.model('Quote', QuoteSchema);
