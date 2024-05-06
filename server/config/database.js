const mongoose = require('mongoose');

let Mongo_URL = 'mongodb+srv://jjwsbt:123jjswbt456@mern-auth.zkfrpls.mongodb.net/user-auth'

mongoose.connect(Mongo_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

require('../models/UserModel');