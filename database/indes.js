const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/banco', { useMongoClient: true});
mongoose.Promise = global.Promise;

module.express = mongoose;