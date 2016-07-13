
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


mongoose.connect('mongodb://localhost/quotes_development_sashimi');

// create a variable that points to the path
//  where all of the model live
let models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and
//  require (run) each of the javascript file
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0) {
    // require the file
    //  (this runs the model file which register the schema)
    require(models_path + '/' + file);
  }
});
